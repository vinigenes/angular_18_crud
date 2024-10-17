export class PacienteModelo {
    idPaciente: number;
    cpf: number;
    nome: string;
    cidade: string;
    estado: string;
    email: string;
    celular: string;
    endereco: string;
    codPin

    constructor() {
       this.endereco = '';
       this.cidade = '';
       this.celular = '';
       this.email = '';
       this.idPaciente = 0;
       this.cpf = 0;
       this.nome = '';
       this.estado = '';
       this.codPin = '';

    }
}