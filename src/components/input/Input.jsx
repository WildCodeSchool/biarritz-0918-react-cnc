import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';

import SearchBar from '../search/SearchBar.jsx';
import stylesLocation from '../search/SearchBarLocation.module.css';
import stylesSalon from '../search/SearchBarSalon.module.css';
import stylesInput from './Input.module.css';

const Example = (props) => {
    return (
        <div>
            <InputGroup>
                <Input />
                <Input />
                <InputGroupAddon addonType="append"><Button color="primary">Search</Button></InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
                 <SearchBar id="salon" styles={stylesSalon} />
                <SearchBar id="location" styles={stylesLocation} /> 
                <InputGroupAddon id={stylesInput.inputGroupAppend} addonType="append"><Button color="primary">Search</Button></InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default Example;
