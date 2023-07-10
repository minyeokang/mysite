import catImg from "./assets/imgs/768x724_lottie.png";
import ufoImg from "./assets/imgs/768x724_ufo.png";
import cyImg from "./assets/imgs/768x433_cy.jpg";
import bookImg from "./assets/imgs/768x521_book.png";
import popImg from "./assets/imgs/625x475_popup.png";
import albertImg from "./assets/imgs/487x463_albert.png";
import spaceImg from "./assets/imgs/space.png";
import fullSoulImg from "./assets/imgs/full-soul.png";
import soulImg from "./assets/imgs/soul.png";
import globelistImg from "./assets/imgs/globelist.png";
import frontendImg from "./assets/imgs/site-thumb.png";

export const websiteData = [
  {
    id: 0,
    title: "Frontend letters",
    skill: "GSAP",
    content: "Randomly place letters without overlapping. Each time it's clicked, re-locate them, and a circle spreads behind the letters from the clicked location. The letters need to be clicked in a specific order. Additionally, add a shaking animation to the letter that must be clicked",
    url: "https://minyeo.netlify.app/",
    imgUrl: frontendImg,
    isOpen: false,
  },
  {
    id: 1,
    title: "Recreating Cyworld",
    skill: "WebGL",
    content: "A popular social networking platform similar to Facebook in the early 2000s. Main feature is interaction with the miffy by using keyboard arrows for movement or by clicking and dragging.",
    url: "https://cy-world.netlify.app/",
    imgUrl: cyImg,
    isOpen: false,
  },
  {
    id: 2,
    title: "National dog's day",
    skill: "Lottie",
    content: "Based on what I saw on Naver during National Dog's Day, I was inspired by the idea and the visual presentation. I took the concept and brought it to life using my own code. I implemented animal movements based on the click event location, utilizing Lottie animations.",
    url: "https://lottie-animal-walking.netlify.app/",
    imgUrl: catImg,
    isOpen: false,
  },
  {
    id: 3,
    title: "Search books",
    skill: "API",
    content: "With Kakao Book API, users can search information about books, including plot summaries and author details. Using React and GSAP, I created an interactive and engaging user interface.",
    url: "https://book-review-kakao.netlify.app/",
    imgUrl: bookImg,
    isOpen: false,
  },
  {
    id: 4,
    title: "Mobile pop up",
    skill: "Slick",
    content: "Bottom banner pop-up with a slick slider ensures that the images displayed within the slider maintain their proportions and appear visually balanced.",
    url: "https://bt-pop-up.netlify.app/",
    imgUrl: popImg,
    isOpen: false,
  },
  {
    id: 5,
    title: "Jumping ball",
    skill: "GSAP",
    content: "Every movement of this ball is meticulously crafted using GSAP, When clicked, the ball jumps while rotating, all while being constrained within the boundaries of the box. this project sparked my interest in the field. It made me realize that the true difference between a GIF and coding lies in user interaction.",
    url: "https://albert-jumping.netlify.app/",
    imgUrl: albertImg,
    isOpen: false,
  },
  {
    id: 6,
    title: "Quiz with aliens",
    skill: "GSAP",
    content: "A small quiz game where players type their answers into an input field. If the answer is incorrect, a UFO snatches aliens away. This game provides an excellent opportunity for beginners to study JavaScript and GSAP,",
    url: "https://ufo-gsap.netlify.app/",
    imgUrl: ufoImg,
    isOpen: false,
  },
  {
    id: 7,
    title: "Space Magazine",
    skill: "React",
    content: "This is the renewed version of an actual magazine. I designed the entire website. This project represents my first venture into React. By implementing features like adding books to the cart and creating a favorites list, my interest in React grew even more. The ability to dynamically manage and interact with content through React sparked my curiosity and enthusiasm for this powerful JavaScript library",
    url: "https://minyeokang.github.io/space/",
    imgUrl: spaceImg,
    isOpen: false,
  },
  {
    id: 8,
    title: "Full page scroll",
    skill: "fullPage",
    content: "This is a full-page scroll version of an introduction website for the movie Soul. The website provides a seamless scrolling experience where users can explore different sections as they navigate through the story and themes of the movie.",
    url: "https://minyeokang.github.io/fullpage_soul/",
    imgUrl: fullSoulImg,
    isOpen: false,
  },
  {
    id: 9,
    title: "Movie Soul",
    skill: "Responsive",
    content: "My very first responsive website project that I built from scratch. I took on the challenge of designing and developing the entire website to ensure it adapts seamlessly to different screen sizes and devices.",
    url: "https://movie-soul.netlify.app/",
    imgUrl: soulImg,
    isOpen: false,
  },
  {
    id: 10,
    title: "Globelist",
    skill: "HTML, CSS",
    content: "This static website represents one of my best works in terms of creating a fully functional and content-rich website. Despite being static, the website showcases the high quality of the content and the meticulous attention to detail that went into its creation.",
    url: "https://globelist.netlify.app/",
    imgUrl: globelistImg,
    isOpen: false,
  },
];