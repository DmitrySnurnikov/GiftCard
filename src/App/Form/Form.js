import React from 'react'
import Button from './Field/Button/Button';
import Text from './Field/Text/Text';
    function Form({fields,button}) {
        console.log("gif",button)
        return (
            <form>
            <Text fields={fields}/>
            <Button button={button}/>
            </form>
        )
    }
    
    export default Form
    