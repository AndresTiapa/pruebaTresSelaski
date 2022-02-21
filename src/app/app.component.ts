import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Student } from './student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public service: ServiceService) {}

  //estudiante a crear
  nuevoEstudiante = {
    nombre: 'Luz',
    edad: 33,
    sexo: 'Femenino',
    id: 4,
  };

  //estudiante a editar
  estudianteEditado = {
    nombre: 'Luisa',
    edad: 33,
    sexo: 'Femenino',
    id: 1,
  };

  //id estudiante a buscar
  idBusqueda = 3;
  //id estudiante a eliminar
  idBeliminado = 2;
  //id estudiante a editar
  idEditado = 1;

  getAllStudents() {
    console.log('Todos');
    console.log(this.service.getStudents());
  }

  addEstudiante() {
    console.log('Crea');
    this.service.createStudent(this.nuevoEstudiante);
  }

  getStudent() {
    console.log('Estudiante: ');
    console.log(this.service.getStudent(this.idBusqueda));
  }

  deleteStudent() {
    console.log('Elimina');
    this.service.deleteStudent(this.idBeliminado);
  }

  updateStudent() {
    console.log('Elimina');
    this.service.updateStudent(this.estudianteEditado, this.idEditado);
  }

  buscarEstudiantes() {
    this.getAllStudents();
  }
  eliminarEstudiante() {
    this.deleteStudent();
  }
  actualizarEstudiante() {
    this.updateStudent();
  }
  crearEstudiante() {
    this.addEstudiante();
  }
  buscarEstudiante() {
    this.getStudent();
  }
}
