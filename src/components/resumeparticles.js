import * as React from "react"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ResumeParticlesBG = () => {
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
                color: { value: "#A9C6C7" },
                move: {
                  direction: "bottom",
                  enable: true,
                  outModes: "out",
                  speed: 2
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 400
                },
                opacity: {
                  value: 0.7
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: 10
                },
                wobble: {
                  enable: true,
                  distance: 10,
                  speed: 10
                },
                zIndex: {
                  value: { min: 0, max: 100 }
                }
              },
        }}
    />
    );
};

export default ResumeParticlesBG