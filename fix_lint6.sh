#!/bin/bash
sed -i 's/gsap.set(masterRig.current.rotation/gsap.set(masterRig.current!.rotation/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/gsap.set(masterRig.current.scale/gsap.set(masterRig.current!.scale/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/tl.to(masterRig.current.position/tl.to(masterRig.current!.position/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/tl.to(masterRig.current.rotation/tl.to(masterRig.current!.rotation/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/tl.to(masterRig.current.scale/tl.to(masterRig.current!.scale/g' src/experience/camera/CinemaCamera.tsx

cat src/experience/camera/TopRig.tsx | grep "rotation={\[Math.PI/2, 0, 0\]}"
