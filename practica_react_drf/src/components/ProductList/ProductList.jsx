import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [productos, setProductos] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/productos/')
    .then(response => {
        setProductos(response.data);
    })
    .catch(error => {
        console.error("Hubo un error al obtener los productos.", error);
    });
}, []);

return (
    <div>
    <h1>Listado de Productos</h1>
    <ul>
        {productos.map(producto => {
        console.log("Key:", producto.id); // Verificar las keys en la consola
        return (
            <li key={producto.id}>
            <Link to={`/actualizar/${producto.id}`}>
                <div>
                <strong>{producto.nombre}</strong> - ${producto.precio} - Cantidad: {producto.cantidad}
                </div>
            </Link>
            </li>
        );
        })}
    </ul>
    </div>
);
};


export default ProductList;
