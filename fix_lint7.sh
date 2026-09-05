#!/bin/bash
sed -i 's/<cylinderGeometry args={\[0.11, 0.11, 0.9, 32\]} rotation={\[Math.PI\/2, 0, 0\]} \/>/<cylinderGeometry args={\[0.11, 0.11, 0.9, 32\]} \/>/g' src/experience/camera/TopRig.tsx
sed -i 's/masterRig.current!.rotation/masterRig.current.rotation/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/masterRig.current!.scale/masterRig.current.scale/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/masterRig.current!.position/masterRig.current.position/g' src/experience/camera/CinemaCamera.tsx
