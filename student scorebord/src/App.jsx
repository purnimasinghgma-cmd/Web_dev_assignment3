import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Mehta", score: 82 },
    { id: 2, name: "Priya Sharma", score: 35 },
    { id: 3, name: "Rohan Verma", score: 67 },
    { id: 4, name: "Sneha Patel", score: 91 },
    { id: 5, name: "Karan Joshi", score: 28 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  const total = students.length;
  const passing = students.filter((s) => s.score >= 40).length;
  const failing = total - passing;
  const avg = total
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / total)
    : 0;

  return (
    <div className="container">
      <Header />

      <div className="stats-row">
        <div className="stat-box stat-total">
          <div className="num">{total}</div>
          <div className="lbl">Total</div>
        </div>
        <div className="stat-box stat-pass">
          <div className="num">{passing}</div>
          <div className="lbl">Passing</div>
        </div>
        <div className="stat-box stat-fail">
          <div className="num">{failing}</div>
          <div className="lbl">Failing</div>
        </div>
        <div className="stat-box stat-avg">
          <div className="num">{avg}</div>
          <div className="lbl">Avg Score</div>
        </div>
      </div>

      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;
