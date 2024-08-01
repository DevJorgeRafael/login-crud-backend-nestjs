import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), UsersModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule { }
