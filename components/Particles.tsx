'use client';

import { useColorModeValue } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useToken } from '@chakra-ui/react'

interface ParticleProps {
    id: string;
}

const ParticlesComponent = ({ id }: ParticleProps) => {
    const [dot_light, dot_dark, link_light, link_dark] = useToken('colors', [
        'primary.60', 'secundary.200',
        'primary.50', 'secundary.100'
    ])
    const dot_color = useColorModeValue(dot_light, dot_dark);
    const link_color = useColorModeValue(link_light, link_dark);
    const options = useMemo(() => {
        return {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                move: {
                    enable: true,
                    speed: 1,
                },
                links: {
                    enable: true,
                    speed: { min: 1, max: 3 },
                    color: link_color,
                },
                size: {
                    value: { min: 1, max: 3 }
                },
                opacity: {
                    value: { min: 0.2, max: 0.7 }
                },
                color: {
                    value: [dot_color],
                },
            },
            fullScreen: {
                enable: false,
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            retina_detect: true
        };
    }, [dot_color]);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles id={id} init={particlesInit} options={options}/>
    )
};

export default ParticlesComponent;