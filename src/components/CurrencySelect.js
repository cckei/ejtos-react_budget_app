import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedcurrency, setSelectedcurrency] = useState('');

    const currencyChange = (val) => {
        console.log('selectedcurrency: ', selectedcurrency);
        console.log(val);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
        setSelectedcurrency(val);
    }

    return (
        <div>
            <select style={{backgroundColor: 'green', color: 'white'}} value={currency} className="custom-select" id="currecySelect01" onChange={(event) => currencyChange(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option style={{backgroundColor: 'green', color: 'white'}} value="$" name="Dollar">$ Dollar</option>
                <option style={{backgroundColor: 'green', color: 'white'}} value="£" name="Pound">£ Pound</option>
                <option style={{backgroundColor: 'green', color: 'white'}} value="€" name="Euro">€ Euro</option>
                <option style={{backgroundColor: 'green', color: 'white'}} value="₹" name="Ruppee">₹ Ruppee</option>
            </select>

            {/* <br />
            currency: {currency}<br />
            selectedcurrency: {selectedcurrency}<br /> */}
        </div>
    );
};

export default CurrencySelect;