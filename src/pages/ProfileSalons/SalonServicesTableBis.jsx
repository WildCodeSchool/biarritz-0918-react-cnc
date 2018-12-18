import React from 'react';
import { Table, Button, Row, FormGroup, Label, Input } from 'reactstrap';

export default class TableService extends React.Component {
   render() {
      let items = [];
      /* TODO: change this with Datas from base */
      if (this.props.name === 'Homme') {
         items = [
            { prestation: 'Shampoing', durée: '30min', price: '25€' },
            { prestation: 'Couleur', durée: '60min', price: '35€' },
            { prestation: 'Coupe', durée: '20min', price: '19€' },
            { prestation: 'Shampoing', durée: '30min', price: '25€' },
            { prestation: 'Couleur', durée: '60min', price: '35€' },
            { prestation: 'Coupe', durée: '20min', price: '19€' },
            { prestation: 'Shampoing', durée: '30min', price: '25€' },
            { prestation: 'Couleur', durée: '60min', price: '35€' },
            { prestation: 'Coupe', durée: '20min', price: '19€' }
         ];
      } else if (this.props.name === 'Femme') {
         items = [
            { prestation: 'Shampoing', durée: '30min', price: '25€' },
            { prestation: 'Brushing', durée: '60min', price: '35€' },
            { prestation: 'Bain relaxant', durée: '60min', price: '55€' },
            { prestation: 'Coupe', durée: '20min', price: '19€' },
            { prestation: 'Shampoing', durée: '30min', price: '25€' },
            { prestation: 'Coupe', durée: '20min', price: '19€' },
            { prestation: 'Shampoing', durée: '30min', price: '25€' },
            { prestation: 'Couleur', durée: '60min', price: '35€' },
            { prestation: 'Coupe', durée: '20min', price: '19€' }
         ];
      }
      return (
         <Row form>
            <FormGroup>
               <Label for="presta">
                  <h2>Prestation :</h2>
               </Label>
               <Input type="select" name="presta" id="presta">
                  <option value="" disabled selected />
                  {items.map((presta, i) => (
                     <option key={i} value={presta.prestation}>
                        {presta.prestation} {presta.price}
                     </option>
                  ))}
               </Input>
            </FormGroup>
         </Row>
      );
   }
}
