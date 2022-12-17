import avatar from './assets/images/person.jpg'
import img1 from './assets/tupian/project/Screenshot1.png'
import img2 from './assets/tupian/project/Screenshot2.png'
import img3 from './assets/tupian/project/Screenshot3.png'
import img4 from './assets/tupian/project/Screenshot4.png'
import img5 from './assets/tupian/project/Screenshot5.png'

const data = {
  concat: {
    github: "https://github.com/whenxuanwang",
    linkedin: "https://www.linkedin.com/in/wenxuan-chris-wang-15a100238",
    resume: "https://drive.google.com/file/d/1gSMXouzgC76lsrIsGzWWzZXFt2zFWqRX/view?usp=sharing"
  },
  home: {
    title: "Welcome to my  portfolio",
    desc: "Bika, bika, bika~~Chu~~"
  },
  about: {
    avatar: avatar,
    name: "Chris Wang",
    title: "Master of Science in Information Systems in Northeastern University [Sep 2022 - Dec 2023]",
    titleSub: "Master of Science in Computer Science in Georgia Institute of Technology [Jan 2022 - May 2024]",
    description:" Stay Hungry Stay Foolish",
    descriptionSub: "I like play the Pokemon, and I also like coding. I am looking for 2023 Summer software engineering internship opportunities  now! Feel free to Reach out me.",
    skills: [{
      title: "Python",
      degree: 95,
      color: ["#FF0066", "#FF00CC"]
    }, {
      title: "Java",
      degree: 80,
      color: ["#fbc2eb", "#a6c1ee"]
    }, {
      title: "Javascript",
      degree: 60,
      color: ["#a1c4fd", "#c2e9fb"]
    }, {
      title: "Mysql",
      degree: 50,
      color: ["#84fab0", "#8fd3f4"]
    }, {
      title: "C++",
      degree: 45,
      color: ["#e0c3fc", "#8ec5fc"]
    }, {
      title: "CSS",
      degree: 40,
      color: ["#2af598", "#009efd"]
    }],
    otherSkills: ["Cello", "Bel canto"],
    projects: [
      {
        title: "Portfolio Project",
        skill: ["HTML, CSS, Javascript and React"],
        description: "Developed and Implemented the Protfolo project using HTML, CSS, Javascript and React to creat my portfolio which hiring managers and future employers will see.",
        img: img1,
        link: "https://github.com/whenxuanwang/Info6150/tree/main/Assignment9"
      }, {
        title: "Covin-19 track",
        skill: ["HTML, CSS, Javascript, React and Bootstrap"],
        description: "Designed and Implemented the Covin-19 track project using HTML, CSS, Javascript, React and Bootstrap to track the main countries covin-19 development and practce the API fench.",
        img: img2,
        link: "https://github.com/whenxuanwang/Info6150/tree/main/Assignment11"
      }, {
        title: "INFO6150 Course ",
        skill: ["HTML, CSS, Javascript, React and Bootstrap"],
        description: "Develped and Implemented 'Web Design/User Experien' course using HTML, CSS, Javascript, React and Bootstrap to creact 11 Amazing Projects from beginer to master ",
        img: img3,
        link: "https://github.com/whenxuanwang/Info6150"
      }, {
        title: "NEU INFO 6150 Project To-do List ",
        skill: ["HTML, CSS, Javascript"],
        description: "Developed the To-do List note sample using html, css and Javascript.",
        img: img4,
        link: "https://codepen.io/wenxuanwang/pen/gOzzRVz"
      }, {
        title: "NEU INfO 6150 Project Guessing Number",
        skill: ["HTML, CSS, Javascript"],
        description: "Developed and implemented famous Guessing Number game using html, css and Javascript.",
        img: img5,
        link: "https://github.com/whenxuanwang/Info6150/tree/main/Assignment7"
      }
    ]
  }
}

export default data
