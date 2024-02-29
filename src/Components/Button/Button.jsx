import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ value, setClicked }) => {
  const handleClick = (e) => {
    setClicked(e.target.innerText);
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("clickedButton");
    });
    e.target.classList.add("clickedButton");
  };

  return (
    <button className={value} onClick={handleClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
