import React from "react";
import CardItem from "./CardItem";
import './experience.css'
import img1 from '../../assets/tupian/project/Screenshot1.png'
import img2 from '../../assets/tupian/project/Screenshot2.png'
import img3 from '../../assets/tupian/project/Screenshot3.png'
import img4 from '../../assets/tupian/project/Screenshot4.png'
import img5 from '../../assets/tupian/project/Screenshot5.png'

const ExperienceComponent = ()=>{
  const itemInfo = [{
    title: 'GT CS6250',
    skill: '',
    content: `<h4 style="text-align: left">Skill</h4><ul style="text-align: left"><li>SDN Firewall</li>
    <li>BGP Hijacking</li>
    <li>Spanning Tree Protocol</li></ul>`,
    img: img1,
    link: 'https://github.com/whenxuanwang/OMSCS/tree/main/2022%20Summer/CS6250'
  },{
    title:'GT CS6300',
    skill: '',
    content: `<h4 style="text-align: left">Skill</h4><ul style="text-align: left"><li>Android</li>
    <li>Java</li>
    </ul>`,
    img: img2,
    link: 'https://github.com/whenxuanwang/CS6300'
  },{
    title: 'GT CS6310',
    skill: '',
    content: `<h4 style="text-align: left">Skill</h4><ul style="text-align: left"><li>Java</li>
    <li>Spring boot</li>
    </ul>`,
   img: img3,
   link: 'https://github.com/whenxuanwang/CS6310'
  },{
    title: 'TO-DO-LIST',
    skill: '',
    content: `<h4 style="text-align: left">Skill</h4><ul style="text-align: left"><li>HTML</li>
    <li>CSS</li><li>Javascript</li>
    </ul>`,
   img: img4,
   link: 'https://github.com/whenxuanwang/CS6310'
  },{
    title: 'Guessing Numbers',
    skill: '',
    content: `<h4 style="text-align: left">Skill</h4><ul style="text-align: left"><li>HTML</li>
    <li>CSS</li><li>Javascript</li>
    </ul>`,
   img: img5,
   link: 'https://github.com/whenxuanwang/Info6150/tree/main/Assignment7'
  }]
  return (
  <>
  <h1 id="card">Project</h1>
    <div className="card-container" >
      {
        itemInfo.map(item=>{
          return <CardItem itemProp={item} key={item.title} />
        })
      }
    </div>
    </>
  )
}

export default ExperienceComponent