import { Document } from "mongoose";
export interface Aula extends Document{
    num_Classroom:string;
    name_Teacher:string;
    pending_tasks:number;
    complete_tasks:false;
}