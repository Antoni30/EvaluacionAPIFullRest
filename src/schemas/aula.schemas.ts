import {Schema} from 'mongoose';

export const AulaSchema= new Schema({
    num_Classroom:{
        type:String,
        require:true
    },
    name_Teacher:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    }
})
