import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_CLIENT } from './kafka.constant';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: KAFKA_CLIENT,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          return {
            transport: Transport.KAFKA,
            options: {
              client: {
                brokers: [config.get<string>('KAFKA_BROKER', 'localhost:9092')],
              },
              consumer: {
                groupId: config.get<string>('KAFKA_GROUP_ID', 'default-group'),
              },
            },
          };
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroserviceKafkaModule {}
