import React from 'react';

const Contact = () => {



return(
    <>
    <div className='Contact-title'>
        <h2>
            Contáctenos
        </h2>
    </div>
    <div className='Contact-form'>
    <p>Para mayor información ponerse en contácto, le responderemos lo más pronto posible.</p>
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>

</>
);
        
}


export default Contact;
