import PropTypes from "prop-types";

function Image({ src, alt, width, height, className }) {
  return <img src={src} alt={alt} width={width} height={height} className={className} />;
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

Image.defaultProps = {
  alt: "",
  width: "100%",
  height: "auto",
  className: "",
};

export default Image;
