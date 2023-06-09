import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(title, price))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Product Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Product Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;