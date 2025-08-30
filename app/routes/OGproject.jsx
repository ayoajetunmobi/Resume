import inventory from "../static/inventory.jpg"
import ecomerce from "../static/ecomerce.jpg"
import message from "../static/messaging.jpg"
import payroll from "../static/payroll.jpg"
import dashbord from "../static/dashboards.jpg"
import learning from "../static/learning.jpg"
import { NavLink } from "react-router"
import { useEffect ,useState, useRef} from "react"


export default function OGproject(){
    const [errors,setErrors]=useState(false)
    const myinp = useRef()
    const [submit, setSubmitted]= useState(false)
    const [load, setLoading]= useState(false)
    const [datas, setDatas]= useState({
        "full_name":"none",
        "email_address":"none",
        "project_describe":"none",
         "contact":"09000000000"

    })

    function Form_Handle(e){
        e.preventDefault()
        const regex_match_emails =/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
        let dataval=myinp.current.value;
        let datachk2 = regex_match_emails.test(dataval);
        if(!datachk2){
            setErrors(true)
        }else{
            setErrors(false)
            setLoading(true)
            setDatas(prevData=>  { return {...prevData,email_address:myinp.current.value} }) 
            setSubmitted(true)
        }
    }
    if(submit == true){
        get_data()
    }

    function get_data(){
         setSubmitted(false)
         setLoading(false)
       fetch("https://www.ajetunmobayo.online/api/v1",{
             method: "POST",
             headers: {
             "Content-Type": "application/json"
          },
             body:JSON.stringify(datas)
             
        }).then( response =>{
             if(response.ok){
                myinp.current.value=""
              }else{
                setErrors(true)
              }
        })
    }
      
    return(
        <main className="OGproject">
            <h1> MY PROJECTS </h1>
            <p> All projects can be found on my github repository ↓ </p>
                <div>
                    <div className="projects">
                        <div className="projectcon">
                            <img src={inventory} alt="first project" />
                            <h2>INVENTORY APP 🚌</h2>
                            <h4>This app automates and manages the order and delivery of goods. It can automate the detection, alerting, and reordering of almost finished products in stock. Additionally, it enhances the efficient recording of sales and defective stocks, providing a summary of available stock and sales in a user-friendly dashboard.
                            </h4>  
                        </div>
                        
                        <div className="projectcon">
                            <img src={message} alt="second project" />
                            <h2> INSTANT MESSAGING 👩‍👩‍👦‍👦</h2>
                            <h4>This app can be used for in-house meetings, where everyone can join a particular meeting via a meeting ID and can message simultaneously. It utilizes web sockets and Django channel technologies.</h4>
                            <div className="project describe"></div>
                        </div>  
                        <div className="projectcon">
                            <img src={ecomerce} alt="third project" />
                            <h2>E-commerce 👔</h2>
                            <h4>A simple E-commerce website that allows the owner to post, delete, and update products, arrange where products appear in the store, accept payment, etc. </h4>
                            <div className="project describe"></div>
                        </div>  <div className="projectcon">
                            <img src={learning} alt="fourth project" />
                            <h2>LMS 💻</h2>
                            <h4>A web app created to provide computer-based tests, help students practice past questions, print student's results, and display learning materials to students. This project was hosted on-premises. </h4>
                            <div className="project describe"></div>
                        </div>  
                        <div className="projectcon">
                            <img src={dashbord} alt="fifth project" />
                            <h2>INTERACTIVE DASHBOARDS 📊</h2>
                            <h4>Creation of Interactive dashboards using Python dash which is then deployed and integrated into your application through iframes. Creation of Dashboards using javascript ploty.js while utilizing APIs to get your data.</h4>
                            <div className="project describe"></div>
                        </div>  
                        <div className="projectcon">
                            <img src={payroll} alt="sixth project" />
                            <h2>PAYROLL APP 📋</h2>
                            <h4>This app manages the users in an organization, records their check-in and checkout time, calculates bonuses and deductions for every user, and mails it to them at month's end.</h4>
                            <div className="project describe"></div>
                        </div>
                    </div>     
                </div>
            

                <section className="emailSubscribe">
                    <div className="sub">
                        <p>SUBSCRIBE FOR EMAIL NOTIFICATION</p>
                        <span> get the latest from my recent projects and blog post </span>
                    </div>
                    <div className="subInput">
                        <form action="" method="POST">
                            {load? <h1>loading</h1>: null}
                            {submit ?<h1>Submitted Successfully</h1>: null } 
                            {errors ? <span className="errorForm">enter input correctly</span> : null}
                            <input type="text" ref={myinp}  placeholder="example@gmail.com"/>
                            <input onClick={(e)=>Form_Handle(e)} type="submit" value="SUBSCRIBE" />
                        </form>
                    </div>
                </section>

                <section id="pricing" className="pricing">
                    <h1 className="pricingTiltle">OUR PRICING</h1>
                    <h2>Pricing & Packages</h2>
                    <main className="pricecon">
                        <section className="priceDiv" style={{"--seconds":"1s"}}>
                            <h1> BASIC PLAN </h1>
                            <section className="currency">
                              <span>$</span>
                              <h1>700</h1>
                            </section>
                            <main className="priceMainCon">
                                <p> ▹ 1 week deadline </p>
                                <p> ▹ 3 static pages </p>
                                <p> ▹  source code </p>
                                <p> ▹  constant communication </p>
                                <p> ▹  10 review after deployment </p>
                                <p> ▹  deployment</p>
                            </main>
                            <NavLink  to="form">
                                 <button className="priceButton">CONTACT NOW</button>
                            </NavLink>
                        </section>
                        {/*  */}
                        <section className="priceDiv" style={{"--seconds":"2s"}}>
                            <h1> STANDARD PLAN </h1>
                            <section className="currency">
                              <span>$</span>
                              <h1>1500</h1>
                            </section>
                            <main className="priceMainCon">
                                <p> ▹ 2 weeks deadline </p>
                                <p> ▹  10 pages can be dynamic </p>
                                <p> ▹  source code </p>
                                <p> ▹  constant communication </p>
                                <p> ▹  unlimited review after deployment </p>
                                <p> ▹  deployment</p>
                                <p> ▹  database integration </p>
                                <p> ▹  3 months infastructure management </p>
                            </main>
                            <NavLink  to="form">
                                 <button className="priceButton">CONTACT NOW</button>
                            </NavLink>
                        </section>
                        {/*  */}
                        <section className="priceDiv"  style={{"--seconds":"3s"}}>
                            <h1> PREMIUM PLAN </h1>
                            <section className="currency">
                              <span>$</span>
                              <h1>3000</h1>
                            </section>
                            <main className="priceMainCon">
                                <p> ▹ 1 month deadline </p>
                                <p> ▹  10 pages can be dynamic </p>
                                <p> ▹  source code </p>
                                <p> ▹  constant communication </p>
                                <p> ▹  unlimited review after deployment </p>
                                <p> ▹  deployment</p>
                                <p> ▹  database integration </p>
                                <p> ▹  3 months infastructure management </p>
                                <p> ▹  containerization with docker </p>
                                <p> ▹  CI/CD with GitHub Actions </p>
                                <p> ▹  Kubernetes for high availabilty </p>
                            </main>
                            <NavLink  to="form">
                                 <button className="priceButton">CONTACT NOW</button>
                            </NavLink>
                        </section>
                        {/*  */}
                        <section className="priceDiv"  style={{"--seconds":"4s"}}>
                            <h1> CUSTOM SERVICE </h1>
                            <section className="currency">
                              <span>$</span>
                              <h1>---</h1>
                            </section>
                            <main className="priceMainCon">
                                <p> ▹ My project is unique and does not fit into any of the plans </p>
                                <p> ▹ Consultancy </p>
                            </main>
                             <NavLink to="form">
                                 <button className="priceButton">CONTACT NOW</button>
                            </NavLink>
                        </section>
                    </main>    
                </section>
        </main>
    )
}