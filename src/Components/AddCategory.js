import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const handleImputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((categorias) => [inputValue,...categorias]);
            setInputValue('');
        }

        // setCategories( (categorias)=> [...categorias,inputValue]); 
    }
    //es importante saber, que el form ya es agrupador de por si, lo importante es tener un agrupador de elementos puede ser un div tambien 
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleImputChange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}