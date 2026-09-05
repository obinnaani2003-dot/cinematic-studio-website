import { RefObject } from 'react';
import * as THREE from 'three';

export interface CameraParts {
  cameraBrain: RefObject<THREE.Group | null>;
  baseSystem: RefObject<THREE.Group | null>;
  topRig: RefObject<THREE.Group | null>;
  rearPower: RefObject<THREE.Group | null>;
  lensSystem: RefObject<THREE.Group | null>;
  plMount: RefObject<THREE.Group | null>;
  rearBarrel: RefObject<THREE.Group | null>;
  irisGear: RefObject<THREE.Group | null>;
  scaleRing: RefObject<THREE.Group | null>;
  focusGear: RefObject<THREE.Group | null>;
  frontBarrel: RefObject<THREE.Group | null>;
  internalGlass: RefObject<THREE.Group | null>;
  frontElement: RefObject<THREE.Group | null>;
  matteBox: RefObject<THREE.Group | null>;
}

export interface CameraPartProps {
  parts: CameraParts;
}
