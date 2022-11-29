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
    resume: "https://docs.google.com/document/d/1Jt1dHGp6Ln3IiQtwXxXr9qVHrb2kZIHqNCPB71O99sM/edit"
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
        title: "GT CS6250 Computer Networks",
        skill: ["Python", "Algorithm"],
        description: "Developed and implement the computer networks, including signaling and framing, error control, medium access, routing, congestion control, end-to-end transport, and network APIs.",
        img: img1,
        link: "https://github.com/whenxuanwang/OMSCS/tree/main/2022%20Summer/CS6250"
      }, {
        title: "GT CS6300 Software Development Process",
        skill: ["Java, Spring Boot, Android"],
        description: "Developed and understand the role of software processes in the development of software and will have experienced several types of processes from rigid to agile.",
        img: img2,
        link: "https://github.com/whenxuanwang/CS6300"
      }, {
        title: "GT CS6310 Software Architecture and Design ",
        skill: ["Java, UML, PHP, Spring Boot, Docker"],
        description: "Express the analysis and design of an application using UML. Specify and evaluate software architectures. Sprcify functional semantics of an application using OCL.",
        img: img3,
        link: "https://github.com/whenxuanwang/CS6310"
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
