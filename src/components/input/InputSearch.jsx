import React from 'react';
import {
    InputGroup,
} from 'reactstrap';

import Autocomplete from '../search/Autocomplete';

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
            ]} placeholder="Salon" />
            <button type="button">Search</button>
        </div>
    );
};

export default InputSearch;
