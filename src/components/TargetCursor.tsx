import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './TargetCursor.css';

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  parallaxOn?: boolean;
  hoverDuration?: number;
}

export default function TargetCursor({
  spinDuration = 2,
  hideDefaultCursor = true,
  parallaxOn = true,
  hoverDuration = 0.2,
}: TargetCursorProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSnapped, setIsSnapped] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const cornersWrapperRef = useRef<HTMLDivElement>(null);

  const tlRef = useRef<HTMLDivElement>(null);
  const trRef = useRef<HTMLDivElement>(null);
  const brRef = useRef<HTMLDivElement>(null);
  const blRef = useRef<HTMLDivElement>(null);

  // Keep track of mouse positions
  const mouse = useRef({ x: 0, y: 0 });
  const smoothedMouse = useRef({ x: 0, y: 0 });
  const hoveredElement = useRef<HTMLElement | null>(null);

  // Continuous rotation tween
  const rotationTween = useRef<gsap.core.Tween | null>(null);

  // Check if we are on a desktop platform with cursor
  useEffect(() => {
    const handleResize = () => {
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      const minWidth = window.innerWidth >= 1024;
      setIsDesktop(hasPointer && minWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Globally toggle hide custom cursor style
  useEffect(() => {
    if (isDesktop && hideDefaultCursor) {
      document.body.classList.add('hide-default-cursor');
    } else {
      document.body.classList.remove('hide-default-cursor');
    }
    return () => {
      document.body.classList.remove('hide-default-cursor');
    };
  }, [isDesktop, hideDefaultCursor]);

  // Initial continuous spin
  useEffect(() => {
    if (!isDesktop || !cornersWrapperRef.current) return;

    // Continuous 360 spin for default state
    rotationTween.current = gsap.to(cornersWrapperRef.current, {
      rotation: 360,
      repeat: -1,
      duration: spinDuration,
      ease: 'none',
    });

    return () => {
      if (rotationTween.current) rotationTween.current.kill();
    };
  }, [isDesktop, spinDuration]);

  // Core update loop running with requestAnimationFrame or GSAP ticker
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    // Event delegation to capture .cursor-target hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.cursor-target') as HTMLElement | null;
      if (target) {
        hoveredElement.current = target;
        setIsSnapped(true);

        // Turn down or pause active spinning so corners align flatly
        if (rotationTween.current) {
          rotationTween.current.pause();
        }

        // Snap corners to flat 0 degree rotation relative to hovered element
        gsap.to(cornersWrapperRef.current, {
          rotation: 0,
          duration: hoverDuration,
          ease: 'power3.out',
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.cursor-target') as HTMLElement | null;
      if (target && e.relatedTarget && !(e.relatedTarget as HTMLElement).closest('.cursor-target')) {
        hoveredElement.current = null;
        setIsSnapped(false);

        // Resume active continuous spin
        if (rotationTween.current) {
          rotationTween.current.play();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Frame update ticker
    let animId: number;

    const updateCursor = () => {
      const wrapper = wrapperRef.current;
      const dot = dotRef.current;
      const tl = tlRef.current;
      const tr = trRef.current;
      const br = brRef.current;
      const bl = blRef.current;

      if (!wrapper) {
        animId = requestAnimationFrame(updateCursor);
        return;
      }

      // Smooth mouse movement tracking (damping lag)
      smoothedMouse.current.x += (mouse.current.x - smoothedMouse.current.x) * 0.16;
      smoothedMouse.current.y += (mouse.current.y - smoothedMouse.current.y) * 0.16;

      if (hoveredElement.current) {
        // SNAPPED STATE: Magnetic suction with parallax
        const rect = hoveredElement.current.getBoundingClientRect();
        const centerButtonX = rect.left + rect.width / 2;
        const centerButtonY = rect.top + rect.height / 2;

        // Apply a small magnetic parallax pull based on offset between current mouse and absolute center
        const pullFactor = parallaxOn ? 0.15 : 0;
        const targetX = centerButtonX + (mouse.current.x - centerButtonX) * pullFactor;
        const targetY = centerButtonY + (mouse.current.y - centerButtonY) * pullFactor;

        // Animate main container to magnetic center
        gsap.to(wrapper, {
          x: targetX,
          y: targetY,
          duration: hoverDuration,
          overwrite: 'auto',
          ease: 'power3.out',
        });

        // Magnetically shift inner dot slightly more for rich parallax layers
        if (dot) {
          const dotPullX = (mouse.current.x - centerButtonX) * (parallaxOn ? 0.08 : 0);
          const dotPullY = (mouse.current.y - centerButtonY) * (parallaxOn ? 0.08 : 0);
          gsap.to(dot, {
            x: dotPullX,
            y: dotPullY,
            duration: hoverDuration,
            overwrite: 'auto',
          });
        }

        // Expand corners to completely wrap the card borderswith extra padding (e.g. 6px)
        const pad = 6;
        const cornerW = rect.width / 2 + pad;
        const cornerH = rect.height / 2 + pad;

        if (tl && tr && br && bl) {
          gsap.to(tl, { x: -cornerW, y: -cornerH, duration: hoverDuration, overwrite: 'auto' });
          gsap.to(tr, { x: cornerW, y: -cornerH, duration: hoverDuration, overwrite: 'auto' });
          gsap.to(br, { x: cornerW, y: cornerH, duration: hoverDuration, overwrite: 'auto' });
          gsap.to(bl, { x: -cornerW, y: cornerH, duration: hoverDuration, overwrite: 'auto' });
        }
      } else {
        // IDLE STATE: Free-floating regular circular targeting box
        gsap.to(wrapper, {
          x: smoothedMouse.current.x,
          y: smoothedMouse.current.y,
          duration: 0.1,
          overwrite: 'auto',
          ease: 'power2.out',
        });

        // Return inner dot to default center
        if (dot) {
          gsap.to(dot, {
            x: 0,
            y: 0,
            duration: 0.1,
            overwrite: 'auto',
          });
        }

        // Return corners to a symmetric default sized bounding square (approx. 16px radius)
        const radius = 16;
        if (tl && tr && br && bl) {
          gsap.to(tl, { x: -radius, y: -radius, duration: 0.15, overwrite: 'auto' });
          gsap.to(tr, { x: radius, y: -radius, duration: 0.15, overwrite: 'auto' });
          gsap.to(br, { x: radius, y: radius, duration: 0.15, overwrite: 'auto' });
          gsap.to(bl, { x: -radius, y: radius, duration: 0.15, overwrite: 'auto' });
        }
      }

      animId = requestAnimationFrame(updateCursor);
    };

    animId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, [isDesktop, parallaxOn, hoverDuration]);

  // Disable visual cursor entirely for touch screen device viewports
  if (!isDesktop) return null;

  return (
    <div
      ref={wrapperRef}
      id="custom-target-cursor"
      className={`target-cursor-wrapper ${isSnapped ? 'target-cursor-snapped' : ''}`}
      style={{ transform: 'translate(-50%, -50%)', x: 0, y: 0 }} // Managed smoothly by GSAP
    >
      {/* Central target dot */}
      <div ref={dotRef} className="target-cursor-dot" />

      {/* Outer corner target boundaries */}
      <div ref={cornersWrapperRef} className="target-cursor-corners-wrapper relative w-full h-full">
        <div ref={tlRef} className="target-cursor-corner corner-tl" />
        <div ref={trRef} className="target-cursor-corner corner-tr" />
        <div ref={brRef} className="target-cursor-corner corner-br" />
        <div ref={blRef} className="target-cursor-corner corner-bl" />
      </div>
    </div>
  );
}
