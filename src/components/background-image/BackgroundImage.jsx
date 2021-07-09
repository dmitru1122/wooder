import PropTypes from 'prop-types';

// import backgrounLeft from '../../assets/main-background-left.png';
// import backgrounRight from '../../assets/main-background-right.png';

// import imgS from '../../assets/main-background-.png';

const propsTypes = {
  img: PropTypes.objectOf(PropTypes.object),
  // imgName: PropTypes.string,
};
const defaultProps = {
  img: PropTypes.null,
  // imgName: '',
};

function Image(props) {
  const { img } = props;
  // const { imgName } = props;
  // if (imgName === 'left') {
  //   return (
  //     <div>
  //       <img src={backgrounLeft} alt='backgroun' />
  //     </div>
  //   );
  // }
  // if (imgName === 'right') {
  //   return (
  //     <div>
  //       <img src={backgrounRight} alt='backgroun' />
  //     </div>
  //   );
  // }
  return (
    <div>
      {' '}
      <img src={img} alt='backgroun' />{' '}
    </div>
  );
}

Image.propTypes = propsTypes;
Image.defaultProps = defaultProps;

export default Image;
