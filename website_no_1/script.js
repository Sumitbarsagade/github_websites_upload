const scroll = new LocomotiveScroll({
    el: document.querySelector('#main-container'),

    smooth: true
});

var timeout;
function bulgeCircle() {
    //define default scale value
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout)  
        
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        xprev = dets.clientX;
        yprev = dets.clientY;

        movecursor(xscale, yscale);

        timeout = setInterval(function()  {
            document.querySelector('#moving_circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
        }, 100);




    })

}

bulgeCircle();
function movecursor(xscale,yscale) {



    window.addEventListener("mousemove", function (dets){
        document.querySelector('#moving_circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

movecursor();
 


function linkclick() {

    
}

linkclick()

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#navbar",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
         ease:Expo.easeInOut
    })
    .to(".bounding_ele", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger:.2
    })
    .from(".links_section",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay:-1,
         ease:Expo.easeInOut
    })
}


function moveimage1() {
    
    var elem = document.querySelectorAll("#product_1")[0]
    console.log(elem)
    var rotate = 0;
    var diffrot = 0;
     
    elem.addEventListener("mouseleave", function (dets) {
        
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            
            ease: Power3,
            
        })
        gsap.to(elem.querySelector(".product_name"), {
            x: '-6',
            opacity:.8,
            ease: Power3,
          
        })
        

    })

    elem.addEventListener("mousemove", function (dets) {
         
        var diff = dets.clientY - elem.getBoundingClientRect().top ;
        diffrot = rotate- dets.clientX;
        rotate = dets.clientX;
         
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
          
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        })

        gsap.to(elem.querySelector(".product_name"), {
            x: '20',
            opacity:.6,
            ease: Power3,
           transform: 'translateX(-20)',   
        })




    })

}
function moveimage2() {
    
    var elem1 = document.querySelectorAll("#product_2")[0]
    
    var rotate = 0;
    var diffrot = 0;

    elem1.addEventListener("mouseleave", function (dets) {
        
        gsap.to(elem1.querySelector("img"), {
            opacity: 0,
            ease: Power1,
            
            
        })

        gsap.to(elem1.querySelector(".product_name"), {
            x: '-6',
            opacity:.8,
            ease: Power3,
          
        })
    })

    elem1.addEventListener("mousemove", function (dets) {
        
        
        var diff = dets.clientY - elem1.getBoundingClientRect().top ;
        
    
        diffrot =  dets.clientX-rotate;  
        rotate = dets.clientX;
        gsap.to(elem1.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff + 100,
            left: dets.clientX,
            
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });

        gsap.to(elem1.querySelector(".product_name"), {
            x: '20',
            opacity:.6,
            ease: Power3,
           transform: 'translateX(-20)',   
        })
    })

}


function moveimage3() {
    
    var elem = document.querySelectorAll("#product_3")[0]

    var rotate = 0;
    var diffrot = 0;
     
    elem.addEventListener("mouseleave", function (dets) {
        
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            
            
        })

        gsap.to(elem.querySelector(".product_name"), {
            x: '-6',
            opacity:.8,
            ease: Power3,
          
        })
    })

    elem.addEventListener("mousemove", function (dets) {
        
        
        var diff = dets.clientY - elem.getBoundingClientRect().top ;
        
        
        diffrot =  dets.clientX-rotate;  
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff+ 250,
            left: dets.clientX,
          

            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });

        gsap.to(elem.querySelector(".product_name"), {
            x: '20',
            opacity:.6,
            ease: Power3,
           transform: 'translateX(-20)',   
        })
    })

}

moveimage1()
moveimage2()
moveimage3()

// document.querySelectorAll(".product").forEach(function (elem) {  
//     var rotate = 0;
//     var diffrot = 0;
//      console.log(elem)
//     elem.addEventListener("mouseleave", function (dets) {
        
//         gsap.to(elem.querySelector("img"), {
//             opacity: 0,
//             ease: Power3,
            
//         })
//     })


//     elem.addEventListener("mousemove", function (dets) {
        
        
//         var diff = dets.clientY - elem.getBoundingClientRect().top ;
        
//         console.log(diff)
//         diffrot =  dets.clientX-rotate;  
//         rotate = dets.clientX;
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power3,
//             top: diff,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//         });
//     })

// })




firstPageAnim()




document.querySelectorAll(".links").forEach(function (element) {
   
    element.addEventListener("mouseleave", function (dets) {
        
        gsap.to(element.querySelector(".links_name"), {
            textDecoration:"none",
            ease: Power1,           
        })
        
        gsap.to(element.querySelector(".arrow"), {
            transform: "rotate(-30deg)",
            ease: Power3,
          
          
          });
        
    })
   


    
    

    element.addEventListener("mouseenter", function (dets) {
      
      gsap.to(element.querySelector(".links_name"), {
          textDecoration: "4px underline white",
          
        easeInOut: Power3,
      
      
      });
        
        
      gsap.to(element.querySelector(".arrow"), {
        transform: "rotate(0deg)",
        ease: Power3,
      
      
      });
        
        
    });
  });