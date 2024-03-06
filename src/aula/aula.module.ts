import { Module } from '@nestjs/common';
import { AulaController } from './aula.controller';
import { AulaService } from './aula.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AulaSchema } from 'src/schemas/aula.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:'Aula',schema:AulaSchema}])],
  controllers: [AulaController],
  providers: [AulaService]
})
export class AulaModule {}
