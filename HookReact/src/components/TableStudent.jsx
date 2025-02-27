export default function TableStudent({ data }) {

  return (
    <table className="table table-bordered" id="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Tên sinh viên</th>
          <th scope="col">Điểm trung bình</th>
        </tr>
      </thead>
      <tbody>
       {data.map((student) => (
            <tr key={student.id}>   
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
            </tr>
        ))}
       
      </tbody>
    </table>
  );
}
