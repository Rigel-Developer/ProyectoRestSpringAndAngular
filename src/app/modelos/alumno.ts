import { Carrera } from './carrera';
import { Semestre } from './semestre';
import { TipoUsuario } from './tipo-usuario';
export class Alumno {

 codigoAlumno:number;
 nombreAlumno:string;
 apellidoAlumno:string;
 dniAlumno:number;
 celularAlumno:number;
 correoAlumno:string;
 contraAlumno:string;
 fechaRegistroAlumno:Date;
 carrera:Carrera;
 semestre:Semestre;
 tipoUsuario:TipoUsuario;



}
