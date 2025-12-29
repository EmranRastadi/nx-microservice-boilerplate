import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_CLIENT } from '@microservice/kafka';
import { Events, type OrderCreatedPayload } from '@microservice/contracts';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject(KAFKA_CLIENT) private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    let connected = false;
    while (!connected) {
      try {
        await this.kafkaClient.connect();
        connected = true;
      } catch (e) {
        console.warn('Kafka connection failed, retrying in 2s...');
        await new Promise((r) => setTimeout(r, 20000));
      }
    }
  }

  async createOrder(orderDto: OrderCreatedPayload) {
    try {
      console.log('Event emitted before');

      await this.kafkaClient.emit(Events.ORDER_CREATED, orderDto);
      console.log('Event emitted:', orderDto);
      return {
        message: 'Order Created',
        data: orderDto,
      };
    } catch (e) {
      console.log(e);
    }
  }
}
