import './style.css'

const SkillItem = (props) => {
  return <div className="skillbar">
    <div className="skillBar-title" style={{ background: `linear-gradient(to right, ${props.data.color[0]} 0%, ${props.data.color[1] ? props.data.color[1] : props.color[0]} 100%)`, width: `${props.data.degree}%` }}>
      <span>{props.data.title}</span>
    </div>
    <div className="skillBar-percent">{props.data.degree}%</div>
  </div>
}

export default SkillItem
