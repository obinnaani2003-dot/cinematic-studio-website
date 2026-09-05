import * as THREE from 'three';

export interface TransformData {
  originalPosition: [number, number, number];
  originalRotation: [number, number, number];
  originalScale: [number, number, number];
  explodedPosition: [number, number, number];
  explodedRotation: [number, number, number];
  animationDelay: number;
  assemblyOrder: number;
}

export interface CameraPartProps {
  transform?: TransformData;
  groupRef?: React.Ref<THREE.Group>;
}
