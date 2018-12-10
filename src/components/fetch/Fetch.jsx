import React from 'react';
import PropTypes from 'prop-types';

import Error from '../../pages/Error.page';
import Loader from '../loader/Loader';

export default class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPending: true,
      isSuccess: false,
      isError: false,
      response: null,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isPending: true, isError: false, isSuccess: false });
    this.props
      .req()
      .then((response) => this.setState({ isPending: false, isSuccess: true, response }))
      .catch((error) => this.setState({ isPending: false, isSuccess: false, isError: true, error }));
  }

  render() {
    const { renderSuccess, renderError, renderPending } = this.props;
    const { isSuccess, isError, isPending, response, error } = this.state;
    if (isSuccess) {
      return renderSuccess({ reponse: response });
    }
    if (isError) {
      return renderError(error);
    }
    if (isPending) {
      return renderPending();
    }
  }
}

Fetch.propTypes = {
  renderError: PropTypes.func,
  renderPending: PropTypes.func,
  renderSuccess: PropTypes.func.isRequired,
  req: PropTypes.func.isRequired // thenable function --> a promise
};

Fetch.defaultProps = {
  renderError: (error) => <Error error={error} />,
  renderPending: () => <Loader />
};
