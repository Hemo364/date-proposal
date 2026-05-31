import React from 'react';

const Cars = ({ Make, Modele, Year, Price ,handeleDelete}) => {

    return (

        <div>

            <ul>
                <li>Make : {Make}</li>
                <li>Modele : {Modele}</li>
                <li>Year : {Year}</li>
                <li>Price : {Price}</li>
                <button onClick={handeleDelete}>delete car</button>
            </ul>



        </div>
    );
}

export default Cars;