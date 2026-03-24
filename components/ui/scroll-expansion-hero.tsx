'use client';

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CpuArchitecture } from '@/components/ui/cpu-architecture';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc?: string;
  mediaNode?: ReactNode;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
  onScrollProgress?: (progress: number) => void;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  mediaNode,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
  onScrollProgress,
}: ScrollExpandMediaProps) => {
  // ── Threshold state (rare changes — 0→1 each, max) ──────────────
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);

  // ── Scroll progress as ref — zero React re-renders during scroll ─
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const touchStartYRef = useRef(0);
  const isMobileRef = useRef(false);
  const mediaFullyExpandedRef = useRef(false); // mirror state for event handlers

  // ── DOM refs for direct style updates ───────────────────────────
  const bgPhotoRef = useRef<HTMLDivElement>(null);
  const cpuBgRef = useRef<HTMLDivElement>(null);
  const mediaBoxRef = useRef<HTMLDivElement>(null);
  const firstWordRef = useRef<HTMLHeadingElement>(null);
  const secondWordRef = useRef<HTMLHeadingElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBarWrapRef = useRef<HTMLDivElement>(null);

  // ── Sync state mirror ────────────────────────────────────────────
  useEffect(() => {
    mediaFullyExpandedRef.current = mediaFullyExpanded;
  }, [mediaFullyExpanded]);

  // ── Direct DOM update — runs inside RAF, zero React overhead ─────
  const applyProgress = useCallback((p: number) => {
    const mobile = isMobileRef.current;

    // Media box size
    const w = mobile ? 260 + p * 220 : 420 + p * 400;
    const h = mobile ? 300 + p * 180 : 480 + p * 100;
    if (mediaBoxRef.current) {
      mediaBoxRef.current.style.width = `${w}px`;
      mediaBoxRef.current.style.height = `${h}px`;
    }

    // Text slide — needs 110vw+ on mobile so long words like "RECYCLING POWER" clear the edge
    const tx = p * (mobile ? 110 : 150);
    if (firstWordRef.current)  firstWordRef.current.style.transform  = `translateX(-${tx}vw)`;
    if (secondWordRef.current) secondWordRef.current.style.transform = `translateX(${tx}vw)`;

    // Background crossfade
    if (bgPhotoRef.current)  bgPhotoRef.current.style.opacity  = String(1 - p);
    if (cpuBgRef.current)    cpuBgRef.current.style.opacity    = String(p);

    // Hint fade
    if (hintRef.current) hintRef.current.style.opacity = String(Math.max(0, 1 - p * 2));

    // Progress bar
    if (progressBarRef.current) progressBarRef.current.style.width = `${p * 100}%`;
    if (progressBarWrapRef.current) progressBarWrapRef.current.style.display = p >= 1 ? 'none' : 'block';
  }, []);

  // ── Mobile detection + initial size sync ────────────────────────
  useEffect(() => {
    const check = () => {
      isMobileRef.current = window.innerWidth < 768;
      applyProgress(progressRef.current);
    };
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [applyProgress]);

  // ── On mount: if browser restored scroll to a non-zero position,
  //    skip the hero animation entirely so the page is usable ───────
  useEffect(() => {
    if (window.scrollY > 0) {
      progressRef.current = 1;
      mediaFullyExpandedRef.current = true;
      applyProgress(1);
      setMediaFullyExpanded(true);
      setShowContent(true);
      onScrollProgress?.(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Commit progress update (called from event handlers via RAF) ──
  const commitProgress = useCallback((newP: number) => {
    progressRef.current = newP;
    applyProgress(newP);
    onScrollProgress?.(newP);

    if (newP >= 1 && !mediaFullyExpandedRef.current) {
      mediaFullyExpandedRef.current = true;
      setMediaFullyExpanded(true);
      setShowContent(true);
    } else if (newP < 0.75 && mediaFullyExpandedRef.current) {
      // won't happen in normal flow but guard anyway
    }
  }, [applyProgress, onScrollProgress]);

  // ── Wheel handler ────────────────────────────────────────────────
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        mediaFullyExpandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
        return;
      }
      if (mediaFullyExpandedRef.current) return;

      e.preventDefault();
      const delta = e.deltaY * 0.005;
      const newP = Math.min(Math.max(progressRef.current + delta, 0), 1);

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => commitProgress(newP));
    };

    const handleScroll = () => {
      if (!mediaFullyExpandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [commitProgress]);

  // ── Touch handlers ───────────────────────────────────────────────
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartYRef.current) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY;

      if (mediaFullyExpandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        mediaFullyExpandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
        touchStartYRef.current = touchY;
        return;
      }
      if (mediaFullyExpandedRef.current) return;

      e.preventDefault();
      const factor = deltaY < 0 ? 0.009 : 0.008;
      const newP = Math.min(Math.max(progressRef.current + deltaY * factor, 0), 1);

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => commitProgress(newP));

      touchStartYRef.current = touchY;
    };

    const handleTouchEnd = () => { touchStartYRef.current = 0; };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove',  handleTouchMove,  { passive: false });
    window.addEventListener('touchend',   handleTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove',  handleTouchMove);
      window.removeEventListener('touchend',   handleTouchEnd);
    };
  }, [commitProgress]);

  // ── Hash change (skip animation) ────────────────────────────────
  useEffect(() => {
    const handleHashChange = () => {
      progressRef.current = 1;
      applyProgress(1);
      mediaFullyExpandedRef.current = true;
      setMediaFullyExpanded(true);
      setShowContent(true);
      onScrollProgress?.(1);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [applyProgress, onScrollProgress]);

  const firstWord   = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className='overflow-x-hidden'>
      {/* ── Scroll progress bar ─────────────────────────────────── */}
      <div
        ref={progressBarWrapRef}
        className='fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none'
      >
        <div
          ref={progressBarRef}
          className='h-full'
          style={{
            width: '0%',
            background: 'linear-gradient(90deg, #4A8FE0, #60a5fa)',
            willChange: 'width',
          }}
        />
      </div>

      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>

          {/* ── Background photo (fades out as scroll progresses) ── */}
          <div
            ref={bgPhotoRef}
            className='absolute inset-0 z-0 h-full'
            style={{ opacity: 1, willChange: 'opacity' }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-full h-full'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            <div className='absolute inset-0 bg-black/50' />
          </div>

          {/* ── CPU Architecture (fades in as bg photo fades out) ── */}
          <div
            ref={cpuBgRef}
            className='absolute inset-0 z-0 flex items-center justify-center bg-[#07101C]'
            style={{ opacity: 0, willChange: 'opacity' }}
          >
            <CpuArchitecture
              text='ENTEG'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid slice'
              className='text-gray-200'
            />
          </div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>

              {/* ── Expanding media box ─────────────────────────── */}
              <motion.div
                className='absolute z-0 rounded-2xl overflow-hidden'
                style={{
                  top: '50%',
                  left: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  // JS will update these; CSS vars as initial fallback
                  // (isMobile detection runs after mount so start with desktop defaults)
                  width: 'min(420px, 95vw)',
                  height: 'min(480px, 85vh)',
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  willChange: 'width, height',
                }}
                ref={mediaBoxRef}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                {mediaNode ? (
                  <div className='relative w-full h-full flex items-center justify-center p-10'>
                    {mediaNode}
                  </div>
                ) : mediaType === 'image' && mediaSrc ? (
                  <div className='relative w-full h-full bg-white flex items-center justify-center'>
                    <Image
                      src={mediaSrc}
                      alt={title || 'Elektrorecycling'}
                      width={1280}
                      height={720}
                      className='w-full h-full object-contain p-10'
                      priority
                    />
                  </div>
                ) : mediaSrc && mediaSrc.includes('youtube.com') ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={
                        mediaSrc.includes('embed')
                          ? mediaSrc + (mediaSrc.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                          : mediaSrc.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' + mediaSrc.split('v=')[1]
                      }
                      className='w-full h-full rounded-xl'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className='relative w-full h-full pointer-events-none'>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover'
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                  </div>
                )}
              </motion.div>

              {/* ── First word — slides left on scroll ─────────── */}
              <motion.div
                className={`absolute top-[18%] left-0 right-0 flex justify-center z-10 ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <h1
                  ref={firstWordRef}
                  className='font-headline text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white drop-shadow-lg'
                  style={{ willChange: 'transform' }}
                >
                  {firstWord}
                </h1>
              </motion.div>

              {/* ── Second word — slides right on scroll ────────── */}
              <motion.div
                className={`absolute bottom-[18%] left-0 right-0 flex justify-center z-10 ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              >
                <h1
                  ref={secondWordRef}
                  className='font-headline text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white drop-shadow-lg'
                  style={{ willChange: 'transform' }}
                >
                  {restOfTitle}
                </h1>
              </motion.div>

              {/* ── Date + scroll hint ──────────────────────────── */}
              <div
                ref={hintRef}
                className='absolute bottom-[8%] left-0 right-0 flex flex-col items-center gap-2 z-10'
                style={{ opacity: 1 }}
              >
                {date && (
                  <motion.p
                    className='text-xs font-medium tracking-widest uppercase text-white/60 drop-shadow'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {date}
                  </motion.p>
                )}
                {scrollToExpand && (
                  <motion.div
                    className='flex flex-col items-center gap-1.5'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <p className='text-white/50 text-xs tracking-wider drop-shadow'>
                      {scrollToExpand}
                    </p>
                    <svg
                      className='animate-scroll-bounce'
                      width='16'
                      height='10'
                      viewBox='0 0 16 10'
                      fill='none'
                    >
                      <path
                        d='M1 1L8 8L15 1'
                        stroke='rgba(255,255,255,0.4)'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            </div>

            {/* ── Page content — fades in after full expansion ─── */}
            <motion.section
              className='flex flex-col w-full px-6 py-12 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
