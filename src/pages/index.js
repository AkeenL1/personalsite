import * as React from "react"
import "../styles/global.css"
import NavBar from "../components/navbar"

const indexPage = () => {
  return (
    <main className="flex justify-center items-center h-screen ">
      <div id="content" className="w-1/2 h-1/2">
        <div id="nav">
          <NavBar link1={"Blog"} link2={"LinkedIn"} link3={"Resume"} link4={"Ventures"}></NavBar>
        </div>
        <div id="text">
        </div>
      </div>
    </main>
  )
}

export default indexPage 

export const Head = () => <title>Home Page</title>
