import React, { useEffect } from "react";
import "particles.js";

const ParticleComponent = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 700
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#ffffff"
            }
          },
          "opacity": {
            "value": 0.25,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 0.25,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 8,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 2,
              "size_min": 0,
              "sync": true
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 1,
            "width": 20
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "top-right",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
  }, []);

  return <div id="particles-js" className="z-[99]" style={{ position: "absolute", width: "100%", height: "100%" }} />;
};

export default ParticleComponent;
