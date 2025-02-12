"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { Delaunay } from "d3-delaunay";

interface Vector {
  x: number;
  y: number;
}

interface CellPoint {
  point: Vector;
  velocity: Vector;
}

const VoronoiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellPointsRef = useRef<CellPoint[]>([]);
  const animationRef = useRef<number>();
  const cellSpeed = 0.05;
  const numberOfCells = 100;

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
      cellPointsRef.current = [];
      for (let i = 0; i < numberOfCells; i++) {
        cellPointsRef.current.push({
          point: {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
          },
          velocity: {
            x: (Math.random() - 0.5) * cellSpeed,
            y: (Math.random() - 0.5) * cellSpeed,
          },
        });
      }
    };

    const updatePoints = () => {
      cellPointsRef.current = cellPointsRef.current.map((cell) => ({
        point: {
          x: cell.point.x + cell.velocity.x,
          y: cell.point.y + cell.velocity.y,
        },
        velocity: cell.velocity,
      }));
    };

    const drawVoronoi = () => {
      const width = canvas.width;
      const height = canvas.height;

      const interablePoints: Iterable<Delaunay.Point> =
        cellPointsRef.current.map((p) => [p.point.x, p.point.y]);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const delaunay = Delaunay.from(interablePoints);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const voronoi = delaunay.voronoi([0, 0, width, height]);

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.lineJoin = "miter";

      for (let i = 0; i < cellPointsRef.current.length; i++) {
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
