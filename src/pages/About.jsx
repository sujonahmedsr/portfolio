import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa6";
import { TfiMinus } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Card from "./Card";
const About = () => {
    return (
        <div className="bg-gray-900 pt-24 md:pt-32 px-4">
            <Helmet>
                <title>SJNR. | About</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between container mx-auto items-center p-5 gap-5 text-white">
                <div>
                    <h1 className="text-3xl font-bold text-center pb-5 ">PERSONAL <span className="text-yellow-500">INFOS</span></h1>
                    <div className="flex md:flex-row flex-col justify-between gap-5">
                        <ul className="space-y-3 text-lg">
                            <li>First Name : <span className="font-bold text-yellow-500">Shofiqul Islam</span></li>
                            <li>Last Name : <span className="font-bold text-yellow-500">Sujon</span></li>
                            <li>Date Of Birth : <span className="font-bold text-yellow-500">11 Dec 2002</span></li>
                            <li>Nationality : <span className="font-bold text-yellow-500">Bangladeshi</span></li>
                            <li>Freelance : <span className="font-bold text-yellow-500">Not Available Now</span></li>
                        </ul>
                        <ul className="space-y-3 text-lg">
                            <li>Address : <span className="font-bold text-yellow-500">Sirajganj, Bangladesh</span></li>
                            <li>Phone : <span className="font-bold text-yellow-500">+880 1798 769363</span></li>
                            <li>Email : <span className="font-bold text-yellow-500">shofiqul.sujon2021@gmail.com</span></li>
                            <li>Skype : <span className="font-bold text-yellow-500">md.sujon2201</span></li>
                            <li>Langages : <span className="font-bold text-yellow-500">Bangla, English, Hindi</span></li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <Link to={'/'} className={"inline-block"}>
                            <button className="flex items-center gap-3 text-white font-semibold text-xl border-2 border-yellow-500 hover:bg-yellow-500  duration-300 rounded-full pl-5">Hire Me
                                <p className="bg-yellow-500 rounded-full p-3"><FaArrowRight ></FaArrowRight></p>
                            </button>
                        </Link>                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="border py-5 px-5 md:px-16 space-y-3">
                        <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">1 <sup>+</sup></h1>

                        <div className="flex gap-5 text-lg md:text-2xl">
                            <TfiMinus></TfiMinus>
                            <p>YEARS OF <br />
                                EXPERIENCE</p>
                        </div>
                    </div>
                    <div className="border py-5 px-5 md:px-16 space-y-3">
                        <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">0 <sup>+</sup></h1>

                        <div className="flex gap-5 text-lg md:text-2xl">
                            <TfiMinus></TfiMinus>
                            <p>COMPLETED <br />
                                PROJECTS</p>
                        </div>
                    </div>
                    <div className="border py-5 px-5 md:px-16 space-y-3">
                        <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">0 <sup>+</sup></h1>

                        <div className="flex gap-5 text-lg md:text-2xl">
                            <TfiMinus></TfiMinus>
                            <p>HAPPY <br />
                                CUSTOMERS</p>
                        </div>
                    </div>
                    <div className="border py-5 px-5 md:px-16 space-y-3">
                        <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">0 <sup>+</sup></h1>
                        <div className="flex gap-5 text-lg md:text-2xl">
                            <TfiMinus></TfiMinus>
                            <p>AWARDS <br />
                                WON</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white pt-24 container mx-auto text-center ">

                <h1 className="text-3xl font-bold text-center uppercase">My <span className="text-yellow-500">Skills</span></h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5">
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 85 }} role="progressbar">85%</div>
                        <h1 className="text-2xl font-bold">HTML</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <h1 className="text-2xl font-bold">CSS</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 85 }} role="progressbar">85%</div>
                        <h1 className="text-2xl font-bold">TAILWIND CSS</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 85 }} role="progressbar">85%</div>
                        <h1 className="text-2xl font-bold">BOOTSTRAP</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 70 }} role="progressbar">70%</div>
                        <h1 className="text-2xl font-bold">JAAVASCRIPT</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <h1 className="text-2xl font-bold">REACT JS</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 85 }} role="progressbar">85%</div>
                        <h1 className="text-2xl font-bold">FIREBASE</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 60 }} role="progressbar">60%</div>
                        <h1 className="text-2xl font-bold">MONGODB</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 60 }} role="progressbar">60%</div>
                        <h1 className="text-2xl font-bold">EXPRESS JS</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 50 }} role="progressbar">50%</div>
                        <h1 className="text-2xl font-bold">NODE JS</h1>
                    </div>
                    <div className="space-y-3 pt-5">
                        <div className="radial-progress text-yellow-500 text-xl" style={{ "--value": 75 }} role="progressbar">75%</div>
                        <h1 className="text-2xl font-bold">GIT & GITHUB</h1>
                    </div>
                </div>
            </div>
            <div className="text-white pt-24 container mx-auto text-center">
                <h1 className="text-3xl font-bold text-center uppercase">Education<span className="text-yellow-500"> & Courses</span></h1>
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <h1 className="text-3xl font-bold text-center uppercase">Courses</h1>
                        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-yellow-500 flex flex-col gap-10">
                            <Card
                                title="Front End Web Development"
                                subTitle="Programming Hero"
                                des="I have completed my frontend web development course from Programming Hero."
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-center uppercase">Education</h2>
                        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-yellow-500 flex flex-col gap-10">
                            <Card
                                title="Diploma in Computer Science And Technology"
                                subTitle="Sirajganj Polytechnic Institute (2021 - 2024)"
                                des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                            />
                            <Card
                                title="Secondary School Certificate."
                                subTitle="M.S.A High School(2019 - 2020)"
                                des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;