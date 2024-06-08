import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
const [nombre, setNombre] = useState('');
const [precio, setPrecio] = useState('');
const [cantidad, setCantidad] = useState('');
const navigate = useNavigate();

const handleSubmit = (event) => {
event.preventDefault();
axios.post('http://localhost:8000/api/productos/', { nombre, precio, cantidad })
    .then(response => {
    navigate('/');
    })
    .catch(error => {
    console.error("Hubo un error al crear el producto.", error);
    });
};

return (
<div>
    <h1>Crear Producto</h1>
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
    <button type="submit">Crear</button>
    </form>
</div>
);
};

export default CreateProduct;
