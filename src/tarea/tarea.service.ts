import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Tarea } from './interface/tarea.interface';
import { TareaDTO } from './dto/tarea.dto';

@Injectable()
export class TareaService {
  constructor(@InjectModel('Tarea') private readonly TareaModel: Model<Tarea>) {}

  async create(createTareaDTO: TareaDTO): Promise<Tarea> {
    const tarea = new this.TareaModel(createTareaDTO);
    const createdTarea = await tarea.save();
    return createdTarea;
  }
  async getTareas(): Promise<Tarea[]> {
    const users = await this.TareaModel.find();
    return users;
  }
  async findOne(id: string): Promise<Tarea | undefined> {
    const tarea = await this.TareaModel.findById(id).exec();
    return tarea;
  }

  async update(id: string, updateTareaDTO: TareaDTO): Promise<Tarea | undefined> {
    const updatedTarea = await this.TareaModel.findByIdAndUpdate(
      id,
      updateTareaDTO,
      {
        new: true,
      },
    );
    return updatedTarea;
  }

  async delete(id: string): Promise<Tarea | undefined> {
    const deletedTarea = await this.TareaModel.findByIdAndDelete(id);
    return deletedTarea;
  }
}