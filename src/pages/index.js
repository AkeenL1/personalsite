import * as React from "react"
import "../styles/global.css"
import NavBar from "../components/navbar"
import ParticlesBG from "../components/particlesbg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn, faMedium, faMediumM} from "@fortawesome/free-brands-svg-icons"

const indexPage = () => {
  return (
    <main id="indexPage" className="bg-gradient-to-tr from-[#320f3a] via-[#030122] to-[#111111] flex justify-center items-center h-screen w-screen">
      <ParticlesBG ></ParticlesBG>
      <div id="profile" className="absolute bg-[url('../images/Untitled.png')] rounded-full ">
      </div>
      <div id="content" className="flex flex-col  xl:w-3/5 w-3/4 h-3/4 mt-8 mb-6 rounded-md md:text-base lg:text-lg xl:text-xl justify-center">
        <div id="nav" className="mb-5 text-slate-200">
          <NavBar ></NavBar>
        </div>
        <div id="text" className="flex justify-evenly ">
          <div id="blurb" className="flex justify-center items-center w-3/4">
            <p className="text-center text-[#b7b6b6] w-full "> 
            Currently pursuing a CS degree and working as a back-end software engineering intern, 
            honing and learning software engineering skills and practices in a collaborative environment. 
            Always seeking new challenges to expand my knowledge in front-end and back-end development for both professional use and passion projects.
            
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-8 w-full text-[#b7b6b6] mb-8">
            <div className="flex justify-evenly w-1/2 mt-8">
              <a href="https://github.com/AkeenL1" className="border-2 p-4 rounded-full border-[#686868] bg-opacity-50 bg-[#000000] hover:bg-[#b7b6b6] text-[#653636]" >
                <FontAwesomeIcon className="fa-2xl" icon={faGithubAlt} />
              </a>
              <a href="https://medium.com/@akeenlewis" className="border-2 p-4 rounded-full border-[#686868] bg-opacity-50 bg-[#000000] hover:bg-[#b7b6b6] text-[#7E998A]">
                <FontAwesomeIcon className="fa-2xl"icon={faMediumM} />  
              </a>
              <a href="https://www.linkedin.com/in/akeenlewis" className="border-2 text-center p-4 rounded-full border-[#686868] bg-opacity-50 bg-[#000000] hover:bg-[#b7b6b6] text-[#655236]">
                <FontAwesomeIcon className="fa-2xl"icon={faLinkedinIn} />  
              </a>
            </div>
        </div>  
        <div id="email" className="flex justify-center items-center lg:text-lg xl:text-xl text-[#b7b6b6]">
          <p>Email: <a  href="mailto:akeenlewis1@gmail.com" className="hover:text-[#5B3280] hover:ease-in duration-300">akeenlewis1@gmail.com</a></p>
        </div>
      </div>
    </main>
  )
}

export default indexPage 

export const Head = () => <title>Akeen Lewis</title>
