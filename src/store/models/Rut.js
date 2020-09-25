export default value => {
  let rutValid = true;

  if (!value) return true;

  try {
    // Divide el rut en numero y numero verificador
    let rutSplitted = value.split("-");

    // El guion representa la separacion del numero y digito, solo debe haber uno
    // Si hago un split en base al guion y hay mas de 2, significa que hay mas de un guion
    // Si hago un split en base al guion y hay 1, significa que no hay guion
    // Ahora, el segundo valor (El digito verificador) debe tener algo, es decir, ser diferente de ""
    if (rutSplitted.length != 2 || rutSplitted[1] === "") throw 0;

    // Genera objeto rut
    let rut = {
      number: rutSplitted[0],
      digit: rutSplitted[1]
    };

    let sum = 0;
    let multiply = 2;

    // Hago el calculo de la suma
    for (let i = 1; i <= rut.number.length; i++) {
      let index = multiply * value.charAt(rut.number.length - i);

      sum = sum + index;

      if (multiply < 7) multiply = multiply + 1;
      else multiply = 2;
    }

    // Obtengo el identificador del modulo 11
    let awaitedDigit = 11 - (sum % 11);

    // Convierdo de las letras a numeros
    rut.digit = rut.digit === "k" || rut.digit === "K" ? 10 : rut.digit;
    rut.digit = rut.digit === 0 ? 11 : rut.digit;

    // Si el numero ingresado es diferente del calculado, no es valido
    if (awaitedDigit != rut.digit) throw 0;
  } catch {
    rutValid = false;
  }

  return rutValid;
};
