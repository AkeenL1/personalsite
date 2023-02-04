import * as React from "react"
import "../styles/global.css"
import NavBar from "../components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft, faArrowLeftLong, faArrowRightLong, faMicrochip, faTerminal} from "@fortawesome/free-solid-svg-icons"
import ProjectParticlesBG from "../components/projectparticles"
const projectsPage = () => {
    return(
        <main className="flex m-0 flex-col overflow-hidden h-screen w-screen bg-gradient-to-tr from-[#AA6924] via-[#3B0F0F] to-[#111111]">
            <ProjectParticlesBG />
            <div className="z-10 text-slate-200 text-xl m-0">
                <NavBar ></NavBar>
            </div>

            <div id="projectContent" className="z-10 grid h-full p-0 text-slate-200">
                <div id="image" className="h-full bg-[url('../images/pathholder1.png')]">

                </div>

                <div id="disc" className="flex flex-row items-end border-l-2 border-gray-200 h-full">
                    <p className="mb-8 p-8">
                        This project will be here soon, in the mean time enjoy this AI generated art courtesy of Dall E.
                    </p>
                </div>

                <div id="title" className="flex justify-evenly items-center border-t-2 border-gray-200 h-full">
                    <h2 className="text-5xl">Coming Soon.</h2>
                    <FontAwesomeIcon icon={faTerminal} className="text-5xl"/>
                </div>
                <div id="projectsNav" className="flex justify-center items-center border-t-2 border-l-2 border-gray-200 h-full">
                    <button className="border-r-2 border-gray-500 h-full w-full text-3xl" disabled><FontAwesomeIcon className="opacity-30" icon={faArrowLeftLong}/></button>
                    <button className="border-l-2 border-gray-500 h-full w-full text-3xl" disabled><FontAwesomeIcon className="opacity-30" icon={faArrowRightLong}/></button>
                </div>
            </div>
        </main>
    )
}

export default projectsPage

export const Head = () => <title>Akeen Lewis</title>