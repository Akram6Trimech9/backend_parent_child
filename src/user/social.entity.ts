  import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Gender } from "./enums";
import { User } from "./user.entity";


@Entity()
export class Social {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    socialIcon: string;


    @Column()
    socialName: string;

    @Column()
    socialUsername: string;

    @ManyToOne(() => User, User => User.socials)
    user: User ;
}