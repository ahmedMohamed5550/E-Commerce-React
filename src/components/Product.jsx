import { Link } from 'react-router';
import './Product.css';

function Product(props) {
    const { product } = props;

    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <Link
                    className="btn-solid theme-primary"
                    to={`/products/${product.id}`}
                    state={{ product }} // to handle location state in ProductDetails component
                >
                    Show details
                </Link>
            </div>
        </div>
    );
}

export default Product;