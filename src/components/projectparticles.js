import * as React from "react"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


const ProjectParticlesBG = () => {
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
            particles: {
                number: {
                  value: 0,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffff00",
                  animation: {
                    enable: true,
                    speed: -17,
                    sync: true
                  }
                },
                shape: {
                  type: "circle"
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  animation: {
                    enable: true,
                    speed: 0.9,
                    minimumValue: 0,
                    sync: false
                  }
                },
                size: {
                  value: 8,
                  random: { enable: true, minimumValue: 4 },
                  animation: {
                    enable: false,
                    speed: 20,
                    minimumValue: 4,
                    sync: false
                  }
                },
                life: {
                  duration: {
                    value: 7
                  },
                  count: 1
                },
                move: {
                  angle: {
                    value: 45,
                    offset: 0
                  },
                  enable: true,
                  gravity: {
                    enable: true,
                    acceleration: -0.5
                  },
                  speed: 3,
                  direction: "top",
                  random: true,
                  straight: false,
                  size: true,
                  outModes: {
                    default: "destroy",
                    bottom: "none"
                  },
                  attract: {
                    enable: false,
                    distance: 300,
                    rotate: {
                      x: 600,
                      y: 1200
                    }
                  }
                }
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true
                }
              },
              detectRetina: true,
              emitters: {
                direction: "top",
                rate: {
                  quantity: 50,
                  delay: 0.01
                },
                size: {
                  width: 100,
                  height: 10
                },
                position: {
                  x: 50,
                  y: 100
                }
              },
        }}
    />
    );
};

export default ProjectParticlesBG