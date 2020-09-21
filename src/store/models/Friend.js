export default class Friend {
  nombre;
  apellido;
  fechaNacimiento;
  rut;
  email;
  idGenero;

  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.fechaNacimiento = new Date();
    this.rut = "";
    this.email = "";
    this.idGenero = 0;
  }
}
