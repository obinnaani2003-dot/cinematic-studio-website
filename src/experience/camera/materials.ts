import * as THREE from 'three';

export const materials = {
  body: new THREE.MeshStandardMaterial({
    color: '#1a1a1c',
    roughness: 0.7,
    metalness: 0.3,
  }),
  lensBody: new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.4,
    metalness: 0.5,
  }),
  gearMetal: new THREE.MeshStandardMaterial({
    color: '#0a0a0a',
    roughness: 0.3,
    metalness: 0.7,
  }),
  stainless: new THREE.MeshStandardMaterial({
    color: '#d0d5dd',
    roughness: 0.2,
    metalness: 0.9,
  }),
  anodized: new THREE.MeshStandardMaterial({
    color: '#0d0e10',
    roughness: 0.25,
    metalness: 0.9,
  }),
  arriBlue: new THREE.MeshStandardMaterial({
    color: '#0055AA',
    roughness: 0.3,
    metalness: 0.5,
  }),
  rubber: new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.9,
    metalness: 0.0,
  }),
  glass: new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    transmission: 0.98,
    ior: 1.52,
    roughness: 0.01,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    transparent: true,
  }),
  glassCoating: new THREE.MeshPhysicalMaterial({
    color: '#2a4a5a',
    transmission: 0.85,
    ior: 1.45,
    roughness: 0.05,
    transparent: true,
  }),
  screen: new THREE.MeshStandardMaterial({
    color: '#000000',
    roughness: 0.2,
    metalness: 0.8,
  }),
  screenActive: new THREE.MeshStandardMaterial({
    color: '#223344',
    roughness: 0.2,
    emissive: '#0a1a2a',
    emissiveIntensity: 0.8,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#b91c1c',
    roughness: 0.4,
    metalness: 0.2,
  }),
  yellowMarking: new THREE.MeshStandardMaterial({
    color: '#bef264',
    roughness: 0.4,
    metalness: 0.1,
  }),
  whiteMarking: new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.4,
    metalness: 0.1,
  }),
  goldContact: new THREE.MeshStandardMaterial({
    color: '#fbbf24',
    roughness: 0.2,
    metalness: 1.0,
  }),
};
