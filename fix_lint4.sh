#!/bin/bash
sed -i 's/materials.anodized/materials.body/g' src/experience/camera/BaseSystem.tsx
sed -i 's/materials.anodized/materials.body/g' src/experience/camera/RearPower.tsx
sed -i 's/materials.anodized/materials.body/g' src/experience/camera/TopRig.tsx
sed -i 's/masterRig.current/masterRig/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/gsap.set(masterRig, {/gsap.set(masterRig.current, {/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/if (!masterRig) return;/const masterRigEl = masterRig.current;\n    if (!masterRigEl) return;/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/gsap.set(masterRig.current, {/gsap.set(masterRigEl, {/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/masterRig.current.rotation/masterRigEl.rotation/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/masterRig.current.scale/masterRigEl.scale/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/masterRig.current.position/masterRigEl.position/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/masterRig.current/masterRigEl/g' src/experience/camera/CinemaCamera.tsx

sed -i 's/<cylinderGeometry args={\[0.08, 0.08, 0.29, 32\]} rotation={\[Math.PI\/2, 0, 0\]} \/>/<cylinderGeometry args={\[0.08, 0.08, 0.29, 32\]} \/>/g' src/experience/camera/TopRig.tsx
sed -i 's/<cylinderGeometry args={\[0.18, 0.12, 0.12, 48\]} rotation={\[Math.PI\/2, 0, 0\]} \/>/<cylinderGeometry args={\[0.18, 0.12, 0.12, 48\]} \/>/g' src/experience/camera/TopRig.tsx

