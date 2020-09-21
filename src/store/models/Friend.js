export default class Friend {
  id;
  nombre;
  apellido;
  fechaNacimiento;
  rut;
  email;
  idGenero;

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.apellido = "";
    this.fechaNacimiento = new Date();
    this.rut = "";
    this.email = "";
    this.idGenero = 0;
  }
}
