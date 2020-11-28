import { Docente } from './docente';
import { Asignatura } from './asignatura';
export class Horario {

    codigoHorario:number;
    turnoHorario:string;
    diaHorario:string;
    horaInicioHorario:string;
    horaFinHorario:string;
    docente:Docente;
    asignatura:Asignatura;
}
