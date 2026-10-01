import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

const initialStudents = [
  {
    id: 1,
    name: "sreeja",
    email: "sreeja@gmail.com",
    course: "CSC",
    year: 3
  },
  {
    id: 2,
    name: "manasa",
    email: "manasa@gmail.com",
    course: "CSC",
    year: 3
  },
  {
    id: 3,
    name: "likhi",
    email: "likhi@gmail.com",
    course: "CSC",
    year: 3
 },
 {
    id: 4,
    name: "manu",
    email: "manu@gmail.com",
    course: "CSC",
    year: 3
 }
];
export function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents);

    const addStudent = (student) => {
        const newStudent = {
            id: Date.now(),
            ...student
        };
        setStudents((previousStudents) => [
            ...previousStudents,
            newStudent
        ]);
    };

    const deleteStudent = (id) => {
        setStudents((previousStudents) =>
            previousStudents.filter(
                (student) => student.id !== id
            )
        );
    };

    const updateStudent = (updatedStudent) => {
        setStudents((previousStudents) =>
            previousStudents.map((student) =>
                student.id === updatedStudent.id
                    ? updatedStudent
                    : student
            )
        );
    };
}