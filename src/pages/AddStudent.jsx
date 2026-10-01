import { useState } from "react";
function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `Student Added!\n\nName: ${name}\nAge: ${age}\nCourse: ${course}\nEmail: ${email}`
    );
    setName("");
    setAge("");
    setCourse("");
    setEmail("");
  }
  return (
    <div className="form-page">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter student name"
        />
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          placeholder="Enter age"
        />
        <label>Course</label>
        <input
          type="text"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          placeholder="Enter course"
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />
        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}
export default AddStudent;