import React from "react";
import PropTypes from "prop-types";

import Autocomplete from "../search/Autocomplete";
import DatePicker from "../search/DatePicker";
import { Button } from "reactstrap";

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };

    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
  }

  handleClickAutocomplete(userInput) {
    debugger;
  }

  handleClickSearchButton() {
    const { onSearch } = this.props;
    onSearch(this.state.userInput);
  }
  render() {
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
        <Button
          outline
          color="info"
          type="button"
          onClick={this.handleClickSearchButton}
        >
          Search
        </Button>
      </div>
    );
  }
}

InputSearch.PropTypes = {
  onSearch: PropTypes.func,
};

export default InputSearch;
