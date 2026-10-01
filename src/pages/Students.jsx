import StudentCard from "./components/StudentCard";
import students from "./data/students";
function Students() {
  return (
    <div className="students-page">
      <h1>Student Management</h1>
      <p>
        List Of CSC Students
      </p>
      <div className="student-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}
export default Students;