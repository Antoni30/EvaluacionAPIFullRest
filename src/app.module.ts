import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AulaModule } from './aula/aula.module';
import { TareaModule } from './tarea/tarea.module';


@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb+srv://toni:123Camila.web@web.mlxviwm.mongodb.net/?retryWrites=true&w=majority'), AulaModule, TareaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
