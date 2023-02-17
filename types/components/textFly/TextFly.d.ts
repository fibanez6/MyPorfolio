export interface Motion3d {
  x: string | number;
  y: string | number;
  z: string | number;
}

export interface TextTransition {
  start: Motion3d;
  end: Motion3d;
}
