import * as React from "react"
import "../styles/global.css"

const NavBar = ({link1,link2,link3,link4}) => {
    return (
        <nav className="h-fit border-b-4 text-xl" >
            <ul className="pl-20 pb-4 flex flex-row space-x-8">
                <li>{link1}</li>
                <li>{link2}</li>
                <li>{link3}</li>
                <li>{link4}</li>
            </ul>
        </nav>
    )
}

export default NavBar
