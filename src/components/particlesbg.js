import * as React from "react"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBG = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 7,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFFFFF",
                },
                links: {
                    color: "#355E3B",
                    distance: 200,
                    enable: true,
                    opacity: 1.125,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 115,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "edge",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
    );
};

export default ParticlesBG