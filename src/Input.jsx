import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <InputGroup>
                <Input placeholder="Salon de coiffure" />
            </InputGroup>
            <br />
            <InputGroup>
                <Input placeholder="Où ?" />
            </InputGroup>

            <br />
            <Button outline color="primary">Search</Button>
        </div>
    );
};

export default Example;
