const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabald de multiplicacion a realizar",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    description: "Este es el numero hasta el cual se realizara la tabla"
  })
  .check((argv, option) => {
    if (isNaN(argv.h)) {
      throw "Hasta¿ tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  }).argv;

module.exports = argv;
