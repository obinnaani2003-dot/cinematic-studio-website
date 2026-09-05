#!/bin/bash
sed -i 's/const masterRigEl = masterRig.current;//g' src/experience/camera/CinemaCamera.tsx
sed -i 's/if (!masterRigEl) return;/if (!masterRig.current) return;/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/masterRigEl/masterRig.current/g' src/experience/camera/CinemaCamera.tsx

cat src/experience/camera/TopRig.tsx | grep "rotation={\[Math.PI/2, 0, 0\]}"
