import React from 'react'

function Table() {
    return (
        <div>
             
            <table style={{border:"2px solid black"}}>
                <tr>
                    <th>Types of Pizzas </th>
                    <th> Card Details </th>
                    <th>Total Amount </th>
                    <th>Status </th>
                </tr>
                <tr>
                    {/* <td>${data.quantity}</td>
                    <td>${data.card}</td>
                    <td>${data.total}</td>
                    <td>Ordered</td> */}
                     <th>Types of Pizzas </th>
                    <th> Card Details </th>
                    <th>Total Amount </th>
                    <th>Status </th>
                </tr>
            </table>
        </div>
    )
}

export default Table
