import React from 'react';

import PropTypes from 'prop-types';

export default class TechBox extends React.Component {
  render() {
    const { info } = this.props;

    const {
      title, image, altImg, description,
    } = info;

    return (
      <div className="tech-box">
        <img className="tech-image" src={image} alt={altImg} />
        { title ? (<h3 className="tech-title">{title}</h3>) : ''}

        <p className="tech-description">
          {description}
        </p>
      </div>
    );
  }
}

TechBox.defaultProps = {
  info: {},
};

TechBox.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    altImg: PropTypes.string,
  }),
};
