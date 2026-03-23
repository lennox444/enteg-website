'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
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
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.003;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);
        onScrollProgress?.(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        // Reduced sensitivity so users see the full animation (was 0.026/0.018)
        const scrollFactor = deltaY < 0 ? 0.005 : 0.004;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);
        onScrollProgress?.(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const handleHashChange = (): void => {
      setMediaFullyExpanded(true);
      setShowContent(true);
      onScrollProgress?.(1);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [onScrollProgress]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Mobile: start smaller so the initial box fits the viewport (420px > 390px iPhone)
  const mediaWidth = isMobileState
    ? 260 + scrollProgress * 220   // 260px → 480px (capped by maxWidth: 95vw)
    : 420 + scrollProgress * 400;  // 420px → 820px on desktop
  const mediaHeight = isMobileState
    ? 300 + scrollProgress * 180   // 300px → 480px
    : 480 + scrollProgress * 100;
  // Reduce text slide distance on mobile to avoid triggering horizontal overflow
  const textTranslateX = scrollProgress * (isMobileState ? 50 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-full h-full'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <div className='absolute inset-0 bg-black/50' />
          </motion.div>

          {/* CPU Architecture — fades in as bg photo fades out */}
          <motion.div
            className='absolute inset-0 z-0 flex items-center justify-center bg-[#07101C]'
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <CpuArchitecture
              text="ENTEG"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              className="text-gray-200"
            />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              {/* Expanding media */}
              <motion.div
                className='absolute z-0 rounded-2xl overflow-hidden transition-none'
                style={{
                  top: '50%',
                  left: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: 'none',
                }}
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
                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
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
                    <motion.div
                      className='absolute inset-0 bg-black/30'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </motion.div>

              {/* First word — anchored to top, slides left */}
              <motion.div
                className={`absolute top-[18%] left-0 right-0 flex justify-center z-10 transition-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <h1
                  className='font-headline text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white transition-none drop-shadow-lg'
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </h1>
              </motion.div>

              {/* Second word — anchored to bottom, slides right */}
              <motion.div
                className={`absolute bottom-[18%] left-0 right-0 flex justify-center z-10 transition-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              >
                <h1
                  className='font-headline text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white transition-none drop-shadow-lg'
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </h1>
              </motion.div>

              {/* Date + scroll hint — below the media box */}
              <div className='absolute bottom-[8%] left-0 right-0 flex flex-col items-center gap-1.5 z-10'>
                {date && (
                  <motion.p
                    className='text-xs font-medium tracking-widest uppercase text-white/60 drop-shadow'
                    style={{ transform: `translateX(-${textTranslateX * 0.5}vw)` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {date}
                  </motion.p>
                )}
                {scrollToExpand && (
                  <motion.p
                    className='text-white/40 text-xs tracking-wider drop-shadow'
                    style={{ transform: `translateX(${textTranslateX * 0.5}vw)` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {scrollToExpand}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Children — fade in after full expansion */}
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
