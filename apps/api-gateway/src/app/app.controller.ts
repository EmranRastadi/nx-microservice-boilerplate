import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log(process.env.ORDER_DOMAIN_NAME);
    return this.appService.getData();
  }
}
