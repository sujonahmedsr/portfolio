import { Link, NavLink } from "react-router-dom";
import { FaArrowRight, FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="bg-slate-900 z-10 text-white border-b fixed top-0 left-0 right-0">
            <div className="p-3 flex  items-center justify-between container mx-auto ">
                <Link className="text-3xl font-bold hover:scale-110 duration-300" to={'/'}>SJN <span className="text-yellow-500">R.</span></Link>
                <button className="p-2 md:hidden  text-2xl font-bold" onClick={() => setShow(!show)}>
                    <FaBarsStaggered></FaBarsStaggered>
                </button>
                <ul className="hidden md:flex *:px-3 *:mx-2 text-lg items-center">
                    <NavLink to={'/'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <li>About Me</li>
                    </NavLink>
                    <NavLink to={'/portfolio'}>
                        <li>Portfolios</li>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <button className="flex items-center gap-3 text-white font-semibold text-xl border-2 border-yellow-500 hover:bg-yellow-500  duration-300 rounded-full pl-5">Contact Me 
                                <p className="bg-yellow-500 rounded-full p-3"><FaArrowRight ></FaArrowRight></p>
                            </button>
                    </NavLink>
                </ul>

                <div className=
                    {`fixed ${show ? 'hidden' : ''} z-0 md:hidden bg-gray-900 inset-0`}>
                    <div className="flex items-center justify-between p-3">
                    <Link className="text-3xl font-bold hover:scale-110 duration-300" to={'/'}>SJN <span className="text-yellow-500">R.</span></Link>

                        <button className="p-2 md:hidden text-2xl font-bold" onClick={() => setShow(!show)}>
                            <RxCross2></RxCross2>
                        </button>


                    </div>
                    <ul className="flex flex-col text-lg md:hidden *:p-3 text-center">
                        <NavLink onClick={() => setShow(!show)} to={'/'}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink onClick={() => setShow(!show)} to={'/about'}>
                            <li>About</li>
                        </NavLink>
                        <NavLink onClick={() => setShow(!show)} to={'/Portfolio'}>
                            <li>Portfolio</li>
                        </NavLink>
                        <NavLink onClick={() => setShow(!show)} to={'/contact'}>
                            <li>Contact Me</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;