import data from '../../config'
import './style.css'

const ExperienceItem = (props) => {
  const handleLink = (e) => {
    window.open(e)
  }
  return <div className="experience-list-item" onClick={() => handleLink(props.data.link)}>
    <img src={`${props.data.img}`} alt="" />
    <h6>{props.data.title}</h6>
    <div className="experience-list-item-skill">
      Skills: {props.data.skill.map(e => <span className="">{e}</span>)}
    </div>
    <div className="experience-list-item-desc">{props.data.description}</div>
  </div>
}

const Experience = () => {
  const { about } = data
  return <div className="experience">
    <div className='experience-list'>
      {about.projects.map(e => <ExperienceItem data={e} />)}
    </div>
  </div>
}

export default Experience