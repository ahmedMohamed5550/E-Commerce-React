import Product from './Product';  
import {useState , useEffect } from 'react';

function ProductList() {

    const [products,setProducts] = useState([]);
    const apiUrl = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch(apiUrl)
            .then( (res) => res.json())
            .then( (data) => setProducts(data))
    }, []);

    return (
        <div>
            <h2 className="text-center p-3">Our Product List</h2>
            <div className="container">
                <div className="row">
                    {products.map( (product) => {
                        return(
                            <div className="col-3">
                                <Product key={product.id} product={product}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductList;