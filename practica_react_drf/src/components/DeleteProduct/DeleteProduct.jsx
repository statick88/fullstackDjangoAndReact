
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteProduct = () => {
const navigate = useNavigate();
const { id } = useParams(); // Obtener el parámetro 'id' desde la URL

const handleDelete = () => {
axios.delete(`http://localhost:8000/api/productos/${id}/`)
    .then(response => {
    console.log('Producto eliminado:', response.data);
    navigate('/'); // Navegar de vuelta a la página principal después de eliminar
    })
    .catch(error => {
    console.error('Hubo un error al eliminar el producto:', error);
    });
};

return (
<div>
    <h2>Eliminar Producto</h2>
    <p>¿Estás seguro que deseas eliminar este producto?</p>
    <button onClick={handleDelete}>Eliminar</button>
</div>
);
};

export default DeleteProduct;
