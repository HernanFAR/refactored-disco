export default class Friend {
  nombre;
  apellido;
  fechaNacimiento;
  rut;
  email;
  genero;

  constructor(nombre, apellido, fechaNacimiento, rut, email, genero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.rut = rut;
    this.email = email;
    this.genero = genero;
  }
}
