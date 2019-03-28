export interface Coordinates {
  x: number;
  y: number;
}

export interface BucketCoordinates {
  [key: string]: Coordinates;
}

export interface Connection {
  from: Coordinates;
  to: Coordinates;
}
