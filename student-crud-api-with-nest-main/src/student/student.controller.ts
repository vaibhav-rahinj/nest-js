import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getStudents();
  }

  @Get(':index')
  getSpecificStudent(@Param() index) {
    return this.studentService.getSpecificStudent(index.index);
  }

  @Post()
  createStudent(@Body() student) {
    return this.studentService.createStudent(student);
  }

  @Delete(':id')
  deleteStudent(@Param() id) {
    return this.studentService.deleteStudent(id.id);
  }

  @Patch(':id')
  updateStudent(@Param() id, @Body() student) {
    return this.studentService.updateStudent(id.id, student);
  }

  @Put()
  updateAllStudent(@Body() student) {
    return this.studentService.updateAllStudent(student);
  }
}
