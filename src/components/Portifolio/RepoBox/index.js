import React from 'react';

import PropTypes from 'prop-types';

export default class RepoBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggled: false };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    const { toggled } = this.state;

    this.setState({ toggled: !toggled });
  }

  render() {
    const { info } = this.props;
    const { toggled } = this.state;

    const {
      title, techs, repoLink, image,
    } = info;

    return (
      <a
        onFocus={this.toggleHover}
        onMouseOver={this.toggleHover}
        onMouseOut={this.toggleHover}
        onBlur={this.toggleHover}
        className="  md:w-3/12 md:h-2/3 m-8"
        href={repoLink}
      >
        <div className="relative flex justify-center w-auto h-auto text-white text-center">
          <img className="w-4/6" src={image} alt="NoSQL" />

          <div className={`${!toggled ? '-top-full hidden' : 'top-0 block bg-black opacity-95'}
          w-full h-full absolute flex flex-col justify-center p-8
          transition-all ease-out duration-300`}
          >
            <h3 className="font-bold text-3xl">{title}</h3>
            <p className="uppercase text-xs font-light mt-4">{techs}</p>
          </div>

        </div>
      </a>
    );
  }
}

RepoBox.defaultProps = {
  info: {},
};

RepoBox.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    techs: PropTypes.string,
    repoLink: PropTypes.string,
    image: PropTypes.string,
  }),
};

// RepoBox.propTypes = {
//   info: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     altImg: PropTypes.string,
//   }),
// };
