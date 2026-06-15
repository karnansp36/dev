import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen h-dvh px-6 mt-10'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>Interested in building next-generation systems?<br />Explore my work on <span>GitHub</span></p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#b1a696]'>Full Stack Engineer & AI Systems Architect<br />
                    building production-grade applications<br />
                    with MERN, Django, FastAPI, AWS, Docker & K8s.<br /><br />
                    Passionate about AI platforms, semantic memory,<br />
                    and multi-tenant SaaS architecture.<a href="https://linkedin.com/in/karnan-sp-8280b9288" target="_blank" rel="noopener noreferrer" className='text-[#f4efe7] hover:text-[#c4c1b9] underline'> Let's collaborate.</a>
                </h3>

                <div className='flex flex-col justify-center items-end'>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Welcome</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Expertise</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Projects</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Tech Stack</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Featured Work</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Contact</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <a href="https://github.com/karnansp36" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:border-[#f2ede5] transition'><FaBehance className="text-xl" /></a>
                    <a href="https://linkedin.com/in/karnan-sp-8280b9288" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:border-[#f2ede5] transition'><CiLinkedin className="text-xl" /></a>
                    <a href="mailto:karnansp36@gmail.com" className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:border-[#f2ede5] transition'><FaInstagram className="text-xl" /></a>
                    <a href="https://github.com/karnansp36" target="_blank" rel="noopener noreferrer" className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:border-[#f2ede5] transition'><FaDribbble className="text-xl" /></a>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] text-right">
                        Full Stack Engineer · AI Systems<br />
                        Salem, Tamil Nadu, India 🇮🇳
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;