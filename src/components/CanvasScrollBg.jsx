import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const LERP_FACTOR = 0.12;

export default function CanvasScrollBg() {
  const canvasRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);

  const getFramePath = (index) => {
    const paddedIndex = String(index).padStart(3, '0');
    return `/ezgif-312a86b1faec8854-jpg/ezgif-frame-${paddedIndex}.jpg`;
  };

  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameIndex = Math.min(Math.max(0, Math.round(index)), TOTAL_FRAMES - 1);
    const img = imagesRef.current[frameIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const viewportRatio = viewportWidth / viewportHeight;

    let renderWidth, renderHeight;

    if (viewportRatio > imgRatio) {
      renderWidth = viewportWidth;
      renderHeight = viewportWidth / imgRatio;
    } else {
      renderHeight = viewportHeight;
      renderWidth = viewportHeight * imgRatio;
    }

    const offsetX = (viewportWidth - renderWidth) / 2;
    const offsetY = (viewportHeight - renderHeight) / 2;

    ctx.clearRect(0, 0, viewportWidth, viewportHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    if (imagesRef.current[Math.round(currentFrameRef.current)]) {
      renderFrame(currentFrameRef.current);
    }
  };

  const animateFrames = () => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    currentFrameRef.current += diff * LERP_FACTOR;

    renderFrame(currentFrameRef.current);

    if (Math.abs(diff) > 0.005) {
      animFrameIdRef.current = requestAnimationFrame(animateFrames);
    } else {
      currentFrameRef.current = targetFrameRef.current;
      renderFrame(currentFrameRef.current);
      animFrameIdRef.current = null;
    }
  };

  useEffect(() => {
    // Preload images
    let loaded = 0;
    const imgArray = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      imgArray.push(img);
    }
    imagesRef.current = imgArray;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    resizeCanvas();
    renderFrame(0);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const scrollFraction = Math.min(Math.max(0, scrollTop / maxScroll), 1);
      targetFrameRef.current = scrollFraction * (TOTAL_FRAMES - 1);

      if (!animFrameIdRef.current) {
        animFrameIdRef.current = requestAnimationFrame(animateFrames);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded]);

  return (
    <div className="scroll-container">
      <canvas ref={canvasRef} id="animation-canvas" />
      <div className="canvas-overlay" />
    </div>
  );
}
