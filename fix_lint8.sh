#!/bin/bash
sed -i 's/gsap.set(masterRig.current.rotation/gsap.set((masterRig.current as any).rotation/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/gsap.set(masterRig.current.scale/gsap.set((masterRig.current as any).scale/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/tl.to(masterRig.current.position/tl.to((masterRig.current as any).position/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/tl.to(masterRig.current.rotation/tl.to((masterRig.current as any).rotation/g' src/experience/camera/CinemaCamera.tsx
sed -i 's/tl.to(masterRig.current.scale/tl.to((masterRig.current as any).scale/g' src/experience/camera/CinemaCamera.tsx
