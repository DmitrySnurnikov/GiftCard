import React from 'react'
import Button from './Field/Button/Button';
import Text from './Field/Text/Text';
function Form({giftcard}) {
    return (
        <div className={'content-form'}>
            <Text fields={giftcard.fields}/>
            <Button button={giftcard.button} qty={giftcard.qty}/>
        </div>
    )
}

export default Form;
