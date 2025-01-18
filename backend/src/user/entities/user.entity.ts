import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, UpdateDateColumn, CreateDateColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['email', 'login', 'phone'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    // Хешируем пароль перед сохранением
    @BeforeInsert()
    async hashPassword() {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }

    // Метод для проверки пароля
    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

}
