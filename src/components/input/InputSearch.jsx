import React from 'react';

import Autocomplete from '../search/Autocomplete';
import DatePicker from '../search/DatePicker';
import { Button } from 'reactstrap';

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
                id="datePicker"
            />
            <Button outline color="info" type="button">Search</Button>
        </div>
    );
};

export default InputSearch;
