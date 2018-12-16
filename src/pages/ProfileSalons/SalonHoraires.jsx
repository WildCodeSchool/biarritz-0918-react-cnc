import React from "react";
import { Table } from "reactstrap";

export default class Example extends React.Component {
   render() {
      return (
         <Table>
            <tbody>
               <tr>
                  <td>Lundi</td>
                  <td>09:00</td>
                  <td>18:00</td>
               </tr>
               <tr>
                  <td>Mardi</td>
                  <td>09:00</td>
                  <td>18:00</td>
               </tr>
               <tr>
                  <td>Mercredi</td>
                  <td>09:00</td>
                  <td>18:00</td>
               </tr>
               <tr>
                  <td>Jeudi</td>
                  <td>09:00</td>
                  <td>18:00</td>
               </tr>
               <tr>
                  <td>Vendredi</td>
                  <td>09:00</td>
                  <td>18:00</td>
               </tr>
               <tr>
                  <td>Samedi</td>
                  <td>09:00</td>
                  <td>18:00</td>
               </tr>
               <tr>
                  <td>Dimanche</td>
                  <td colSpan="2">Fermé</td>
               </tr>
            </tbody>
         </Table>
      );
   }
}
