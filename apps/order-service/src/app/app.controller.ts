import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { type OrderCreatedPayload } from '@microservice/contracts';
// import { InjectMetric } from '@willsoto/nestjs-prometheus';
// import { Counter } from 'prom-client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly orderCounter: Counter<string>,
  ) {}

  @Post()
  async orders(@Body() orderDto: OrderCreatedPayload) {
    // this.orderCounter.inc();

    return await this.appService.createOrder(orderDto);
  }

  @Get()
  getOrders() {
    return { name: 'health check' };
  }
}
