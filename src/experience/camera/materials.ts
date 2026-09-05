import * as THREE from 'three';

export const materials = {
  bodyMain: new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.65,
    metalness: 0.6,
  }),
  bodyDark: new THREE.MeshStandardMaterial({
    color: '#0a0a0a',
    roughness: 0.8,
    metalness: 0.4,
  }),
  machinedMetal: new THREE.MeshStandardMaterial({
    color: '#666666',
    roughness: 0.3,
    metalness: 0.85,
  }),
  darkMetal: new THREE.MeshStandardMaterial({
    color: '#222222',
    roughness: 0.4,
    metalness: 0.8,
  }),
  lensBarrel: new THREE.MeshStandardMaterial({
    color: '#0f0f0f',
    roughness: 0.5,
    metalness: 0.7,
  }),
  rubber: new THREE.MeshStandardMaterial({
    color: '#050505',
    roughness: 0.95,
    metalness: 0.05,
  }),
  glass: new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.95,
    ior: 1.52,
    transparent: true,
    opacity: 1,
    thickness: 0.5,
  }),
  lensCoating: new THREE.MeshPhysicalMaterial({
    color: '#2a1a4a',
    metalness: 0.2,
    roughness: 0.1,
    transmission: 0.8,
    transparent: true,
    opacity: 0.9,
    ior: 1.4,
  }),
  screen: new THREE.MeshStandardMaterial({
    color: '#000000',
    roughness: 0.1,
    metalness: 0.9,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#aa0000',
    roughness: 0.4,
    metalness: 0.3,
  }),
  goldContact: new THREE.MeshStandardMaterial({
    color: '#ddaa33',
    roughness: 0.3,
    metalness: 1.0,
  }),
};
