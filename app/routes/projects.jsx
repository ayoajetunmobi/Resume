import backImg from "../static/expectImg.png"
import check from "../static/check.png"
import chat from "../static/chat.png"
import alarm from "../static/alarm-lock.png"
import positive from "../static/positive-review.png"




export default function Project(){
        return(
            <div id="services" className="projectCon">
                <section className="proImage">
                    <img src={backImg} alt="" />
                </section>

                <section className="prowriteup">
                    <span> ▣ FACTS ABOUT ME</span>
                    <h1>
                        WHAT TO EXPECT FROM MY SERVICES
                    </h1>
                    <div className="expwriteup" style={{"--seconds":"1s"}}>
                        <img src={check} alt="clean and optimized code" />
                        <section className="expwriteupSec">
                            <h1> Clean and Optimzed Code</h1>
                            <p> I deliver clean, readable and optimized code ensuring that our code works efficiently on various platforms.</p>
                        </section>

                    </div>
                    <div className="expwriteup" style={{"--seconds":"2s"}}>
                        <img src={chat} alt="Constant communicatopn" />
                        <section className="expwriteupSec">
                            <h1>Constant Communication</h1>
                            <p> I constantly communicate with our client throughout the development phase of the application. </p>
                        </section>

                    </div>
                    <div className="expwriteup" style={{"--seconds":"3s"}}>
                        <img src={alarm} alt="ontime delivery" />
                        <section className="expwriteupSec">
                            <h1> Beating Deadline</h1>
                            <p> Beating deadline is one thing I prioritize, so be sure to get your job just in time.</p>
                        </section>

                    </div>
                    <div className="expwriteup" style={{"--seconds":"4s"}}>
                        <img src={positive} alt="clean and optimized code" />
                        <section className="expwriteupSec">
                            <h1> Unlimited Review </h1>
                            <p> My client satisfaction is my uttmost priority, I would rework on project even after delivery to make sure all client requirements are met.</p>
                        </section>

                    </div>
                </section>
            </div>
        )
}