import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroserviceKafkaModule } from '@microservice/kafka';
import { ConfigModule } from '@nestjs/config';
import { ProductConsumer } from './product.consumer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MicroserviceKafkaModule,
  ],
  controllers: [ProductConsumer],
  providers: [AppService],
})
export class AppModule {}
