import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import "../styles/global.css"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "gatsby"
const styles = {
    divClasses:
    "transition-all ease-in duration-300 flex flex-col fixed inset-y-0 left-0 justify-evenly w-1/2 md:text-xl h-screen",
    };
const NavBar = ({link1,link2,link3}) => {

    const [display, setDisplay] = useState(false);

    const change = () => {
        setDisplay(!display)
    }

    return (
        <nav className="flex uppercase justify-around align-center border-b-4 border-b-gray-200" >
            <div className="flex flex-row justify-center align-center lg:hidden">
                <button className="text-slate-200" onClick={change}>
                    <FontAwesomeIcon icon={faBars} className="text-3xl pb-4"/>
                </button>    
                <div className="overflow-hidden">
                    <ul className={`${styles.divClasses} ${display ? '-translate-x-0 visible' : '-translate-x-full'}`}>
                        <div className="flex hover:bg-white hover:text-black items-center justify-center bg-black h-full w-full bg-opacity-70 border-b-2 border-b-[#B4B4B4]">
                            <button className="w-full h-full" onClick={change}>
                                <FontAwesomeIcon icon={faX} className="text-xl" />
                            </button>
                        </div>
                        <div className="flex hover:bg-[#261900] items-center justify-center bg-black h-full w-full bg-opacity-70 border-b-2 border-b-[#B4B4B4]">
                            <Link to="/"><li className="">Home</li></Link>
                        </div>
                        <div className="flex hover:bg-[#041804] items-center justify-center bg-black h-full w-full bg-opacity-70 border-b-2 border-b-[#B4B4B4]">
                            <Link to="/projects"><li className="">Projects</li></Link>
                        </div>
                        <div className="flex hover:bg-[#260000] items-center justify-center bg-black h-full w-full bg-opacity-70 ">
                            <li><Link to="/resume">Resume</Link></li>
                        </div>
                    </ul>
                </div>
            </div>
            <ul className="flex flex-row space-x-8 max-lg:hidden">
                <Link to="/"><li className="border-b-2 h-fit border-[#513600] hover:bg-gray-900 rounded-md p-1">Home</li></Link>
                <Link to="/projects"><li className="border-b-2 h-fit border-[#005100] hover:bg-gray-900 rounded-md p-1">Projects</li></Link>
                <Link to="/resume"><li className="border-b-2 h-fit border-[#510000] hover:bg-gray-900 rounded-md p-1">Resume</li></Link>
            </ul>
            <div className="pb-4">
                <h4 className="border-b-2 border-slate-200 rounded-md p-1">
                    Akeen K. Lewis
                </h4>
            </div>
        </nav>
    )
}

export default NavBar
