export default class Friend {
  id;
  nombreCompleto;
  fechaNacimiento;
  rut;
  email;
  idGenero;
  genero;

  constructor(
    id,
    nombreCompleto,
    fechaNacimiento,
    rut,
    email,
    idGenero,
    genero
  ) {
    this.id = id;
    this.nombreCompleto = nombreCompleto;
    this.fechaNacimiento = fechaNacimiento;
    this.rut = rut;
    this.email = email;
    this.idGenero = idGenero;
    this.genero = genero;
  }
}
