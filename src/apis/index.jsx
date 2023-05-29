import burger from "../assets/burger.jpg";
import games from "../assets/games.jpg";
import nav_logo from "../assets/image/band-logos.png";
import black_image from "../assets/image/latest-bw2.jpeg";
import color_image from "../assets/image/latest-color.jpg";
import personal from "../assets/potfolio.jpg";
import sellbd from "../assets/sellbd.jpg";


//hearder

export const navbar = {
  nav_logo: nav_logo,
  links: [
    {
      id: 1,
      name: "home",
      path: "/",
      my: 0,
    },
    {
      id: 2,
      name: "about",
      path: "/about",
      my: 3,
    },
    
    {
      id: 4,
      name: "showcase",
      path: "/showcase",
      my: 3,
    },
    
  ],
};

//hero section
export const hero = {
  first: "Hi, My Name is",
  second: "shipon islam",
  third: "I build website for client.",
  fouth:
    "I'm a full-stack web developer who specializes in building web things. I'm focused on building UI design and development together. I make 100% error-free website for client satisfaction which make me awesome.",
  color_image,
};

//about section
export const about = {
  color_image,
  black_image,
  about_info: {
    paragraph: [
      {
        id: 1,
        para: "Hello! My name is Shipon islam. I'm a full-stack web developer who loves to create amazing user experiences. I specialize in using the latest technologies like JavaScript, React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase to build robus and scalable web applications from scratch.",
      },
      {
        id: 2,
        para: "I've been working in the tech industry for several years, and I have a lot of experience building web applications. I use React.js and Next.js to create responsive and dynamic user interfaces that are easy to use. I also use Tailwind CSS to make your website look beautiful and professional.",
      },
      {
        id: 3,
        para: "On the server-side, I use Node.js and Express.js to create fast and reliable applications. And when it comes to data storage, I use MongoDB and Firebase to keep everything organized and efficient.",
      },
      {
        id: 4,
        para: `I keep up with the latest trends and technologies in web development so that I can build the best websites possible. I always try to make sure that my work exceeds client expectations, and I want to make sure that you have an amazing experience working with me.
        So, if you need a web developer who can help you create an amazing website, let's talk!`,
      },
    ],
    technologies1: [
      "JavaScript (ES6+)",
      "node js",
      "firebase",
      "mongo db",
      "tailwind css",
    ],
    technologies2: [
      "React js",
      "Next js",
      "express js",
      "redux toolkit",
      "bootstrap 5",
    ],
    choose1: [
      "2year+ experience",
      "clean code",
      "100% error free",
      "requirement analysis",
      "100% working dedication",
    ],
    choose2: [
      "readable code",
      "hand code",

      "unlimited revision",
      "before live preview",
      "client satisfaction",
    ],
  },
};



//potfolio section
export const potfolio = [
  {
    id: 1,
    name: "fullstack ecomarce",
    image: sellbd,
    technology: [
      "javascript (ES6+)",
      "react js",
      "node js",
      "mongo Db",
      "tailwind css",
    ],
  },
  {
    id: 2,
    name: "potfolio",
    image: personal,
    technology: ["javascript (ES6+)", "react js", "tailwind css", "type js"]
  },
  {
    id: 3,
    name: "burger lover",
    image: burger,
    technology: ["javascript (ES6+)", "react js", "tailwind css", "figma"],
  },
  {
    id: 4,
    name: "jumping game",
    image: games,
    technology: ["html 5", "css 3", "javascript (ES6+)"],
  },
];


