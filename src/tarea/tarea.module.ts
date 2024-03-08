import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AulaSchema } from 'src/schemas/aula.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:'Tarea',schema:AulaSchema}])],
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}