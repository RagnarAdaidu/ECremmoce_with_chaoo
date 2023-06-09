import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productApi";
import { addToCart } from "../features/cartSlice";

const Home = () => {
  const { data, error, isLoading} = useGetAllProductsQuery()
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return ( 
    <div className="home-container">
      {isLoading ? <p>Loading...</p> :
       error ? <p>An Error occurred..</p> :
       <>
        <h2>New Arrivals</h2>
        <div className="products">
          {data?.map( product =>( 
          <div key={product.id} className="product">
            <h3>{product.name} </h3>
            <img 
              src={product.image} 
              alt={product.name} 
            />
            <div className="details">
              <span>{product.desc} </span>
              <span className="price">${product.price} </span>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div> ))}
        </div>
       </>
      }
    </div>
   );
}
 
export default Home;