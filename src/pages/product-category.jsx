import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductCategory() {
  const { category } = useParams();

  const categoryMap = {
    "box": products.boxSpices,
    "pouch": products.pouchSpices,
    "whole": products.wholeSpices,
    "other": products.otherProducts,
  };

  const filteredProducts = categoryMap[category] || [];

  const categoryTitles = {
    "box": "Box Spices",
    "pouch": "Pouch Spices",
    "whole": "Whole Spices",
    "other": "Other Products",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        {categoryTitles[category] || "Products"}
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredProducts.map((p) => (
            <div key={p.id} style={{ padding: "10px", width: "200px" }}>
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              <h3 style={{ marginTop: "10px", fontSize: "16px" }}>{p.name}</h3>
              {/* <p>{p.size}</p> */}
              {/* <p>{p.price}</p>  */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
