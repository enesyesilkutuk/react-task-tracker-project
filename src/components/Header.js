import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, toggleShow, showAddTask }) => {

  
  return (
    <div className="header">
      <h1 style={{userSelect : "none"}}>{title}</h1>
      <Button 
      color={showAddTask ? "red" : "purple"}
      text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
      toggleShow = {toggleShow}
      />
    </div>
  )
}

// Header.defaultProps = {
//   title : "TASK TRACKER"
// }

// Header.propTypes = {
//   title : PropTypes.string.isRequired
// }

export default Header;

