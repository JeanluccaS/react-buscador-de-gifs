import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'
// import PropTypes from 'prop-types'

const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['Pandas'])

    /*  const handleAdd =()=>{
 
         // setCategories( [...categories,'Hisotrias de Fantasmas']); //una forma de agregar elementos a un arreglo, seria recibiendolos 1 x 1 con el operador spred, y a su vez, recordar que setState, pisa el valor inicial, asique habria que indicar que se va a seguir utilizando un arreglo.
          setCategories( (categorias)=> [...categorias,'Hisotrias de Fantasmas']); 
 
         
     } */



    //para mandar elemntos de un componente a otro, los puedo pasar como propiedades
    //add category es el componente que se utiliza para colocar el input de busqueda y tomar las diferentes peticiones de gifs
    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={setCategories} />
            {/* <AddCategory /> */}
            <hr />
            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                        key={category}
                        category={category} />
                    ))
                }
            </ol>
        </>
    )
}

/* GiftExpertApp.propTypes = {

} */

export default GiftExpertApp
