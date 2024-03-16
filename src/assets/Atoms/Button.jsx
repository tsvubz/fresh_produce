import PropTypes from "prop-types";

function Button(props) {
  const style = {
    backgroundColor: "#426B1F",
    color: "#ffffff",
    fontFamily: "Avenir, Arial, Helvetica, sans-serif",
    fontSize: "1rem",
    padding: "12px 24px",
    border: "1px solid transparent",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "border-color 0.25s",
  };

  return (
    <button className="basket-button" style={style}>
      {props.name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
