import success from "../static/success.png"
import delivery from "../static/delivery.png"
import clean from "../static/clean.png"
import satisfied from "../static/satisfied.png"


export default function Archive(){
    return(
          <div className="archievedDiv">
            <section className="archieveIcons">
                <img src={success} alt="100 success stories" />
                <h1>120 +</h1>
                <p> SUCCESS STORIES </p>
            </section>
            <section  className="archieveIcons">
                <img src={delivery} alt="delivery rate is perfect" />
                <h1>100 %</h1>
                <p> DELIVERY RATE </p>
            </section>
            <section  className="archieveIcons">
                <img src={clean} alt="clean code assured" />
                <h1>100 %</h1>
                <p> CODE OPTIMIZATION</p>
            </section>
             <section  className="archieveIcons">
                <img src={satisfied} alt="clients satisfied" />
                <h1>99%</h1>
                <p> CLIENT SATISFACTION</p>
            </section>
          
        </div>
    )
}