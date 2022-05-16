const fs = require("fs");
require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let result = "";
    for (let i = 1; i < hasta; i++) {
      result += `${base} x ${i} = ${base * i}, \n`.trap;
    }
    fs.writeFileSync(`./salida/Tabal-del-${base}.txt`, result);

    if (listar) {
      console.log("**********************************".red);
      console.log("Tabla del ".blue, base);
      console.log("**********************************".red);
      console.log(result);
    }

    return "Archivo creado correactamente".green;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo };
