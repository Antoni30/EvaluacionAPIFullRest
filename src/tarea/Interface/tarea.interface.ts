import { Document } from "mongoose";
export interface Tarea extends Document{
    idAula:number;
    num_Task:string;
    name_Task:string;
    pending_tasks:number;
    complete_tasks:false;
}