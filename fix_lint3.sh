#!/bin/bash
sed -i 's/import \* as THREE from "three";//g' src/experience/camera/BaseSystem.tsx
sed -i 's/import \* as THREE from "three";//g' src/experience/camera/CameraBody.tsx
sed -i 's/import \* as THREE from "three";//g' src/experience/camera/LensAssembly.tsx
sed -i 's/import \* as THREE from "three";//g' src/experience/camera/RearPower.tsx
sed -i 's/import \* as THREE from "three";//g' src/experience/camera/TopRig.tsx
sed -i 's/import { GearRing, Screw } from ".\/utils";/import { GearRing } from ".\/utils";/g' src/experience/camera/LensAssembly.tsx
