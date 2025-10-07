import { useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DotsConfig {
  nb: number;
  distance: number;
  d_radius: number;
  array: Dot[];
}

class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    colorDot: string[]
  ) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = Math.random() * 1.5;
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
  }

  create(
    ctx: CanvasRenderingContext2D,
    mousePosition: Position,
    windowSize: number
  ): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const dotDistance = ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) ** 0.5;
    const distanceRatio = dotDistance / (windowSize / 1.7);

    ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
    ctx.fill();
  }

  animate(dots: DotsConfig, canvas: HTMLCanvasElement): void {
    for (let i = 1; i < dots.nb; i++) {
      const dot = dots.array[i];

      if (dot.y < 0 || dot.y > canvas.height) {
        dot.vy = -dot.vy;
      } else if (dot.x < 0 || dot.x > canvas.width) {
        dot.vx = -dot.vx;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  }

  line(
    ctx: CanvasRenderingContext2D,
    dots: DotsConfig,
    mousePosition: Position
  ): void {
    for (let i = 0; i < dots.nb; i++) {
      for (let j = 0; j < dots.nb; j++) {
        const i_dot = dots.array[i];
        const j_dot = dots.array[j];

        if (
          i_dot.x - j_dot.x < dots.distance &&
          i_dot.y - j_dot.y < dots.distance &&
          i_dot.x - j_dot.x > -dots.distance &&
          i_dot.y - j_dot.y > -dots.distance
        ) {
          if (
            i_dot.x - mousePosition.x < dots.d_radius &&
            i_dot.y - mousePosition.y < dots.d_radius &&
            i_dot.x - mousePosition.x > -dots.d_radius &&
            i_dot.y - mousePosition.y > -dots.d_radius
          ) {
            ctx.beginPath();
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);

            const dotDistance = ((i_dot.x - mousePosition.x) ** 2 + (i_dot.y - mousePosition.y) ** 2) ** 0.5;
            let distanceRatio = dotDistance / dots.d_radius;

            distanceRatio -= 0.3;
            if (distanceRatio < 0) {
              distanceRatio = 0;
            }

            ctx.strokeStyle = `rgb(43, 59, 41, ${1 - distanceRatio})`;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }
}

export function ParticleBackground() {
  useEffect(() => {
    const canvasElement = document.querySelector<HTMLCanvasElement>('canvas');

    if (!canvasElement) {
      return;
    }

    const canvasContext = canvasElement.getContext('2d');

    if (!canvasContext) return;

    // Type-safe references
    const canvas = canvasElement;
    const ctx = canvasContext;

    const colorDot = ['rgb(0, 119, 73)', 'rgb(0, 119, 73)', 'rgb(0, 119, 73)', 'rgb(0, 119, 73)', 'rgb(255, 184, 28)'];
    const color = 'rgb(81, 162, 233)';

    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = color;

    const mousePosition: Position = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100,
    };

    const windowSize = window.innerWidth;
    let dots: DotsConfig;

    if (windowSize > 1600) {
      dots = {
        nb: 600,
        distance: 70,
        d_radius: 300,
        array: [],
      };
    } else if (windowSize > 1300) {
      dots = {
        nb: 575,
        distance: 60,
        d_radius: 280,
        array: [],
      };
    } else if (windowSize > 1100) {
      dots = {
        nb: 500,
        distance: 55,
        d_radius: 250,
        array: [],
      };
    } else if (windowSize > 800) {
      dots = {
        nb: 300,
        distance: 0,
        d_radius: 0,
        array: [],
      };
    } else if (windowSize > 600) {
      dots = {
        nb: 200,
        distance: 0,
        d_radius: 0,
        array: [],
      };
    } else {
      dots = {
        nb: 100,
        distance: 0,
        d_radius: 0,
        array: [],
      };
    }

    function initDots(): void {
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot(canvas.width, canvas.height, colorDot));
      }
      dots.array[0].radius = 1.5;
      dots.array[0].colour = '#51a2e9';
    }

    function drawDots(): void {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.nb; i++) {
        dots.array[i].create(ctx, mousePosition, windowSize);
      }
      dots.array[0].line(ctx, dots, mousePosition);
      dots.array[0].animate(dots, canvas);
    }

    const handleMouseMove = (parameter: MouseEvent): void => {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY - window.scrollY;

      try {
        dots.array[0].x = parameter.pageX;
        dots.array[0].y = parameter.pageY - window.scrollY;
      } catch {
        // Silently handle error
      }
    };

    const handleResize = (): void => {
      clearInterval(draw);
      // Re-initialize on resize
      window.location.reload();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    initDots();
    const draw = setInterval(drawDots, 1000 / 30);

    // Cleanup
    return () => {
      clearInterval(draw);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed -z-50'>
      <canvas className='connecting-dots'></canvas>
    </div>
  );
}
