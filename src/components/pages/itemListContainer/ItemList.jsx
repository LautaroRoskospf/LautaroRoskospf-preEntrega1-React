import { ProductCard } from "../../common/productCard/ProductCard";

const ItemList = ({ products }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1em",
        padding: "1em",
      }}
    >
      {products.map(({ id, img, title, description, price }) => {
        return (
          <ProductCard
            key={id}
            id={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
