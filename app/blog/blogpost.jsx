import { useState,useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {  NavLink  } from "react-router"


export async function  loader({params}) {
    const postId = await params.postName
    return  {postId}
}

export default function Blog(data){
    const [loading,setLoading]=useState(true)
    const [postdata,setPostdata]=useState("")
    async function fetchdata(){
            const response = await fetch(`https://www.ajetunmobayo.online/api/v1/blog/${data.loaderData.postId}`,  {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const realdata= await response.json()
            setPostdata(realdata.data)
            setLoading(false)
        }
    useEffect(()=>{
       fetchdata()
    },[])
    return(     
      <div className='Blogdiv'>
            <NavLink style={{"fontSize":"2rem"}}  to="/#blog"> ←</NavLink> 
          <br /><br />
          {loading ? <h1> loading ... </h1> : null}
          <ReactMarkdown>{ String(postdata)}</ReactMarkdown>
          {data.loaderData.postId == "Network Address Translation" ?<iframe width="400" height="200" src="https://www.youtube.com/embed/P4BP1OP0NQU?si=Ae9WMUTO2D2itJtP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : null}
      </div>
    )
}