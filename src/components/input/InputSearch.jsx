import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Autocomplete from '../search/Autocomplete';
import DatePicker from '../search/DatePicker';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      city: [],
      isPending: false,
      isEror: false
    };

    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleClickAutocomplete = this.handleClickAutocomplete.bind(this);
  }

  componentDidMount() {
    this.setState({ isPending: true });
    let tabCities = [];
    axios
      .get(`http://127.0.0.1:8000/api/cities`, {
        headers: { Accept: 'application/json' }
      })
      .then((response) => {
        response.data.map((city) => {
          tabCities.push(city.name);
        });
        this.setState({
          city: response.data,
          isPending: false
        });
      })
      .catch(() => this.setState({ isError: true }));
  }

  handleClickAutocomplete(userInput) {
    this.setState({ userInput });
  }

  handleClickSearchButton() {
    // const { onSearch } = this.props;
    // onSearch(this.state.userInput);
  }

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <Autocomplete suggestions={[]} placeholder="Ville" onClick={this.handleClickAutocomplete} />
        {userInput ? (
          <Link to={`/salons/search/${userInput}`}>
            <Button color="info" outline>
              Search
            </Button>
          </Link>
        ) : null}
      </div>
    );
  }
}

// // InputSearch.propTypes = {
// //   onSearch: PropTypes.func
// // };

// InputSearch.defaultProps = {
//   onSearch: userInput => {}
// };

export default InputSearch;
