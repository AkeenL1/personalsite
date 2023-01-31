import * as React from "react"
import "../styles/global.css"

const NavBar = ({link1,link2,link3,link4}) => {
    return (
        <nav className="flex uppercase justify-around align-center border-b-4 border-b-slate-700" >
            <ul className="flex flex-row space-x-8 ">
                <li className="border-b-2 h-fit border-[#513600]">{link1}</li>
                <li className="border-b-2 h-fit border-[#005100]">{link2}</li>
                <li className="border-b-2 h-fit border-[#510000]">{link3}</li>
                <li className="border-b-2 h-fit border-[#3B330F]">{link4}</li>
            </ul>
            <div className="pb-4">
                <h4 className="border-b-2 border-[#9b9a9a]">
                    Akeen K. Lewis
                </h4>
            </div>
        </nav>
    )
}

export default NavBar
