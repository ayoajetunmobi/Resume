import {NavLink} from "react-router-dom"
import logo from "../static/newlogo.png"
import navfont from "../static/navfont.png"
import { useEffect, useRef } from "react"


export default function Navlinkss(){
    return(<>
      <nav className="navcon">
        <section className="navlogo">
            <img className="logo" src={logo} alt="" />
        </section>
        
        <section className="linkscon">
            <NavLink className="links firstkid"  to="#home">Home</NavLink>
            <NavLink className="links"  to="/#about">About</NavLink>
            <NavLink className="links"  to="#footer">Contact</NavLink> 
            <NavLink className="links"  to="/#pricing"> Pricing </NavLink> 
            <NavLink className="links"  to="/#blog">Blog</NavLink> 
        </section>
       
        <section className="navMob">
           <img className="openNav" src={navfont} alt="nav link" />
            <p className="closeNav">⨉</p>
        </section>
        </nav>
    </>)
}