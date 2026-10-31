import './ShowProduct.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function ProductDetails() {

    const [product, setProduct] = useState({});
    const apiUrl = "https://fakestoreapi.com/products";
    const params = useParams();
    
    useEffect(() => {
        fetch(`${apiUrl}/${params.id}`)
            .then( (res) => res.json())
            .then( (data) => setProduct(data))
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            {product.price && <h3>${product.price}</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;