import * as THREE from 'three';

export const materials = {
  body: new THREE.MeshStandardMaterial({
    color: '#1A1D20',
    roughness: 0.42,
    metalness: 0.78,
  }),
  anodized: new THREE.MeshStandardMaterial({
    color: '#0D0E10',
    roughness: 0.22,
    metalness: 0.92,
  }),
  gear: new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.20,
    metalness: 0.95,
  }),
  steel: new THREE.MeshStandardMaterial({
    color: '#cccccc',
    roughness: 0.15,
    metalness: 0.95,
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
  lensCoating: new THREE.MeshPhysicalMaterial({
    color: '#2a4a5a',
    transmission: 0.8,
    ior: 1.4,
    roughness: 0.1,
    transparent: true,
    opacity: 0.8,
  }),
  rubber: new THREE.MeshStandardMaterial({
    color: '#080808',
    roughness: 0.9,
    metalness: 0.0,
  }),
  screen: new THREE.MeshStandardMaterial({
    color: '#001111',
    roughness: 0.1,
    metalness: 0.9,
    emissive: '#002233',
    emissiveIntensity: 0.5,
  }),
  redAccent: new THREE.MeshStandardMaterial({
    color: '#cc0000',
    roughness: 0.3,
    metalness: 0.3,
  }),
  goldContact: new THREE.MeshStandardMaterial({
    color: '#d4af37',
    roughness: 0.2,
    metalness: 1.0,
  }),
  markings: new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.4,
    metalness: 0.1,
  }),
};
