import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Aula } from './interface/aula.interface';
import { AulaDTO } from './dto/aula.dto';

@Injectable()
export class AulaService {
  constructor(@InjectModel('Aula') private readonly aulaModel: Model<Aula>) {}

  async create(createAulaDto: AulaDTO): Promise<Aula> {
    const aula = new this.aulaModel(createAulaDto);
    const createdAula = await aula.save();
    return createdAula;
  }
  async getAulas(): Promise<Aula[]> {
    const users = await this.aulaModel.find();
    return users;
  }
  async findOne(id: string): Promise<Aula | undefined> {
    const aula = await this.aulaModel.findById(id).exec();
    return aula;
  }

  async update(id: string, updateAulaDto: AulaDTO): Promise<Aula | undefined> {
    const updatedAula = await this.aulaModel.findByIdAndUpdate(
      id,
      updateAulaDto,
      {
        new: true,
      },
    );
    return updatedAula;
  }

  async delete(id: string): Promise<Aula | undefined> {
    const deletedAula = await this.aulaModel.findByIdAndDelete(id);
    return deletedAula;
  }
}