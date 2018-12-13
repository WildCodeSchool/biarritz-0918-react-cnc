import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as AuthApi from '../../Auth.api.js';
import Autocomplete from '../search/Autocomplete';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      idInput: '',
      city: [],
      isPending: false,
      isEror: false
    };

    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleClickAutocomplete = this.handleClickAutocomplete.bind(this);
  }

  componentDidMount() {
    this.setState({ isPending: true });
    axios
      .get(AuthApi.SERVER + `/api/cities`, {
        headers: { Accept: 'application/json' }
      })
      .then((response) => {
        let cities = [];
        response.data.map((city) => {
          cities.push(city.id + ' ' + city.name + ' ' + city.cp);
        });
        this.setState({ city: cities, isPending: false });
      })
      .catch(() => this.setState({ isError: true }));
  }

  handleClickAutocomplete(userInput, idInput) {
    this.setState({ userInput, idInput });
  }

  handleClickSearchButton() {
    // const { onSearch } = this.props;
    // onSearch(this.state.userInput);
  }

  render() {
    const { userInput, idInput } = this.state;

    return (
      <div>
        <Autocomplete suggestions={this.state.city} placeholder="Ville" onClick={this.handleClickAutocomplete} />
        {userInput ? (
          <Link to={`/salons/search/${idInput}-${userInput}`}>
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
