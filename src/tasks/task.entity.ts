import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity"; 

@Entity({ name: 'tasks' })
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ default: false })
    isCompleted: boolean;

    @Column({ type: 'timestamp', nullable: true})
    dateToFinish: Date;

    @ManyToOne(() => User, user => user.tasks)
    user: User;
}