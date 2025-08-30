import products from "../data/products";

export default function Products() {
  const sections = [
    { key: "boxSpices", title: "Box Spices" },
    { key: "pouchSpices", title: "Pouch Spices" },
    { key: "wholeSpices", title: "Whole Spices" },
    { key: "otherProducts", title: "Other Products" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>All Products</h1>

      {sections.map((section) => (
        <div key={section.key} style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>
            {section.title}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {products[section.key].map((p) => (
              <div key={p.id} style={{ width: "200px", textAlign: "center" }}>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
                <h3 style={{ marginTop: "10px", fontSize: "16px"}}>{p.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
