import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Gender } from "./enums";
import { Social } from "./social.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    gender: Gender;

    @Column()
    phoneNumber: string;

    @Column()
    userName: string;

    @Column()
    image: string;

    @ManyToOne(() => User, user => user.children)
    parent: User;

    @OneToMany(() => User, user => user.parent)
    children: User[];

    @OneToMany(() => Social, social => social.user)
    socials: Social[];
}
