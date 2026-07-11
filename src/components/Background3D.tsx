"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Smooth mouse
    const mouse = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);

    // ── Larger, More Visible Wireframe Shapes ──────────────────────
    const shapeConfigs = [
      { geo: new THREE.OctahedronGeometry(2.2, 0), color: 0x6366f1, x: -9, y: 4, z: -3 },
      { geo: new THREE.IcosahedronGeometry(1.8, 0), color: 0x3B82F6, x: 10, y: -3, z: -2 },
      { geo: new THREE.TetrahedronGeometry(1.6, 0), color: 0x06B6D4, x: -7, y: -6, z: -4 },
      { geo: new THREE.OctahedronGeometry(1.4, 0), color: 0xa855f7, x: 8, y: 6, z: -5 },
      { geo: new THREE.IcosahedronGeometry(1.1, 0), color: 0x818cf8, x: -3, y: 8, z: -2 },
      { geo: new THREE.TetrahedronGeometry(1.0, 0), color: 0x0ea5e9, x: 5, y: -7, z: -3 },
      { geo: new THREE.OctahedronGeometry(0.9, 0), color: 0xec4899, x: -11, y: 0, z: -6 },
      { geo: new THREE.IcosahedronGeometry(0.7, 0), color: 0x6366f1, x: 12, y: 2, z: -4 },
      { geo: new THREE.DodecahedronGeometry(1.5, 0), color: 0xa855f7, x: 0, y: -9, z: -5 },
      { geo: new THREE.TorusGeometry(1.2, 0.15, 8, 24), color: 0x3B82F6, x: -6, y: 5, z: -8 },
    ];

    const meshes: THREE.Mesh[] = [];
    const meshData: { rotX: number; rotY: number; floatSpeed: number; floatPhase: number; baseY: number }[] = [];

    shapeConfigs.forEach((cfg) => {
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const mesh = new THREE.Mesh(cfg.geo, mat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      scene.add(mesh);
      meshes.push(mesh);
      meshData.push({
        rotX: (Math.random() - 0.5) * 0.006,
        rotY: (Math.random() - 0.5) * 0.01,
        floatSpeed: 0.15 + Math.random() * 0.3,
        floatPhase: Math.random() * Math.PI * 2,
        baseY: cfg.y,
      });
    });

    // ── Particles ──────────────────────────────────────────────────
    const pCount = 250;
    const pPositions = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);
    const pSizes = new Float32Array(pCount);
    const palette = [
      new THREE.Color(0x6366f1),
      new THREE.Color(0xa855f7),
      new THREE.Color(0x3B82F6),
      new THREE.Color(0x06B6D4),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 50;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      const c = palette[Math.floor(Math.random() * palette.length)];
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
      pSizes[i] = Math.random() * 2 + 0.5;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Ambient Glow Rings ─────────────────────────────────────────
    const rings: { mesh: THREE.Mesh; speed: number; mat: THREE.MeshBasicMaterial }[] = [];
    [
      { r: 4, color: 0x6366f1, pos: [-5, 3, -6], rotX: Math.PI / 3 },
      { r: 3, color: 0xa855f7, pos: [6, -4, -5], rotX: -Math.PI / 4 },
      { r: 2.5, color: 0x06B6D4, pos: [0, 6, -8], rotX: Math.PI / 5 },
    ].forEach((cfg) => {
      const geo = new THREE.RingGeometry(cfg.r, cfg.r + 0.04, 64);
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      mesh.rotation.x = cfg.rotX;
      scene.add(mesh);
      rings.push({ mesh, speed: 0.08 + Math.random() * 0.1, mat });
    });

    // ── Animation ──────────────────────────────────────────────────
    let animId: number;
    let time = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.006;

      // Smooth parallax camera
      target.x += (mouse.x - target.x) * 0.03;
      target.y += (mouse.y - target.y) * 0.03;
      camera.position.x = target.x * 2.5;
      camera.position.y = target.y * 2;
      camera.lookAt(0, 0, 0);

      // Shapes rotate + float
      meshes.forEach((mesh, i) => {
        const d = meshData[i];
        mesh.rotation.x += d.rotX;
        mesh.rotation.y += d.rotY;
        mesh.position.y = d.baseY + Math.sin(time * d.floatSpeed + d.floatPhase) * 1.2;
      });

      // Particles slowly revolve
      particles.rotation.y = time * 0.03;
      particles.rotation.x = Math.sin(time * 0.5) * 0.02;

      // Rings pulse and spin
      rings.forEach((r) => {
        r.mesh.rotation.z += r.speed * 0.01;
        r.mat.opacity = 0.06 + Math.sin(time * 0.7 + rings.indexOf(r)) * 0.03;
      });

      renderer.render(scene, camera);
    };
    animate();

    // ── Events ─────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
