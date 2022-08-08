import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
@Controller('car')
export class CarController {
    constructor(private carservice:CarService){}

    @Get()
    public getCars(){
        return this.carservice.getCars();
    }

    @Post()
    public postCar(@Body() car:CarDto){
        return this.carservice.postCars(car);
    }

    @Get(':id')
    public async getCarById(@Param('id')id:number){
        return this.carservice.getCarById(id);
    }

    @Delete(':id')
    public async deleteCarById(@Param('id')id:number){
         this.carservice.deleteCarById(id);
    }

    @Put(':id')
    public async putCarById(@Param('id')id: number, @Query() query){
        const propertyName=query.property_name;
        const propertyValue=query.property_value;
        return this.carservice.putCarById(id,propertyName,propertyValue);
    }

    
}
