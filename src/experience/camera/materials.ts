import * as THREE from 'three';

export const materials = {
  body: new THREE.MeshStandardMaterial({
    color: '#1D2024', // ARRI Alexa 35 dark grey
    roughness: 0.65,
    metalness: 0.5,
  }),
  lensBody: new THREE.MeshStandardMaterial({
    color: '#0A0B0C',
    roughness: 0.4,
    metalness: 0.6,
  }),
  gearMetal: new THREE.MeshStandardMaterial({
    color: '#050505',
    roughness: 0.25,
    metalness: 0.8,
  }),
  stainless: new THREE.MeshStandardMaterial({
    color: '#E2E8F0',
    roughness: 0.15,
    metalness: 0.95,
  }),
  arriBlue: new THREE.MeshStandardMaterial({
    color: '#0055AA',
    roughness: 0.3,
    metalness: 0.5,
  }),
  rubber: new THREE.MeshStandardMaterial({
    color: '#111827',
    roughness: 0.85,
    metalness: 0.05,
  }),
  glass: new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    transmission: 0.98,
    ior: 1.52,
    roughness: 0.02,
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
    roughness: 0.1,
    metalness: 0.9,
  }),
  screenActive: new THREE.MeshStandardMaterial({
    color: '#334455',
    roughness: 0.2,
    emissive: '#112233',
    emissiveIntensity: 0.5,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#E02424',
    roughness: 0.4,
    metalness: 0.1,
  }),
  yellowMarking: new THREE.MeshStandardMaterial({
    color: '#CCFF00', // Signature Prime neon yellow/green
    roughness: 0.4,
    metalness: 0.1,
  }),
  whiteMarking: new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.4,
    metalness: 0.1,
  }),
  goldContact: new THREE.MeshStandardMaterial({
    color: '#FBBF24',
    roughness: 0.2,
    metalness: 1.0,
  }),
};
