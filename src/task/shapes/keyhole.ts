import Cylinder from "./cylinder";
import Sector from "./sector";
import Point from "../../geo/point";
import AreaShape from "./area";

export default class Keyhole extends AreaShape {
  private readonly _cylinder: Cylinder;
  private readonly _sector: Sector;

  constructor(center: Point, direction: number) {
    super();

    let innerRadius = 500;
    let outerRadius = 10000;
    let outerAngle = 90;

    this._cylinder = new Cylinder(center, innerRadius);
    this._sector = new Sector(center, outerRadius, outerAngle, direction);
  }

  get center(): Point {
    return this._cylinder.center;
  }

  get direction(): number {
    return this._sector.direction;
  }

  get innerRadius(): number {
    return this._cylinder.radius;
  }

  get outerRadius(): number {
    return this._sector.radius;
  }

  get outerAngle(): number {
    return this._sector.angle;
  }

  isInside(coordinate: Point): boolean {
    return this._cylinder.isInside(coordinate) || this._sector.isInside(coordinate);
  }
}
