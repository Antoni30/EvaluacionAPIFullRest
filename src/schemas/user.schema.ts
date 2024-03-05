import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User{
    @Prop()
    userName: string;

    @Prop()
    password: string;
}

export const CatSchema =SchemaFactory.createForClass(User);