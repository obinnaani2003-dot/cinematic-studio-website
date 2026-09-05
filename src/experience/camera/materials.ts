import * as THREE from 'three';

export const materials = {
  matteBlack: new THREE.MeshStandardMaterial({
    color: '#181818',
    roughness: 0.85,
    metalness: 0.3,
  }),
  anodizedBlack: new THREE.MeshStandardMaterial({
    color: '#121212',
    roughness: 0.6,
    metalness: 0.7,
  }),
  charcoal: new THREE.MeshStandardMaterial({
    color: '#222222',
    roughness: 0.7,
    metalness: 0.4,
  }),
  machinedMetal: new THREE.MeshStandardMaterial({
    color: '#777777',
    roughness: 0.3,
    metalness: 0.85,
  }),
  darkMetal: new THREE.MeshStandardMaterial({
    color: '#2a2a2a',
    roughness: 0.4,
    metalness: 0.7,
  }),
  rubber: new THREE.MeshStandardMaterial({
    color: '#080808',
    roughness: 0.95,
    metalness: 0.0,
  }),
  darkGlass: new THREE.MeshPhysicalMaterial({
    color: '#0a0a0a',
    roughness: 0.05,
    metalness: 0.1,
    transmission: 0.9,
    transparent: true,
    opacity: 0.95,
    ior: 1.5,
  }),
  lensCoating: new THREE.MeshStandardMaterial({
    color: '#18102a',
    roughness: 0.1,
    metalness: 0.8,
  }),
  brandText: new THREE.MeshStandardMaterial({
    color: '#e0e0e0',
    roughness: 0.3,
    metalness: 0.2,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#990000',
    roughness: 0.4,
    metalness: 0.3,
  }),
  goldContact: new THREE.MeshStandardMaterial({
    color: '#ccaa22',
    roughness: 0.3,
    metalness: 1.0,
  }),
};
