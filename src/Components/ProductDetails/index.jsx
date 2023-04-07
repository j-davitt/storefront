import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'


const ProductDetails = () => {

  const { products } = useSelector(state => state);
  const { id } = useParams();

  const product = products.find(product => product._id === id);

  return (
    <>
     <h3>Here is the product page for {product.name}</h3>
    </>
  );
};

export default ProductDetails;
