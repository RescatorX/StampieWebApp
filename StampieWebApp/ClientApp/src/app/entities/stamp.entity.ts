import { BaseEntity } from "./base.entity";
import { DatePipe } from "@angular/common";

export interface IStamp {
  id: string;
  name: string;
  category: string;
  county: string;
  published: Date;
  sellingPlace1: string;
  sellingPlace1Web: string;
  sellingPlace2: string;
  sellingPlace2Web: string;
  sellingPlace3: string;
  sellingPlace3Web: string;
  sellingPlace4: string;
  sellingPlace4Web: string;
  sellingPlace5: string;
  sellingPlace5Web: string;
  sellingPlace6: string;
  sellingPlace6Web: string;
  sellingPlace7: string;
  sellingPlace7Web: string;
  sellingPlace8: string;
  sellingPlace8Web: string;
  sellingPlace9: string;
  sellingPlace9Web: string;
  sellingPlace10: string;
  sellingPlace10Web: string;
  sellingPlace11: string;
  sellingPlace11Web: string;
  gpsPositionLat?: number;
  gpsPositionLng?: number;

  gained?: boolean;
}

export class StampEntity extends BaseEntity implements IStamp {

  /**
   * Stamp name
   */
  public name: string;

  /**
   * Category
   */
  public category: string;

  /**
   * County of position
   */
  public county: string;

  /**
   * Date of publishing
   */
  public published: Date;

  /**
   * Selling place No.1
   */
  public sellingPlace1: string;

  /**
   * Selling place No.1 web
   */
  public sellingPlace1Web: string;

  /**
   * Selling place No.2
   */
  public sellingPlace2: string;

  /**
   * Selling place No.2 web
   */
  public sellingPlace2Web: string;

  /**
   * Selling place No.3
   */
  public sellingPlace3: string;

  /**
   * Selling place No.3 web
   */
  public sellingPlace3Web: string;

  /**
   * Selling place No.4
   */
  public sellingPlace4: string;

  /**
   * Selling place No.4 web
   */
  public sellingPlace4Web: string;

  /**
   * Selling place No.5
   */
  public sellingPlace5: string;

  /**
   * Selling place No.5 web
   */
  public sellingPlace5Web: string;

  /**
   * Selling place No.6
   */
  public sellingPlace6: string;

  /**
   * Selling place No.6 web
   */
  public sellingPlace6Web: string;

  /**
   * Selling place No.7
   */
  public sellingPlace7: string;

  /**
   * Selling place No.7 web
   */
  public sellingPlace7Web: string;

  /**
   * Selling place No.8
   */
  public sellingPlace8: string;

  /**
   * Selling place No.8 web
   */
  public sellingPlace8Web: string;

  /**
   * Selling place No.9
   */
  public sellingPlace9: string;

  /**
   * Selling place No.9 web
   */
  public sellingPlace9Web: string;

  /**
   * Selling place No.10
   */
  public sellingPlace10: string;

  /**
   * Selling place No.10 web
   */
  public sellingPlace10Web: string;

  /**
   * Selling place No.11
   */
  public sellingPlace11: string;

  /**
   * Selling place No.11 web
   */
  public sellingPlace11Web: string;

  /**
   * Latitude of GPS position
   */
  public gpsPositionLat?: number;

  /**
   * Longitude of GPS position
   */
  public gpsPositionLng?: number;

  /**
   * Gained by user
   */
  public gained?: boolean;
  
  constructor(obj: {}) {
    super();
    BaseEntity.copyProperties(obj, this);

    this.name = this.name.replace(new RegExp("\"", 'g'), "");
  }

  /**
   * Override of toString() method
   */
  public toString(): string {
    return "Stampie [id=" + this.id + ", name=" + this.name + ", category=" + this.category + ", county=" + this.county +
      ", published=" + ((this.published != null) ? (new DatePipe("cs-CZ")).transform(this.published, "yyyy-MM-dd") : "null") +
      ", gpsPositionLat=" + ((this.gpsPositionLat != null) ? this.gpsPositionLat.toString() : "null") +
      ", gpsPositionLng=" + ((this.gpsPositionLng != null) ? this.gpsPositionLng.toString() : "null") + "]";
  }
}
