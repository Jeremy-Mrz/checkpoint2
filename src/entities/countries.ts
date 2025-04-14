import { Field, ID, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  country_code!: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  continent_code!: string;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field()
  emoji!: string;
}

@InputType()
export class CreateCountryInputs {
  @Field()
  country_code!: string;

  @Field({nullable: true})
  continent_code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;
}