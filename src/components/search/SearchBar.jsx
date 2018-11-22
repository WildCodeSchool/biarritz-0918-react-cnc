import React from 'react'
import Autosuggest from 'react-autosuggest';

//import styles from './SearchBar.module.css';

const items = [
                    { id: 'yacine', name: 'yacine' },
                    { id: 'basil', name: 'basile' },
                    { id: 'vianney', name: 'vianney' },
                    { id: 'petit pd', name: 'petit pd' },
                    { id: 'enculé', name: 'enculé' },
                    { id: 'fils de pute', name: 'fils de pute' },
                    { id: 'riri', name: 'riri' },
                    { id: 'evian', name: 'evian' }
                ];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : items.filter(item =>
    item.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div id="aaaaaaaaaaaaaaaaaaaaaaaaaaaa" >
    <div id="vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv" >
        {suggestion.name} et {suggestion.id}
    </div>
  </div>
);

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'qui, quoi ?',
      value,
      onChange: this.onChange
    };

    const id = this.props.id;
    const styles = this.props.styles;

    // Finally, render it!
    return (
      <Autosuggest 
        id = { id } 
        theme = { styles }
        suggestions = { suggestions }
        onSuggestionsFetchRequested = { this.onSuggestionsFetchRequested }
        onSuggestionsClearRequested = { this.onSuggestionsClearRequested }
        getSuggestionValue = { getSuggestionValue }
        renderSuggestion = { renderSuggestion }
        inputProps = { inputProps }
      />
    );
  }
}
