'use client';

import { useColorModeValue, useToken } from '@chakra-ui/react';
import type { Engine } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ReactElement } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { ParticleProps } from 'types/components/particles';

const ParticlesComponent = ({ id }: ParticleProps): ReactElement | null => {
  const [dotlight, dotdark, linklight, linkdark] = useToken('colors', [
    'primary.60',
    'secundary.200',
    'primary.50',
    'secundary.100'
  ]);
  const dotcolor = useColorModeValue(dotlight, dotdark);
  const linkcolor = useColorModeValue(linklight, linkdark);
  const [init, setInit] = useState(false);

  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push'
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: {
          enable: true
        }
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    fullScreen: false,
    detectRetina: true,
    particles: {
      color: {
        value: dotcolor
      },
      links: {
        color: linkcolor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      move: {
        enable: true,
        random: true,
        speed: { min: 2, max: 5 },
        straight: false
      },
      opacity: {
        value: { min: 0.2, max: 0.7 }
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 1, max: 5 }
      }
    }
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const setupEngine = async (): Promise<void> => {
      try {
        await initParticlesEngine(particlesInit);
        setInit(true);
      } catch (error) {
        console.error('Failed to initialize tsParticles engine:', error);
        setInit(false);
      }
    };
    void setupEngine();
  }, [particlesInit]);

  return init ? <Particles id={id} options={particlesOptions} /> : null;
};

export default ParticlesComponent;
