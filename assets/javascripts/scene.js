// DevsBloom hero scene — Three.js constellation/network field.
// Loaded as an ES module; auto-initializes against #hero-canvas if present.

import * as THREE from "three";

const canvas = document.getElementById("hero-canvas");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && !prefersReduced) {
  initScene(canvas);
}

function initScene(canvas) {
  const isSmall = window.innerWidth < 760;
  const COUNT = isSmall ? 70 : 170;
  const LINK_DIST = isSmall ? 1.6 : 2.1;
  const MAX_LINKS = COUNT * 8;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    58,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 7);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ---- point field ----
  const bounds = { x: 5.2, y: 3.1, z: 2.4 };
  const positions = new Float32Array(COUNT * 3);
  const velocities = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() * 2 - 1) * bounds.x;
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * bounds.y;
    positions[i * 3 + 2] = (Math.random() * 2 - 1) * bounds.z;

    velocities[i * 3] = (Math.random() * 2 - 1) * 0.0025;
    velocities[i * 3 + 1] = (Math.random() * 2 - 1) * 0.0025;
    velocities[i * 3 + 2] = (Math.random() * 2 - 1) * 0.0015;
  }

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x6fb7ff,
    size: isSmall ? 0.045 : 0.055,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(pointsGeometry, pointsMaterial);
  scene.add(points);

  // ---- connective lines (preallocated buffer, filled per-frame) ----
  const linePositions = new Float32Array(MAX_LINKS * 2 * 3);
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  lineGeometry.setDrawRange(0, 0);

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x2f6bff,
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  // a few slow-rotating wire rings for depth
  const ringGroup = new THREE.Group();
  [2.6, 3.4].forEach((r, i) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(r, 0.004, 8, 96),
      new THREE.MeshBasicMaterial({ color: 0x1c3d80, transparent: true, opacity: 0.35 })
    );
    ring.rotation.x = Math.PI / 2.3 + i * 0.4;
    ring.rotation.y = i * 0.6;
    ringGroup.add(ring);
  });
  scene.add(ringGroup);

  // ---- pointer parallax ----
  const pointer = { x: 0, y: 0 };
  const targetRot = { x: 0, y: 0 };
  window.addEventListener("pointermove", (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  });

  // ---- resize ----
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  // ---- visibility gating ----
  let isVisible = true;
  const heroSection = canvas.closest("section") || canvas.parentElement;
  if (heroSection && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (isVisible = entry.isIntersecting));
      },
      { threshold: 0.01 }
    );
    io.observe(heroSection);
  }

  let running = true;
  document.addEventListener("visibilitychange", () => {
    running = document.visibilityState === "visible";
  });

  // ---- animation loop ----
  const clock = new THREE.Clock();

  function tick() {
    requestAnimationFrame(tick);
    if (!running || !isVisible) return;

    const dt = Math.min(clock.getDelta(), 0.05);

    // drift points, wrap at bounds
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      positions[ix] += velocities[ix];
      positions[ix + 1] += velocities[ix + 1];
      positions[ix + 2] += velocities[ix + 2];

      if (positions[ix] > bounds.x || positions[ix] < -bounds.x) velocities[ix] *= -1;
      if (positions[ix + 1] > bounds.y || positions[ix + 1] < -bounds.y) velocities[ix + 1] *= -1;
      if (positions[ix + 2] > bounds.z || positions[ix + 2] < -bounds.z) velocities[ix + 2] *= -1;
    }
    pointsGeometry.attributes.position.needsUpdate = true;

    // rebuild links
    let linkCount = 0;
    const linkDistSq = LINK_DIST * LINK_DIST;
    for (let i = 0; i < COUNT && linkCount < MAX_LINKS; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < COUNT && linkCount < MAX_LINKS; j++) {
        const jx = j * 3;
        const dx = positions[ix] - positions[jx];
        const dy = positions[ix + 1] - positions[jx + 1];
        const dz = positions[ix + 2] - positions[jx + 2];
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < linkDistSq) {
          const o = linkCount * 6;
          linePositions[o] = positions[ix];
          linePositions[o + 1] = positions[ix + 1];
          linePositions[o + 2] = positions[ix + 2];
          linePositions[o + 3] = positions[jx];
          linePositions[o + 4] = positions[jx + 1];
          linePositions[o + 5] = positions[jx + 2];
          linkCount++;
        }
      }
    }
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.setDrawRange(0, linkCount * 2);

    // slow autonomous rotation + pointer parallax
    targetRot.x += (pointer.y * 0.15 - targetRot.x) * 0.03;
    targetRot.y += (pointer.x * 0.2 - targetRot.y) * 0.03;
    points.rotation.x = targetRot.x;
    points.rotation.y += dt * 0.02 + (targetRot.y - points.rotation.y) * 0.02;
    lines.rotation.copy(points.rotation);
    ringGroup.rotation.z += dt * 0.015;

    renderer.render(scene, camera);
  }

  tick();
}
