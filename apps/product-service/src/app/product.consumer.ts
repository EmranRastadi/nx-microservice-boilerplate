import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { Events, type OrderCreatedPayload } from '@microservice/contracts';

@Controller()
export class ProductConsumer {
  private readonly logger = new Logger(ProductConsumer.name);

  @EventPattern(Events.ORDER_CREATED)
  handle(
    @Payload() orderDto: OrderCreatedPayload,
    @Ctx() context: KafkaContext,
  ) {
    this.logger.log(
      `Received Order Created event: ${JSON.stringify(orderDto)}`,
    );
    this.logger.log(`Context Of Event: ${JSON.stringify(context)}`);
    // TODO: business logic, e.g., update inventory
  }
}
