import { FaMinus } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import profile from '../assets/profile.png'
import shofiqulIslamResume from '../assets/shofiqulIslam(Front End Developer).pdf';
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div className="bg-gray-900 md:h-screen flex items-center justify-center md:pt-0 pt-20">
            <Helmet>
                <title>SJNR. | Home</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between container mx-auto items-center p-5 gap-5">
                <div>
                    <img src={profile} className="w-full md:w-3/4 md:h-[500px] border md:rounded-full bg-yellow-500 hover:scale-110 md:hover:rotate-12 duration-300 mx-auto"  alt="My Pic" />
                </div>
                <div className="space-y-5">
                    <h1 className="text-yellow-400 font-bold text-2xl md:text-5xl flex items-center gap-5">
                        <FaMinus></FaMinus>
                        {`I'M SHOFIQUL ISLAM.`}</h1>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            `I'm a Web Designer`,
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            `I'm a Front End Developer`,
                            1000,
                            `I'm a Jr Web Developer`,
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-white text-xl md:text-3xl font-bold"
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p className="text-white md:text-xl font-semibold">I am a passionate and creative Front-End Web Developer. I also know the back end. I know some technologies of web
                        development such as HTML, CSS, Javascript and React. I completed some awesome full-stack projects.</p>
                    <div className="flex items-center gap-5 text-3xl *:text-white ">
                        <a className="hover:scale-125 duration-300" href="https://github.com/sujonahmedsr" target="_blank">
                            <FaGithub></FaGithub>
                        </a>
                        <a className="hover:scale-125 duration-300" href="https://www.linkedin.com/in/shofiqulsujon81/" target="_blank">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a className="hover:scale-125 duration-300" href="https://www.facebook.com/sujonahmeds81" target="_blank">
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                    <div>
                        <a href={shofiqulIslamResume} download className="inline-block">
                            <button className="flex items-center gap-3 text-white font-semibold text-xl border-2 border-yellow-500 hover:bg-yellow-500  duration-300 rounded-full pl-5">Get Resume 
                                <p className="bg-yellow-500 rounded-full p-3"><FaArrowRight ></FaArrowRight></p>
                            </button>
                        </a>                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;