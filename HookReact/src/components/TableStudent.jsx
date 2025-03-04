import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

export default function TableStudent({
  data,
  onOpenFormUpdate,
  onDelete,
  avgStudent,
}) {
  return (
    <>
      <div className="bg-light p-3">
        <div style={{ display: "flex" , flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <h2>Danh sách sinh viên</h2>
          <div style={{ backgroundColor: "lightGreen", padding: "10px", borderRadius: "5px" }}>
            <span>Điểm trung bình: {avgStudent ? avgStudent : 0}</span>
          </div>
        </div>

        <br />
        <table className="table table-bordered" id="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sinh viên</th>
              <th scope="col">Điểm</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td style={{ display: "flex", flexDirection: "row" , justifyContent: "center"}}>
                  <Button
                    variant="danger me-3"
                    onClick={() => onDelete(student.id)}
                  >
                    Xóa
                  </Button>

                  <Button
                    variant="warning"
                    onClick={() => onOpenFormUpdate(student)}
                  >
                    Sửa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
