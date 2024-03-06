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
  
  import { AulaService } from './aula.service';
  import { AulaDTO } from './dto/aula.dto';
  
  @Controller('aula')
  export class AulaController {
    constructor(private aulaService: AulaService) {}
    @Get('/')
    async getAulas(@Res() res) {
      const aula = await this.aulaService.getAulas();
      return res.status(HttpStatus.OK).json({
        aula,
      });
    }
    @Post('/create')
    async createAula(@Body() newAula: AulaDTO) {
      const aula = this.aulaService.create(newAula);
      return aula;
    }
    @Get('/:aulaId')
    async findOne(@Param('aulaId') idAula) {
      const aula = await this.aulaService.findOne(idAula);
      return aula;
    }
    @Put('/:aulaId')
    async updateAula(@Param('aulaId') aulaId, @Body() aulaData: AulaDTO) {
      const aula = await this.aulaService.update(aulaId, aulaData);
      return aula;
    }
    @Delete('/:aulaId')
    async deleteAula(@Param('aulaId') aulaId) {
      const aula = await this.aulaService.delete(aulaId);
      return aula;
    }
  }