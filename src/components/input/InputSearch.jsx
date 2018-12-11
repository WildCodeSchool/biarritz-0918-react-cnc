import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import Autocomplete from "../search/Autocomplete";
import DatePicker from "../search/DatePicker";

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };

    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleClickAutocomplete = this.handleClickAutocomplete.bind(this);
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
        <Autocomplete
          suggestions={[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
          ]}
          placeholder="Ville"
          onClick={this.handleClickAutocomplete}
        />
        {userInput ? (
          <Link to={`/salons/search?filter=${userInput}`}>
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
