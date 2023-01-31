import * as React from "react"
import "../styles/global.css"
import temp from "../images/temp.png"
import NavBar from "../components/navbar"
import Particlesbarnacles from "../components/particlesbarnacles"
/*
Design for desktop displays from 1024×768 through 1920×1080
Design for mobile displays from 360×640 through 414×896
Design for tablet displays from 601×962 through 1280×800
*/

const indexPage = () => {
  return (
    <main className="bg-gradient-to-tr from-[#320f3a] via-[#030122] to-[#111111] flex justify-center items-center h-screen w-screen">
      <Particlesbarnacles ></Particlesbarnacles>
      <div id="content" className="flex flex-col  xl:w-3/5 w-3/4 h-3/4 mt-8 mb-6 rounded-md md:text-base lg:text-lg xl:text-xl justify-center">
        <div id="nav" className="mb-5 text-[#b7b6b6]">
          <NavBar link1={"Blog"} link2={"LinkedIn"} link3={"Resume"} link4={"Ventures"}></NavBar>
        </div>
        <div id="text" className="flex justify-evenly ">
          <div className="mr-3 w-1/4"id="pictureandinfo">
            <img id="profileImage" className="rounded-md" src={temp} alt="Me"/>
          </div>
          <div id="blurb" className="flex justify-center items-center w-3/4">
            <p className="text-center text-[#b7b6b6] w-3/4 "> 
            Pursuing a CS degree and working as a back-end software engineering intern, honing skills and learning in a collaborative environment. 
            Seeking new challenges to expand my knowledge and skills in front-end and back-end development for both professional use and passion projects.</p>
          </div>
        </div>
        <div className="text-center mt-8 w-full text-[#b7b6b6]">
            <a className="underline text-2xl" href="mailto:akeenlewis1@gmail.com">Email: akeenlewis1@gmail.com</a>
        </div>  
      </div>
    </main>
  )
}

export default indexPage 

export const Head = () => <title>Akeen Lewis</title>
