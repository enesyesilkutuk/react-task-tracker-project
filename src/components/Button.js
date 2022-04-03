const Button = ({ color, text, toggleShow, showAddTask }) => {

 return (
    <div>
      <button className="btn" style={{backgroundColor : color}}
      onClick={toggleShow}>{text}</button>
    </div>
  )
}

export default Button;
