var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
   
})
gsap.to("#nav",{
    backgroundColor: "#fff",
    duration: 0.4,
    height:"70px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        start:"top  -15%",
        end:"top -80%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -80%",
        scrub:2
    }
})
