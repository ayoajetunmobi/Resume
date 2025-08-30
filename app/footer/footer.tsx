import {NavLink} from "react-router-dom"
import youtube from  "../static/youtube.png"
import github from  "../static/github.png"
import whatsapp from  "../static/whatsapp.png"

export default function Footer(){
    return(
        <div id="footer" className="Footer">
            <NavLink className="footerImg" to="https://www.youtube.com/@savytechdiscussions">
                <img src={youtube} alt="my youtube channel" />
            </NavLink>
             <NavLink  className="footerImg" to="https://www.github.com/ayoajetunmobi">
                <img src={github} alt="my github project" />
            </NavLink>
             <NavLink  className="footerImg" to="https://wa.me/09079681347">
                <img src={whatsapp} alt="my whatsapp details" />
            </NavLink>
        </div>
    )
}
