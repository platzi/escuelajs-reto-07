import React from 'react';
import '../styles/components/Checkout.styl';


const Checkout = () => {

    return(
        <>
        <div className='container'>
  <div className='window'>
        <div className='credit-info'>
          <div className='credit-info-content'>
            <table className='half-input-table'>
              <tr><td>Please select your card: </td><td><div className='dropdown' id='card-dropdown'><div className='dropdown-btn' id='current-card'>Visa</div>
                <div className='dropdown-select'>
                <ul>
                  <li>Master Card</li>
                  <li>American Express</li>
                  </ul></div>
                </div>
               </td></tr>
            </table>
            <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' className='credit-card-image' id='credit-card-image'></img>
            Card Number
            <input className='input-field'></input>
            Card Holder
            <input className='input-field'></input>
            <table className='half-input-table'>
              <tr>
                <td> Expires
                  <input className='input-field'></input>
                </td>
                <td>CVC
                  <input className='input-field'></input>
                </td>
              </tr>
            </table>
            <button className='pay-btn'>Checkout</button>

          </div>

        </div>
      </div>
</div>
</>
    );
};

export default Checkout;