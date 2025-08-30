import aws from "../static/AWS.png"
import kubernetes from "../static/kubernetes.png"
import download from "../static/download.png"
import linux from "../static/linux.png"
import react from "../static/react.png"
import ansible from "../static/ansible.png"
import postgres from "../static/postgres.png"
import python from "../static/python.png"
import docker from "../static/docker.png"
import javascript from "../static/javascript.png"


export default function Skills(){
    return(
        <div className="divSlider"> 
            <section className="elementCon">
            <img style={{"--item":0}} className="element" src={javascript} alt=" i build with javascript" />
            <img style={{"--item":1}}  className="element"  src={react} alt=" i build with react" />
            <img style={{"--item":2}}  className="element"  src={python} alt=" i build with python" />
            <img style={{"--item":3}}  className="element"  src={download} alt=" i build with django" />
            <img style={{"--item":4}}  className="element"  src={linux} alt=" i build with linux" />
            <img style={{"--item":5}}  className="element"  src={aws} alt=" i build with aws" />
            <img style={{"--item":6}}  className="element"  src={docker} alt=" i build with docker" />
            <img style={{"--item":7}}  className="element"  src={kubernetes} alt=" i build with kubernetes" />
            <img style={{"--item":8}}  className="element"  src={ansible} alt=" i build with ansible" />
            <img style={{"--item":9}}  className="element"  src={postgres} alt=" i build with postgres" />
            </section>
           
        </div>
    )
}