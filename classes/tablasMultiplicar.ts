

export class GeneradorTablas {
    
    private tabla: string[];;

    constructor(private numero: number) {
        this.tabla = [];
    }

    generar() {
        for (let i = 1; i <= 10; i++) {
            this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
        }
    }

    get getTabla() {
        return this.tabla;
    }

}