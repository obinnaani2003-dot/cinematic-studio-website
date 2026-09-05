import * as THREE from 'three';

export const materials = {
  matteBlack: new THREE.MeshStandardMaterial({
    color: '#222222',
    roughness: 0.7,
    metalness: 0.3,
  }),
  charcoal: new THREE.MeshStandardMaterial({
    color: '#333333',
    roughness: 0.5,
    metalness: 0.4,
  }),
  machinedMetal: new THREE.MeshStandardMaterial({
    color: '#888888',
    roughness: 0.3,
    metalness: 0.8,
  }),
  darkGlass: new THREE.MeshPhysicalMaterial({
    color: '#050505',
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.9,
    transparent: true,
    opacity: 0.8,
    ior: 1.5,
  }),
  lensCoating: new THREE.MeshStandardMaterial({
    color: '#1a0d2e',
    roughness: 0.1,
    metalness: 0.6,
  }),
  brandText: new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.4,
    metalness: 0.1,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#cc1111',
    roughness: 0.4,
    metalness: 0.3,
  }),
};
