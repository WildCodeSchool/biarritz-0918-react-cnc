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
                <Input placeholder="Où ?" />
                <InputGroupAddon addonType="append"><Button color="primary">I'm a button</Button></InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default Example;
