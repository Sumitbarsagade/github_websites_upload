const scroll = new LocomotiveScroll({
    el: document.querySelector('#main-container'),

    smooth: true
})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });










document.querySelectorAll(".product").forEach(function (elem) {
    
    var p = elem.getAttributeNode("img_video").value  
    console.log(p)

    console.log(document.querySelector(".img_video").children[0].src)

    elem.addEventListener("mousemove", function (dets) {



        gsap.to(document.querySelector(".img_video"), {
            opacity: 1,
             
        });

        if (p.includes("mp4")) {
            console.log("mp4") 

            document.querySelector(".img_video").children[1].src=`${p}`
         
            gsap.to(document.querySelector(".img_video").children[1], {
                opacity: 1,
                
            });

          
        }
        else {
            console.log("img")

            document.querySelector(".img_video").children[0].src = `${p}`
           
            gsap.to(document.querySelector(".img_video").children[0], {
                opacity: 1,
                 
            });
            

        }
        
    })

 

    

    elem.addEventListener("mouseleave", function (dets) {
              gsap.to(document.querySelector(".img_video"), {
                opacity: 0,
                

                 
              });
           
              gsap.to(document.querySelector(".img_video").children[1], {
                opacity: 0,
                // display: "none"
              });
              gsap.to(document.querySelector(".img_video").children[0], {
                opacity: 0,
                // display: "none" 
            });
           
        
           document.querySelector(".img_video").children[0].src = ""
        


              document.querySelector(".img_video").children[1].src = ""
        
    });
    
            
})







function function1() {

    let p = document.querySelector(".info_1").getAttribute("image")
    
     document.querySelector("#info-image").children[0].src=`${p}`
    
     gsap.to(document.querySelector(".info_1"), {
     
        color:"white"
     
     });
    
    
     gsap.to(document.querySelector(".info_2"), {
     
        color:"#504A45"
     
     });
    
     gsap.to(document.querySelector(".info_3"), {
     
        color:"#504A45"
     
    });
    


    document.querySelector(".text").innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings." 

    
    gsap.to(document.querySelector(".line"), {
     
        alignItems:"start"
     
    });



  
    
}

function function2() {

    let p = document.querySelector(".info_2").getAttribute("image")
    
    document.querySelector("#info-image").children[0].src=`${p}`

    document.querySelector(".text").innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need." 
    
   gsap.to(document.querySelector(".line"), {
     
       alignItems:"center"
    
   });
    
    
   gsap.to(document.querySelector(".info_2"), {
     
    color:"white"
 
 });

 gsap.to(document.querySelector(".info_1"), {
 
    color:"#504A45"
 
 });
 gsap.to(document.querySelector(".info_3"), {
 
    color:"#504A45"
 
});
   
  
    
    
}

function function3() {

    document.querySelector(".text").innerHTML = " We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience" 
    
    let p = document.querySelector(".info_3").getAttribute("image")
    
    document.querySelector("#info-image").children[0].src = `${p}`
    
    gsap.to(document.querySelector(".line"), {
      
        alignItems:"end"
     
    });
    
    gsap.to(document.querySelector(".info_3"), {
     
        color:"white"
     
     });
    
     gsap.to(document.querySelector(".info_1"), {
     
        color:"#504A45"
     
     });
     gsap.to(document.querySelector(".info_2"), {
     
        color:"#504A45"
     
    });
    
     
   
     
     
 }











