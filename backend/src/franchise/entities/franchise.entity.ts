import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Franchise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  seo_title: string;

  @Column()
  seo_description: string;

  @Column()
  introtext: string;

  @Column()
  alias: string;

  @Column()
  content: string;

  @Column()
  published: boolean;

  @Column()
  popular: boolean;

  @Column()
  new: boolean;

  @Column()
  image: string;

  @Column()
  icon: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
