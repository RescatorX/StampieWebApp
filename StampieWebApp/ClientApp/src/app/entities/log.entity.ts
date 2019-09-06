import { BaseEntity } from "./base.entity";
import { DatePipe } from "@angular/common";

export class LogEntity extends BaseEntity {

  /**
   * Level
   */
  public level: string;

  /**
   * Creation date
   */
  public created: Date;

  /**
   * Module
   */
  public module: string;

  /**
   * Message
   */
  public message: string;

  /**
   * Detail
   */
  public detail: string;

  constructor(obj: {}) {
    super();
    BaseEntity.copyProperties(obj, this);
  }

  /**
   * Override of toString() method
   */
  public toString(): string {
    return "Log [id=" + this.id + ", level=" + this.level + ", module=" + this.module + ", message=" + this.message + ", detail=" + this.detail +
      ", created=" + ((this.created != null) ? (new DatePipe("cs-CZ")).transform(this.created, "yyyy-MM-dd") : "null") + "]";
  }
}
