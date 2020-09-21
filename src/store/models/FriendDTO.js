export default class Friend {
  nombre;
  apellido;
  fechaNacimiento;
  rut;
  email;
  genero;
  idGenero;

  constructor(nombre, apellido, fechaNacimiento, rut, email, genero, idGenero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.rut = rut;
    this.email = email;
    this.genero = genero;
    this.idGenero = idGenero;
  }
}
