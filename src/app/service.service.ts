import { Injectable } from '@angular/core';
import { Students } from './students';
import { Student } from './student.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  estudiantes = new Students();
  // constructor() {}

  getStudents() {
    return this.estudiantes.estudiantes;
  }

  getStudent(id: number) {
    return this.estudiantes.estudiantes.find((e) => e.id === id);
  }

  createStudent(estudiante: Student) {
    const nuevoId = this.estudiantes.estudiantes.length + 1;
    estudiante.id = nuevoId;
    this.estudiantes.estudiantes.push(estudiante);
  }

  deleteStudent(id: number) {
    this.estudiantes.estudiantes.splice(id, 1);
  }

  updateStudent(estudiante: Student, id: number) {
    const nuevoId = this.estudiantes.estudiantes.length;
    estudiante.id = nuevoId;
    this.estudiantes.estudiantes.splice(id, 1, estudiante);
  }
}
