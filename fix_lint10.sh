#!/bin/bash
cat src/experience/camera/TopRig.tsx | grep "args={\[0.16, 0.12"
sed -i 's/<cylinderGeometry args={\[0.16, 0.12, 0.15, 48\]} rotation={\[Math.PI\/2, 0, 0\]} \/>/<cylinderGeometry args={\[0.16, 0.12, 0.15, 48\]} \/>/g' src/experience/camera/TopRig.tsx
