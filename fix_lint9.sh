#!/bin/bash
sed -i 's/gsap.set(masterRig.current.rotation/gsap.set((masterRig.current as any).rotation/g' src/experience/camera/CinemaCamera.tsx
