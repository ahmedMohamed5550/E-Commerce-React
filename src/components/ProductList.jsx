import Product from './Product';

function ProductList() {
    return (
        <div>
            <h2 className="text-center p-3">Our Product List</h2>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;