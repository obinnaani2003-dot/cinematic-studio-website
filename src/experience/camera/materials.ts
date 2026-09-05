import * as THREE from 'three';

export const materials = {
  body: new THREE.MeshStandardMaterial({
    color: '#1A1D20',
    roughness: 0.44,
    metalness: 0.78,
  }),
  anodized: new THREE.MeshStandardMaterial({
    color: '#0D0E10',
    roughness: 0.26,
    metalness: 0.92,
  }),
  gearMetal: new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.20,
    metalness: 0.95,
  }),
  stainless: new THREE.MeshStandardMaterial({
    color: '#D0D5DD',
    roughness: 0.15,
    metalness: 0.98,
  }),
  rubber: new THREE.MeshStandardMaterial({
    color: '#111827',
    roughness: 0.8,
    metalness: 0.0,
  }),
  glass: new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    transmission: 0.96,
    ior: 1.52,
    roughness: 0.03,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    transparent: true,
  }),
  glassCoating: new THREE.MeshPhysicalMaterial({
    color: '#1a3a4a',
    transmission: 0.9,
    ior: 1.5,
    roughness: 0.05,
    transparent: true,
  }),
  screen: new THREE.MeshStandardMaterial({
    color: '#000000',
    roughness: 0.1,
    metalness: 0.9,
    emissive: '#0a1520',
    emissiveIntensity: 0.5,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#DC2626',
    roughness: 0.4,
    metalness: 0.1,
  }),
  blueAccent: new THREE.MeshStandardMaterial({
    color: '#0051BA',
    roughness: 0.3,
    metalness: 0.2,
  }),
  yellowMarking: new THREE.MeshStandardMaterial({
    color: '#EAAA08',
    roughness: 0.3,
    metalness: 0.1,
  }),
  whiteMarking: new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.3,
    metalness: 0.1,
  }),
  goldContact: new THREE.MeshStandardMaterial({
    color: '#D4AF37',
    roughness: 0.15,
    metalness: 1.0,
  }),
};
