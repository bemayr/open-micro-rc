declare function union(...elements: CSG[]): CSG;
declare function intersection(...elements: CSG[]): CSG;
declare function difference(...elements: CSG[]): CSG;
declare function scale(by: Dimension, element: CSG): CSG;
declare function translate(by: Vector3D, element: CSG): CSG;

type Scalar = number;
type Vector3D = [number, number, number];
type AxisFlags3D = [boolean, boolean, boolean];

type Dimension = Scalar | Vector3D;

declare interface CSG {
  scale(by: Dimension): CSG;
  translate(by: Vector3D): CSG;
}

declare function cube(): CSG;
declare function cube(size: Dimension): CSG;
declare function cube(options: {
  size: Dimension;
  center?: boolean | AxisFlags3D;
  round?: boolean;
}): CSG;

declare function sphere(): CSG;
declare function sphere(size: Scalar): CSG;
declare function sphere(options: {
  r: Scalar;
  center?: boolean | AxisFlags3D;
  fn?: number;
  type?: "geodesic";
}): CSG;

declare namespace CSG {
  function cylinder(options: {
    start: Vector3D;
    end: Vector3D;
    radius: number;
    resolution: number;
  }): CSG;
}
