import gsap from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });

    const heroRef = useRef(null);
    const textLayerRef = useRef(null);
    const outlineRef = useRef(null);
    const letterRefs = useRef([]);

    useLayoutEffect(() => {
        if (isMobHero) {
            return;
        }

        const letters = letterRefs.current.filter(Boolean);
        const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "back.out(1.6)" } });

        tl.fromTo(
            letters,
            {
                opacity: 0,
                scale: 0.18,
                x: () => Math.random() * 200 - 100,
                y: () => Math.random() * 220 - 110,
                rotation: () => Math.random() * 40 - 20,
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotation: 0,
                stagger: 0.075,
            }
        );

        tl.fromTo(
            outlineRef.current,
            {
                opacity: 0,
                scale: 0.96,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
            },
            "-=0.7"
        );

        return () => {
            tl.kill();
        };
    }, [isMobHero]);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) {
            return;
        }

        const handleMove = (event) => {
            const bounds = hero.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            const centerX = x - bounds.width / 2;
            const centerY = y - bounds.height / 2;
            const moveX = centerX * 0.04;
            const moveY = centerY * 0.03;

            gsap.to(textLayerRef.current, {
                x: moveX,
                y: moveY,
                duration: 0.45,
                ease: "power2.out",
            });

            gsap.to(outlineRef.current, {
                x: moveX * 1.4,
                y: moveY * 1.2,
                rotation: moveX * 0.16,
                duration: 0.45,
                ease: "power2.out",
            });
        };

        const handleLeave = () => {
            gsap.to([textLayerRef.current, outlineRef.current], {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.8,
                ease: "power2.out",
            });
        };

        hero.addEventListener("mousemove", handleMove);
        hero.addEventListener("mouseleave", handleLeave);

        return () => {
            hero.removeEventListener("mousemove", handleMove);
            hero.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    const name = "KARNAN";
    const bottomAccent = "AI Systems";

    return (
        <section className="hero-section w-dvw md:h-dvh h-[100vh] md:p-0 p-0 mb-20" ref={heroRef}>
            <div className="relative w-full h-full overflow-hidden bg-white">
                <div className="hero-noise-overlay" />
                <div className="relative w-full h-full p-6 md:px-10 md:pt-12">
                    <div className="hero-content h-full">
                        <div className="relative overflow-hidden h-full">
                            <div
                                ref={textLayerRef}
                                className="hero-text absolute top-0 left-0"
                            >
                                {name.split("").map((char, index) => (
                                    <span
                                        key={`${char}-${index}`}
                                        ref={(el) => {
                                            if (el) {
                                                letterRefs.current[index] = el;
                                            }
                                        }}
                                        className="hero-letter"
                                        style={{ "--idx": index + 1 }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>

                            <div ref={outlineRef} className="hero-outline-text">
                                DEVELOPER
                            </div>

                            <div className="hero-accent-strip" />
                        </div>

                        <div className="hero-bottom-bar">
                            <div className="hero-bottom-copy">
                                Full Stack Engineer · <span className="hero-accent-text">{bottomAccent}</span>
                            </div>
                            <div className="hero-bottom-detail">
                                Building production systems with MERN, Django, FastAPI, AWS, Docker & K8s.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
