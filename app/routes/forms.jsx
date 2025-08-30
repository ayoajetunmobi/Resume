import { useRef, useState } from "react"
import {  NavLink  } from "react-router"

export default function Myform(){
  const myinput = useRef()
  const myinput1 = useRef()
  const myinput2 = useRef()
  const myinput3= useRef()
  const [errors,setErrors]=useState(false)
  const [current, setCurrent]= useState(1)
  const [submits, setSubmitteds]= useState(false)
  const [question,setQuestions]= useState("WHAT IS YOUR NAME")
  const [load, setLoading]= useState(false)
  const [data, setData]= useState({
    "full_name":"none",
    "email_address":"none",
    "project_describe":"none",
     "contact":"09000000000"
  })

   function Form_Handle(e){
      e.preventDefault()
      const regex_match_no_symbol = /[^a-zA-z0-9]/;
      const regex_match_emails =/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
      const match_number =/[0-9]+/;
      //const match_number =/^\d+$/   // string of number

      if(current == 1){
          let dataval=myinput.current.value;
          let datachk2 = match_number.test(dataval);
          if(datachk2){
              setErrors(true)
          }else{
            setErrors(false)
            setData(prevData=>({...prevData,
                  full_name:myinput.current.value})) 
            setCurrent(prev=> prev+1)
            setQuestions("please enter your mail")
          }
      
      }
        
      if(current == 2){
          let dataval=myinput1.current.value;
          let datachk1= regex_match_no_symbol.test(dataval);
          let datachk2 = regex_match_emails.test(dataval);
          if(!datachk1 & !datachk2){
              setErrors(true)
          }else{
            setErrors(false)
            setData(prevData=>({ ...prevData,email_address:myinput1.current.value})) 
            setCurrent(prev=> prev+1)
            setQuestions("please describe your product")
          }
      }
      if(current == 3){
          setData(prevData=>({ ...prevData,project_describe:myinput2.current.value})) 
          setCurrent(prev=> prev+1)
          setQuestions("please enter your contact")
      }
      if(current == 4){
          let dataval=myinput3.current.value;
          let datachk1= match_number.test(dataval)
          if(!datachk1){
            setErrors(true)
          }else{
           setData(prevData=>({ ...prevData,contact:myinput3.current.value})) 
           setQuestions("")
           setLoading(true)
           setSubmitteds(true)
          }
      }
} 

   if(submits == true){
        get_sub()
    }

    function get_sub(){
       setSubmitteds(false)
       fetch("https://www.ajetunmobayo.online/api/v1",{
             method: "POST",
             headers: {
             "Content-Type": "application/json"
          },
             body:JSON.stringify(data)        
        }).then( response =>{
             if(response.ok){
                  setLoading(true)
              }
        })
    }
      
    return(
        <div className="formCon">
          <NavLink to="/">
            <span className="formclose"> ← </span>
          </NavLink>
            
         {load ?
          <h1 className="formTitle">
            SUCCESSFULY SUBMITTED
          </h1>:
          <h1 className="formTitle">
            HIRE REQUEST
          </h1> } 
          {load?<h1>loading</h1>: null}
          <h1 className="numberInit"> {current}/4</h1>
          <h1 className="FormHint">{question}</h1>


          {errors ? <span className="errorForm">enter input correctly</span> : null} 

            {!load ? <form action=""  className="formIt">  
                {current== 1?<input ref={myinput} type="text" placeholder="john mark"/>: null }     
                {current == 2? <input ref={myinput1} type="text" placeholder="jane@gmail.com"/>: null}

                { current ==3 ? <input ref={myinput2} type="text" placeholder="product you want to build"/>: null}

                {current ==4 ? <input ref={myinput3} type="text" placeholder="contact"/> : null}
                <input type="submit" onClick={(e)=>Form_Handle(e)} name="" id="" />
            </form>
          :null}
          
        </div>
    )
}