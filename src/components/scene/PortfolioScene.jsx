"use client";

import { ContactShadows, Float, RoundedBox, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useEffect, useRef, useState } from "react";

function ProductCore({ reducedMotion }) {
  const group = useRef(null);
  const orbit = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || !orbit.current || reducedMotion) return;

    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      state.pointer.x * 0.36 + 0.2,
      3,
      delta,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      -state.pointer.y * 0.2 - 0.12,
      3,
      delta,
    );
    orbit.current.rotation.z += delta * 0.18;
  });

  return (
    <group position={[0.25, -0.1, 0]}>
      <Float speed={reducedMotion ? 0 : 1.35} rotationIntensity={0.24} floatIntensity={0.28}>
        <group ref={group}>
          <RoundedBox args={[2.45, 2.85, 0.62]} radius={0.18} smoothness={5} castShadow>
            <meshPhysicalMaterial
              color="#0e1110"
              metalness={0.93}
              roughness={0.2}
              iridescence
              iridescenceIOR={1.65}
              iridescenceThicknessRange={[180, 520]}
            />
          </RoundedBox>
          <RoundedBox
            args={[1.4, 1.78, 0.2]}
            radius={0.11}
            smoothness={4}
            position={[-0.72, 0.42, 0.43]}
            rotation={[0, 0.04, -0.06]}
          >
            <meshStandardMaterial color="#d7ff5a" metalness={0.42} roughness={0.38} />
          </RoundedBox>
          <RoundedBox
            args={[1.1, 1.43, 0.2]}
            radius={0.1}
            smoothness={4}
            position={[1.03, -0.6, 0.45]}
            rotation={[0, 0.04, 0.11]}
          >
            <meshStandardMaterial color="#fa7557" metalness={0.35} roughness={0.35} />
          </RoundedBox>
          <mesh position={[0.04, 0.02, 0.61]}>
            <boxGeometry args={[0.66, 0.66, 0.22]} />
            <meshPhysicalMaterial color="#f5f0df" metalness={0.36} roughness={0.16} />
          </mesh>
          <group ref={orbit} rotation={[1.32, 0.1, 0.12]}>
            <mesh>
              <torusGeometry args={[1.9, 0.035, 10, 96]} />
              <meshStandardMaterial color="#d7ff5a" emissive="#b6ec27" emissiveIntensity={1.1} />
            </mesh>
          </group>
          <mesh position={[-1.15, -1.22, 0.57]} rotation={[0, 0.08, -0.2]}>
            <boxGeometry args={[0.84, 0.08, 0.11]} />
            <meshStandardMaterial color="#f5f0df" metalness={0.5} roughness={0.24} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function Scene({ reducedMotion }) {
  return (
    <>
      <color attach="background" args={["#090a08"]} />
      <fog attach="fog" args={["#090a08", 7, 15]} />
      <ambientLight intensity={0.58} />
      <pointLight color="#d7ff5a" intensity={14} position={[4.5, 3.5, 4]} />
      <pointLight color="#fa7557" intensity={9} position={[-3.5, -2, 3]} />
      <pointLight color="#f5f0df" intensity={3} position={[0, 0, 5]} />
      <ProductCore reducedMotion={reducedMotion} />
      <Sparkles
        count={reducedMotion ? 24 : 58}
        scale={[8, 6, 5]}
        size={1.8}
        speed={reducedMotion ? 0 : 0.2}
        color="#d7ff5a"
      />
      <ContactShadows position={[0, -2.1, 0]} opacity={0.52} scale={8} blur={2.4} far={3} />
    </>
  );
}

export function PortfolioScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ fov: 43, position: [0, 0.05, 6.8] }} gl={{ antialias: true }}>
        <Scene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
