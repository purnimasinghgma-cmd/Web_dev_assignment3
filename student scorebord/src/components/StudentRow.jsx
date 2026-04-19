import React from "react";

function StudentRow({ student, updateScore }) {
  const status = student.score >= 40 ? "Pass" : "Fail";

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input
          className="score-input"
          type="number"
          value={student.score}
          onChange={(e) => updateScore(student.id, e.target.value)}
        />
      </td>
      <td>
        <span className={status === "Pass" ? "pass" : "fail"}>
          {status}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;
