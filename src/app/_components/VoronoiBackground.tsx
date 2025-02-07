"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { Delaunay } from "d3-delaunay";

interface Vector {
  x: number;
  y: number;
}

interface Point {
  x: number;
  y: number;
  velocity: Vector;
}

const VoronoiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>();
  const cellSpeed = 0.01;
  const numberOfCells = 2000;
  const maxWidth = 6000;
  const maxHeight = 6000;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializePoints = () => {
      pointsRef.current = [];
      for (let i = 0; i < numberOfCells; i++) {
        pointsRef.current.push({
          x: Math.random() * maxWidth,
          y: Math.random() * maxHeight,
          velocity: {
            x: (Math.random() - 0.5) * cellSpeed,
            y: (Math.random() - 0.5) * cellSpeed,
          },
        });
      }
    };

    const updatePoints = () => {
      pointsRef.current = pointsRef.current.map((point) => ({
        x: point.x + point.velocity.x,
        y: point.y + point.velocity.y,
        velocity: point.velocity,
      }));
    };

    const drawVoronoi = () => {
      const width = canvas.width;
      const height = canvas.height;

      const interablePoints: Iterable<Delaunay.Point> = pointsRef.current.map(
        (p) => [p.x, p.y],
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const delaunay = Delaunay.from(interablePoints);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const voronoi = delaunay.voronoi([0, 0, width, height]);

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";

      for (let i = 0; i < pointsRef.current.length; i++) {
        ctx.beginPath();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        voronoi.renderCell(i, ctx);
        ctx.stroke();
      }
    };

    const animate = () => {
      updatePoints();
      drawVoronoi();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initializePoints();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default VoronoiBackground;
