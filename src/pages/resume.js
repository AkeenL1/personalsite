import { faAtom } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import "../styles/global.css"
import ResumeParticlesBG4 from "../components/resumeparticles"
import NavBar from "../components/navbar"

const resume = () => {
    return (
        <main className="flex flex-col justify-center items-center bg-[#091620] text-[#F7FFF7] sm:h-screen h-full ">
            <ResumeParticlesBG4 className="z-0"/>
            <div id="resumeContainer" className="z-10 flex flex-col justify-between w-full sm:w-1/2 h-full border-4 bg-[#333A48] border-[#66999B] p-5 rounded-md opacity-90">
                <NavBar />
                <div id="headers" className="border-b-2 border-[#D49A49] rounded-full text-sm lg:text-xl mb-8">
                    <div id="topHeader" className="flex justify-between ml-8 mr-8">
                        <h1 className="pt-3">Akeen Lewis</h1>
                        <a href={`/AkeenLewisResume.pdf`} download><button className="bg-gray-700 hover:bg-gray-900 rounded-md p-2">Download Pdf</button></a>
                    </div>
                    <div id="bottomheader" className="flex justify-evenly">
                        <h2>akeenlewis1@gmail.com <FontAwesomeIcon icon={faAtom} className="text-[#D49A49]"/> Orlando,FL</h2>
                    </div>
                </div>

                <div id="workExperience" className="mb-8">
                    <div id="experienceHeader" className="mt-2 text-xl">
                        <h2 className="">Experience</h2>
                        <div className="border-b-2 border-[#D49A49] rounded-full"></div>
                    </div>
                    <div id="experienceBody">
                        <div id="experienceBodyHeader" className="flex justify-between text-[0.7em] md:text-lg">
                            <h3>Sightplan / SmartRent</h3>
                            <h3>Apr 2022 - Present</h3>
                        </div>
                        <div id="experienceBodySubHeader" className="flex justify-between">
                            <h4 className="text-sm"><i>Backend Software Engineer Intern</i></h4>
                            <h4 className="text-sm"><i>Orlando, FL</i></h4>
                        </div>
                        <div id="experienceBodyList">
                            <ul className="text-sm list-disc">
                                <li>Demonstrated technical proficiency by effectively resolving software bugs and improving system functionality.</li>
                                <li>Assisted with increased application security through the parameterization of N1QL queries.</li>
                                <li>Upgraded Java Couchbase SDK to ensure compatibility with current system architecture and technology standards.</li>
                                <li>Assisted in the development and implementation of push notifications.</li>
                                <li>Increased the functionality and customer success team's experience of the admin panel through targeted enhancements and modifications.</li>
                            </ul>
                        </div>
                    </div>
                </div> 

                <div id="education" className="mb-8">
                    <div id="educationHeader" className="text-xl">
                        <h2>Education</h2>
                        <div className="border-b-2 border-[#D49A49] rounded-full"></div>
                    </div>
                    <div id="educationBody">
                        <div id="educationBodyHeader" className="flex justify-between text-[0.7em] md:text-lg">
                            <h3>University of Central Florida</h3>
                            <h3>Expected Graduation: December,2023</h3>  
                        </div>
                    </div>
                    <div id="educationBodySubHeader" className="flex justify-between">
                        <h4 className="text-sm"><i>BS, Computer Science</i></h4>
                        <h4 className="text-sm"><i>Orlando, FL</i></h4>
                    </div>
                    <div id="educationBodyList">
                        <ul className="text-sm list-disc">
                            <li>GPA: 3.4/4.0</li>
                            <li>
                                Relevant Coursework:
                                <ul className="list-disc ml-4">
                                    <li>Security in Computing, Computer Logic & Organization, Computer Science 1, Computer Science 2,
                                        Object Oriented Programming, Systems Software, Database Systems.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="skills" className="mb-8">
                    <div id="skillsHeader" className="text-xl">
                        <h2>Skills</h2>
                        <div className="border-b-2 border-[#D49A49] rounded-full"></div>
                    </div>
                    <div id="skillsBody" className="p-b-4">
                        <ul className="list-disc text-[0.73em] lg:text-sm ">
                            <li>HTML and CSS, including experience with Tailwind CSS framework</li>
                            <li>Knowledge of Javascript, including ReactJS and Typescript for building dynamic and interactive user interfaces</li>
                            <li>Experience with GatsbyJS</li>
                            <li>Java,Spring and Spring Boot for developing robust and efficient applications</li>
                            <li>Docker for containerizing applications.</li>
                            <li>Experienced in Ruby and Ruby on Rails for building web applications</li>
                        </ul>
                    </div>
                </div>
            </div>
   
        </main>
    )
}

export default resume

export const Head = () => <title>Resume</title>