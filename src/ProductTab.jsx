import Product from "./Product.jsx";
function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    return (
        <div className="ProductTab">
            <Product title="phone" price={3000} features={options} />
            <Product title="laptop" price={999} features={options} />
            <Product title="tablet" price={299} features={options} />
        </div>
    );
}

export default ProductTab;