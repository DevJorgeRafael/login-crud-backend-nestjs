import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    async create(task: Task): Promise<Task> {
        return this.tasksRepository.save(task);
    }

    async findAll(userId: number): Promise<Task[]> {
        return this.tasksRepository.find({ where: { user: { id: userId } } });
    }

    async findOne(taskId: number): Promise<Task> {
        return this.tasksRepository.findOne({ where: { id: taskId } })
    }

    async remove(taskId: number): Promise<void> {
        await this.tasksRepository.delete(taskId);
    }
}
