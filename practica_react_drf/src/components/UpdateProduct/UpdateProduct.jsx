import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
const { id } = useParams();
const [nombre, setNombre] = useState('');
const [precio, setPrecio] = useState('');
const [cantidad, setCantidad] = useState('');
const navigate = useNavigate();

useEffect(() => {
axios.get(`http://localhost:8000/api/productos/${id}/`)
    .then(response => {
    const product = response.data;
    setNombre(product.nombre);
    setPrecio(product.precio);
    setCantidad(product.cantidad);
    })
    .catch(error => {
    console.error("Hubo un error al obtener el producto.", error);
    });
}, [id]);

const handleSubmit = (event) => {
event.preventDefault();
axios.put(`http://localhost:8000/api/productos/${id}/`, { nombre, precio, cantidad })
    .then(response => {
    navigate('/');
    })
    .catch(error => {
    console.error("Hubo un error al actualizar el producto.", error);
    });
};

return (
<div>
    <h1>Actualizar Producto</h1>
    <form onSubmit={handleSubmit}>
    <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </div>
    <div>
        <label>Precio:</label>
        <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
    </div>
    <div>
        <label>Cantidad:</label>
        <input type="text" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
    </div>
    <button type="submit">Actualizar</button>
    </form>
</div>
);
};

export default UpdateProduct;
