import React from 'react';

import Autocomplete from '../search/Autocomplete';
import DatePicker from '../search/DatePicker';

const InputSearch = (props) => {
return (
        <div>
            <Autocomplete suggestions={[
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
            ]} placeholder="Ville" />
            <DatePicker 
                id = "datePicker"
            />
            <button type="button">Search</button>
        </div>
    );
};

export default InputSearch;
