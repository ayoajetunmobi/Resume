import mypic from "../static/myphoto.png";
import backgroundArch from "../static/backgroundArch.png";

import Project from "./projects";
import Archive from "./archive";
import OGproject from "./OGproject"
import Skills from "./movingskills"
import { Indexblog } from "../blog/blogIndex";
import {NavLink} from "react-router-dom"
import  {OpenNav} from "../javascript"
import { useEffect } from "react";


export function meta({}) {
  return [
    { title: "Ajetunmobi Ayo's Resume/portfolio" },
    { name: "description", content:"I am a professional Full Stack web developer and an IT professional,i can help deliver a great product for your business or personal use" }, 
];

}


export default function Home() {
    useEffect(()=>{
        OpenNav()
    },[])

  return <>
        <div className="bluff">
           <img src={backgroundArch} alt="just a background" />
        </div>
        <NavLink className="backHome" to="#home">
            ↑
        </NavLink>
        <div className="Headercon">
            <section id="about" className="Headers">
                <div className="writeup" style={{"--seconds":"1s"}}>
                <p className="design1">↯</p>
                <p  className="design2">↝</p>
                    <h1> <span>◥ </span>HI, I am Ajet</h1>
                    <p>
                        I am a Software Engineer specializing in Web App Development,
                        with a bachelor's Degree in Computer Science, I can build robust and complex modern-day web
                        applications, optimize backend infrastructures, provide professional counsel, and more... 
                    </p>
                    <button>
                        <a href="https://www.ajetunmobayo.online/api/v1/download">
                            download cv ↗
                        </a>
                    </button>
                </div>
                <div className="wriimg" style={{"--seconds":"2s"}}>
                    <img src={mypic} alt="" />
                </div>
            </section>
        </div>
       
        <Project />
        <Archive />
        <Skills />
        <OGproject />
        <Indexblog />
      </>

}
