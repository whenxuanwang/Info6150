import React,{ useState }  from "react";

const CardItem = (itemProp) =>{
  const [hover, setHover] = useState(false)
  console.log(itemProp.itemProp);

  const jumpTo = (link)=>{
    window.location.href = link
  }
  return(
    <div className="card-item-container" onClick={()=>jumpTo(itemProp.itemProp.link)}>
      <div className="item-header">
        <h2>{itemProp.itemProp.title}</h2>
        <p>{itemProp.itemProp.skill}</p>
      </div>
      <div 
        className="card-content" 
        style={!hover?{background: `url('${itemProp.itemProp.img}')`, backgroundSize: '100% 100%'}:{backgroundColor: '#000'}} 
        onMouseEnter={()=>{setHover(true);console.log('enter');}}
        onMouseLeave={()=>{setHover(false);console.log('leave');}}
      >
        {
          hover?<div dangerouslySetInnerHTML={{__html:itemProp.itemProp.content}}></div>:''
        }
      </div>
    </div>
  )
}

export default CardItem