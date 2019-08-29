import { BaseEntity } from "./base.entity";
import { DatePipe } from "@angular/common";

export class UserEntity extends BaseEntity {

  /**
   * User first name
   */
  public firstName: string;

  /**
   * User last name
   */
  public lastName: string;

  /**
   * User login name
   */
  public login: string;

  /**
   * User password
   */
  public password: string;

  /**
   * User created date
   */
  public created: Date;

  /**
   * User state
   */
  public state: string;

  constructor(obj: {}) {
    super();
    BaseEntity.copyProperties(obj, this);
  }

  /**
   * Override of toString() method
   */
  public toString(): string {
    return "User [id=" + this.id + ", firstName=" + this.firstName + ", lastName=" + this.lastName + ", login=" + this.login + ", password=" + this.password +
      ", created=" + ((this.created != null) ? (new DatePipe("cs-CZ")).transform(this.created, "yyyy-MM-dd") : "null") + ", state=" + this.state + "]";
  }
}
