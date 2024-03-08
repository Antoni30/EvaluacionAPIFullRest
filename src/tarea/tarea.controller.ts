import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Res,
    HttpStatus,
  } from '@nestjs/common';
  
  import { TareaService } from './tarea.service';
  import { TareaDTO } from './dto/tarea.dto';
  
  @Controller('tarea')
  export class TareaController {
    constructor(private tareaService: TareaService) {}
    @Get('/')
    async getTareas(@Res() res) {
      const tarea = await this.tareaService.getTareas();
      return res.status(HttpStatus.OK).json({
        tarea,
      });
    }
    @Post('/create')
    async createTarea(@Body() newTarea: TareaDTO) {
      const tarea = this.tareaService.create(newTarea);
      return tarea;
    }
    @Get('/:tareaId')
    async findOne(@Param('tareaId') idTarea) {
      const tarea = await this.tareaService.findOne(idTarea);
      return tarea;
    }
    @Put('/:tareaId')
    async updateTarea(@Param('tareaId') tareaId, @Body() tareaData: TareaDTO) {
      const tarea = await this.tareaService.update(tareaId, tareaData);
      return tarea;
    }
    @Delete('/:tareaId')
    async deleteTarea(@Param('tareaId') tareaId) {
      const tarea = await this.tareaService.delete(tareaId);
      return tarea;
    }
  }