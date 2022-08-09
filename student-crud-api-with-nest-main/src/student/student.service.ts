import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  students = [];

  getStudents() {
    return this.students;
  }

  getSpecificStudent(index) {
    return this.students[index];
  }

  createStudent(student) {
    this.students.push(student);
    return student;
  }

  deleteStudent(index) {
    return this.students.splice(index, 1);
  }

  updateStudent(id, student) {
    return (this.students[id] = student);
  }

  updateAllStudent(student) {
    return (this.students = student);
  }
}
