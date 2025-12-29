import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Events, type OrderCreatedPayload } from '@microservice/contracts';

@Controller()
export class ProductConsumer {
  private readonly logger = new Logger(ProductConsumer.name);

  @EventPattern(Events.ORDER_CREATED)
  handle(@Payload() orderDto: OrderCreatedPayload) {
    this.logger.log(
      `Received Order Created event: ${JSON.stringify(orderDto)}`,
    );
    console.log(`Received Order Created event`);
    // TODO: business logic, e.g., update inventory
  }
}
