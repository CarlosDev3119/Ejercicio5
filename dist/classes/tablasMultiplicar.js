"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorTablas = void 0;
class GeneradorTablas {
    constructor(numero) {
        this.numero = numero;
        this.tabla = [];
    }
    ;
    generar() {
        for (let i = 1; i <= 10; i++) {
            this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
        }
    }
    get getTabla() {
        return this.tabla;
    }
}
exports.GeneradorTablas = GeneradorTablas;
