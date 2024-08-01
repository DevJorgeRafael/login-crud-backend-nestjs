import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get(':userId')
    findAll(@Param('userId') userId: number): Promise<Task[]> {
        return this.tasksService.findAll(userId);
    }

    @Get(':taskId')
    findOne(@Param('taskId') taskId: number): Promise<Task> {
        return this.tasksService.findOne(taskId);
    }

    @Post()
    create(@Body() task: Task): Promise<Task> {
        return this.tasksService.create(task);
    }

    @Delete(':taskId')
    remove(@Param('taskId') taksId: number): Promise<void> {
        return this.tasksService.remove(taksId);
    }

}
