const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

// const [, , arg3] = process.argv;
// const [, base] = arg3.split("=");
// console.log(process.argv);
// console.log(argv);

console.clear();
// console.log(argv);
// console.log("base ", argv.b);
// let base = 10;

crearArchivo(argv.b, argv.l, argv.h)
  .then((resp) => {
    console.log(resp, " creado");
  })
  .catch((err) => {
    console.log(err);
  });
