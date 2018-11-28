import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th className="col-lg-8 text-left">Prestation</th>
                        <th>Durée</th>
                        <th>Tarif</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-left">Shampoing</td>
                        <td>30min</td>
                        <td>25€</td>
                    </tr>
                    <tr>
                        <td className="text-left">Coupe</td>
                        <td>30min</td>
                        <td>19€</td>
                    </tr>
                    <tr>
                        <td className="text-left">Couleur</td>
                        <td>60min</td>
                        <td>42€</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
