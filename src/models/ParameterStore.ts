import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "parameterStore" })
export class ParameterStore {
  @ObjectIdColumn()
  // tslint:disable-next-line
  public _id?: ObjectID;
  @Column({ nullable: false })
  public key?: string;
  @Column({ nullable: true, default: null })
  public value?: any;
  @Column({ nullable: false })
  public creationDate?: Date;
  @Column({ nullable: false })
  public updateDate?: Date;
  @Column({ nullable: false })
  public updateUser?: string;
  @Column({ nullable: true, default: null })
  public country?: string;
  @Column({ nullable: true, default: null })
  public serviceType?: string;
  @Column({ nullable: false })
  public service?: string;
}
