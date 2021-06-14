import PropTypes from 'prop-types';

// import imgS from '../../assets/main-background-.png';

const propsTypes = {
  img: PropTypes.objectOf(PropTypes.object),
};
const defaultProps = {
  img: PropTypes.null,
};

function Image(props) {
  const { img } = props;
  return (
    <div>
      <img src={img} alt='backgroun' />
    </div>
  );
}

Image.propTypes = propsTypes;
Image.defaultProps = defaultProps;

export default Image;
