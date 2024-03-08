import {Schema} from 'mongoose';

export const TareaSchema= new Schema({
    idAula:{
        type:Number,
        require:true
    },
    num_Task:{
        type:String,
        require:true
    },
    name_Task:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    pending_tasks:{
        type:Number,
        require:true
    },
    complete_tasks:{
        type:Boolean,
        require:true
    }
})
