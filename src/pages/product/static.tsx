import ProductView from "@/views/product";
import { ProductType } from "../../types/productType";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
    return (
      <div>
        <ProductView products={products} />
      </div>
    );
  };


export default ProductPage;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  // return data sebagai props
  return {
    props: {
      products: response.data,
    },
  };
}
