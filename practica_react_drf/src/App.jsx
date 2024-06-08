import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProduct/CreateProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import DeleteProduct from './components/DeleteProduct/DeleteProduct'; // Importa el componente DeleteProduct

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/crear" element={<CreateProduct />} />
          <Route path="/actualizar/:id" element={<UpdateProduct />} />
          <Route path="/eliminar/:id" element={<DeleteProduct />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
