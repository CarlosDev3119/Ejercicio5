"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tablasMultiplicar_1 = require("./classes/tablasMultiplicar");
const tablaMultiplicar = new tablasMultiplicar_1.GeneradorTablas(5);
tablaMultiplicar.generar();
console.log(tablaMultiplicar.getTabla);
