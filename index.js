//javascript code start here

let movies=[
    {
        name:"falcon and the winter soldier",
        des:
          "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame , Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip",
        image:"images/slider 2.PNG"
    },
    {
        name:"loki",
        des:
          "After stealing the Tesseract during the events of Avengers: Endgame , an alternate version of Loki is brought to the mysterious Time Variance Authority , a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a 'time variant', or help fix the timeline and stop a greater threat. Loki ends up trapped in his own crime thriller, traveling through time.",
        image:"images/slider 1.PNG"
    },
    {
        name:"wanda vision",
        des:
          "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes. Schaeffer served as head writer for the series, which was directed by Matt Shakman.",
        image:"images/slider 3.PNG"
    },
    {
        name:"raya and the last dragon",
        des:
          "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good.",
        image:"images/slider 4.PNG"
    },
    {
        name:"luca",
        des:
          "Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface.",
        image:"images/slider 5.PNG"
    }
];

const carousel=document.querySelector('.carousel');
let sliders=[];

   //   Created by Aditya Sahu
   //   Contact me- aditya23sahu@gmail.com
  

let slideIndex=0;//track current slide

const createSlide=()=>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //create DOM elements
    let slide=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attaching all Elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    
    //setting up image
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
          30 * (sliders.length - 2)
        }px)`;
      }
    };

    for(let i=0;i<3;i++){
        createSlide();
    }

    setInterval(()=>{
        createSlide();
    },3000);

    //video cards

    const videoCards=[...document.querySelectorAll('.video-card')];

    videoCards.forEach(item=>{
        item.addEventListener('mouseover',()=>{
            let video =item.children[1];
            video.play();
        });
        item.addEventListener('mouseleave',()=>{
            let video=item.children[1];
            video.pause();
        });
    });

    //card sliders

    let cardContainers=[...document.querySelectorAll(".card-container")];
    let preBtns=[...document.querySelectorAll(".pre-btn")];
    let nxtBtns=[...document.querySelectorAll(".nxt-btn")];

    cardContainers.forEach((item,i)=>{
        let containerDimensions=item.getBoundingClientRect();
        let containerWidth=containerDimensions.width;

        nxtBtns[i].addEventListener("click",()=>{
            item.scrollLeft+=containerWidth-200;
        });

        preBtns[i].addEventListener("click",()=>{
            item.scrollLeft-=containerWidth+200;
        });
    });
//javascript code ends here
