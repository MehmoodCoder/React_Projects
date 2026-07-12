import { useEffect, useState } from "react";
import "./Styles.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisable(true);
    }
  }, [products]);

  function handleLoadMore() {
    if (!loading && !disable) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  return (
    <div className="load-more">
      <header className="hero">
        <div>
          <h1>Browse Products</h1>
          <p>Responsive product grid with interactive details and smooth load-more behavior.</p>
        </div>
        <div className="hero-stats">
          <span>{products.length} loaded</span>
          <span>{disable ? "All available products loaded" : "More products available"}</span>
        </div>
      </header>

      <div className="product-container">
        {products.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`product ${selectedProduct?.id === item.id ? "active" : ""}`}
            onClick={() => setSelectedProduct(item)}
          >
            <div className="image-wrap">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product-info">
              <h2>{item.title}</h2>
              <p className="category">{item.category}</p>
              <div className="product-meta">
                <span>${item.price}</span>
                <span>⭐ {item.rating}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="footer-row">
        <button
          className="load-button"
          disabled={disable || loading}
          onClick={handleLoadMore}
        >
          {loading ? "Loading more..." : disable ? "No more products" : "Load More"}
        </button>
        {disable && <p className="note">You have reached the limit of 100 products.</p>}
      </div>

      {selectedProduct ? (
        <section className="details-panel">
          <div className="details-card">
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
            <div className="details-content">
              <div className="details-header">
                <h2>{selectedProduct.title}</h2>
                <button type="button" onClick={() => setSelectedProduct(null)}>
                  Close
                </button>
              </div>
              <p className="details-description">{selectedProduct.description}</p>
              <div className="details-grid">
                <div>
                  <strong>Price</strong>
                  <span>${selectedProduct.price}</span>
                </div>
                <div>
                  <strong>Rating</strong>
                  <span>{selectedProduct.rating}</span>
                </div>
                <div>
                  <strong>Stock</strong>
                  <span>{selectedProduct.stock}</span>
                </div>
                <div>
                  <strong>Brand</strong>
                  <span>{selectedProduct.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="details-message">
          <p>Tap or click a product card to view details.</p>
        </section>
      )}
    </div>
  );
}
