import Product from "./Product.jsx";
function ProductTab() {
    let options = ["hi-tecg", "durable", "long-lasting"];
    return (
        <div className="ProductTab">
            <Product title="phone" price={4000}  />
            <Product title="laptop" price={999} />
            <Product title="tablet" price={299}  />
        </div>
    );
}

export default ProductTab;