import React from 'react'
import Button from './Field/Button/Button';
import Text from './Field/Text/Text';
import Delivery from './Field/Delivery/Delivery';
import Textarea from './Field/Textarea/Textarea';
function Form() {
    return (
        <div className={'content-form'}>
            <Text />
            <Delivery />
            <Textarea />
            <Button />
        </div>
    )
}

export default Form;
