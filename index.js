// ===============================
// WELCOME TYPEWRITER EFFECT
// ===============================


const message =
"Hey Dear ❤️\n\n" +
"A beautiful little journey of our memories\n" +
"is waiting for you... ✨";


let index = 0;


function typeWriter(){

    if(index < message.length){

        let char = message.charAt(index);


        if(char === "\n"){

            document.getElementById("typing").innerHTML += "<br>";

        }
        else{

            document.getElementById("typing").innerHTML += char;

        }


        index++;

        setTimeout(typeWriter,60);

    }

}


typeWriter();





// ===============================
// ELEMENTS
// ===============================


const startBtn = document.getElementById("startBtn");

const welcome = document.getElementById("welcome");

const envelopeSection = document.getElementById("envelopeSection");

const envelope = document.getElementById("envelope");

const continueBtn = document.getElementById("continueBtn");

const timelineSection = document.getElementById("timelineSection");


const gallerySection = document.getElementById("gallerySection");


const storySection = document.getElementById("storySection");

const proposalSection = document.getElementById("proposalSection");

const music = document.getElementById("bgMusic");
music.volume = 0.25;





// ===============================
// START STORY
// ===============================


startBtn.addEventListener("click",()=>{


    music.play()
    .catch(()=>{});


    welcome.classList.add("fadeOut");


    setTimeout(()=>{


        welcome.style.display="none";


        envelopeSection.classList.add("active");

        envelopeSection.classList.add("fadeIn");


    },800);


});





// ===============================
// OPEN ENVELOPE
// ===============================


envelope.addEventListener("click",()=>{


    envelope.classList.add("open");


});






// ===============================
// ENVELOPE TO TIMELINE
// ===============================


continueBtn.addEventListener("click",()=>{


    envelopeSection.classList.remove("active");


    envelopeSection.style.display="none";


    timelineSection.classList.add("active");



});






// ===============================
// TIMELINE TO MEMORY SLIDESHOW
// ===============================


let galleryOpened = false;


timelineSection.addEventListener("scroll",()=>{


    if(
        timelineSection.scrollTop + timelineSection.clientHeight >= 
        timelineSection.scrollHeight - 20
        &&
        !galleryOpened
    ){


        galleryOpened = true;


        setTimeout(()=>{


            timelineSection.style.display="none";


            gallerySection.classList.add("active");
            startMemorySlider();


        },1000);


    }


});







// ===============================
// MEMORY SLIDESHOW
// ===============================


const memories = [


{

image:"images/mine2.jpeg",

text:" A beautiful moment that we have taken our first photo on 6th June,2025 ❤️"

},


{

image:"images/mine1.jpeg",

text:"Your smile is one of my favourite memories 💕"

},


{

image:"images/mine3.jpeg",

text:"Every moment with you becomes unforgettable ✨"

},


{

image:"images/mine4.jpeg",

text:"Thank you for filling my life with happiness ❤️"

},


{

image:"images/mine5.jpeg",

text:"More memories to create together forever 💖"

}


];





let memoryIndex = 0;
let slideTimer;



function startMemorySlider(){


    showMemory();


    slideTimer=setInterval(()=>{


    memoryIndex++;


    if(memoryIndex >= memories.length){


        clearInterval(slideTimer);


        gallerySection.style.display="none";


        storySection.classList.add("active");


        return;


    }


    showMemory();


},4000);





}
function showMemory(){


    const image = document.getElementById("memoryImage");

    const text = document.getElementById("memoryText");



    image.style.opacity=0;

    text.style.opacity=0;



    setTimeout(()=>{


        image.src = memories[memoryIndex].image;


        text.innerHTML = memories[memoryIndex].text;



        image.style.opacity=1;

        text.style.opacity=1;



    },800);



}

// ===============================
// STORY CARD REVEAL ANIMATION
// ===============================


const storyCards = document.querySelectorAll(".story-card");



const storyObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{
    threshold:0.2
});





storyCards.forEach(card=>{


    storyObserver.observe(card);


});

// ===============================
// STORY TO PROPOSAL TRANSITION
// ===============================


// ===============================
// STORY TO PROPOSAL TRANSITION
// ===============================


let proposalOpened = false;



storySection.addEventListener("scroll",()=>{


    if(
        storySection.scrollTop + storySection.clientHeight >= 
        storySection.scrollHeight - 20
        &&
        !proposalOpened
    ){


        proposalOpened = true;



        setTimeout(()=>{


            storySection.style.display="none";


            proposalSection.classList.add("active");


            proposalSection.classList.add("fadeIn");


        },3000);


    }


});

// ===============================
// YES BUTTON ACTION
// ===============================
// ===============================
// YES BUTTON ACTION
// ===============================

// YES BUTTON TEST

// YES BUTTON ACTION
const yesBtn = document.getElementById("yesBtn");
const thankYouProposal = document.getElementById("thankYouProposal");

yesBtn.onclick = function(){

    thankYouProposal.style.display = "block";
    thankYouProposal.style.opacity = "1";



};

