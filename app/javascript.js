
export function OpenNav(){
    document.addEventListener("click",(e)=>{
        document.querySelector(".openNav").style.display="block"
        document.querySelector(".closeNav").style.display="none"
        document.querySelector(".linkscon").style.left = "100%"
        if(e.target==  document.querySelector(".openNav")){
            document.querySelector(".openNav").style.display="none"
            document.querySelector(".closeNav").style.display="block"
            document.querySelector(".linkscon").style.left = "-50%"
        }
    })

    window.onscroll=((e)=>{

        const nav =document.querySelector(".navcon")
        const up = document.querySelector(".backHome")
        if(nav !== null & up !== null){ 
            if(window.scrollY > 100){
                nav.classList.add("chborder")
            }else{
                nav.classList.remove("chborder")
            }

            if(window.scrollY > 650){
                up.style.display="block"
            }else{
                up.style.display="none"
            }
       }
    })
}

// export function IntersectionObsv(){
//     const headwritup = document.querySelector(".writeup");
//     const headimg = document.querySelector(".wriimg");
 
//     const priceCon = [...document.querySelectorAll(".priceDiv")]
//     const mylist=[headimg,headwritup,...priceCon]
  
//     const serving = new IntersectionObserver((ent)=>{ ent.forEach(e=>{
//         e.target.classList.toggle("slidein",e.isIntersecting);
//         //when you want to implement a logic when a particular element intersects
//         // if (e.isIntersecting){
//         // }
//         }),{threshold:[1,]}
//     })
//     mylist.forEach(e=>{serving.observe(e)})
// }
