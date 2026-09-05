import { RefObject } from 'react';
import * as THREE from 'three';

export interface CameraParts {
  bodyMain: RefObject<THREE.Group | null>;
  bodySide: RefObject<THREE.Group | null>;
  lensMount: RefObject<THREE.Group | null>;
  lensBarrel: RefObject<THREE.Group | null>;
  lensFront: RefObject<THREE.Group | null>;
  lensMatteBox: RefObject<THREE.Group | null>;
  topHandle: RefObject<THREE.Group | null>;
  topEVF: RefObject<THREE.Group | null>;
  rearBattery: RefObject<THREE.Group | null>;
  baseRods: RefObject<THREE.Group | null>;
}

export interface CameraPartProps {
  parts: CameraParts;
}
