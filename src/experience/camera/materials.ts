import * as THREE from 'three';

export const materials = {
  matteBlack: new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    roughness: 0.8,
    metalness: 0.25,
  }),
  charcoal: new THREE.MeshStandardMaterial({
    color: '#262626',
    roughness: 0.65,
    metalness: 0.35,
  }),
  machinedMetal: new THREE.MeshStandardMaterial({
    color: '#555555',
    roughness: 0.3,
    metalness: 0.85,
  }),
  darkGlass: new THREE.MeshPhysicalMaterial({
    color: '#050505',
    roughness: 0.05,
    metalness: 0.1,
    transmission: 0.9,
    transparent: true,
    opacity: 0.8,
  }),
  lensCoating: new THREE.MeshStandardMaterial({
    color: '#150a21',
    roughness: 0.1,
    metalness: 0.6,
  }),
  brandText: new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.4,
    metalness: 0.1,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#aa1111',
    roughness: 0.5,
    metalness: 0.4,
  }),
};
