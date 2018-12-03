import React from 'react';
import { Table, Button } from 'reactstrap';


export default class TableService extends React.Component {


    render() {
        let items = [];
        /* TODO: change this with Datas from base */
        if (this.props.name === "Homme") {
            items = [
                { prestation: 'Shampoing', durée: '30min', price: '25€', },
                { prestation: 'Couleur', durée: '60min', price: '35€', },
                { prestation: 'Coupe', durée: '20min', price: '19€', },
                { prestation: 'Shampoing', durée: '30min', price: '25€', },
                { prestation: 'Couleur', durée: '60min', price: '35€', },
                { prestation: 'Coupe', durée: '20min', price: '19€', },
                { prestation: 'Shampoing', durée: '30min', price: '25€', },
                { prestation: 'Couleur', durée: '60min', price: '35€', },
                { prestation: 'Coupe', durée: '20min', price: '19€', },
            ];
        } else if (this.props.name === "Femme") {
            items = [
                { prestation: 'Shampoing', durée: '30min', price: '25€', },
                { prestation: 'Brushing', durée: '60min', price: '35€', },
                { prestation: 'Bain relaxant', durée: '60min', price: '55€', },
                { prestation: 'Coupe', durée: '20min', price: '19€', },
                { prestation: 'Shampoing', durée: '30min', price: '25€', },
                { prestation: 'Coupe', durée: '20min', price: '19€', },
                { prestation: 'Shampoing', durée: '30min', price: '25€', },
                { prestation: 'Couleur', durée: '60min', price: '35€', },
                { prestation: 'Coupe', durée: '20min', price: '19€', },
            ];
        }
        return (
            <Table>
                <thead>
                    <tr>
                        <th className="col-lg-6 text-left">Prestation</th>
                        <th>Durée</th>
                        <th>Tarif</th>
                        <th>Réservation</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(presta => (
                        <tr>
                            <td>{presta.prestation}</td>
                            <td>{presta.durée}</td>
                            <td>{presta.price}</td>
                            <td><Button outline>Réserver</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}
