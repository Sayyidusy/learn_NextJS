import { ProductType } from "@/types/productType";
import styles from "./product.module.scss";

const ProductViews = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product_title}>Product</h1>
      <div className={styles.product_content}>
        {products.length > 0 ? (
            <>
                {products.map((product: ProductType) => (
          <div key={product.id} className={styles.product_item}>
            <div className={styles.product_image}><img src={product.image} alt={product.name}/></div>
            <h2 className={styles.product_category}>{product.category}</h2>
            <h4 className={styles.product_name}>{product.name}</h4>
            <p className={styles.product_price}>{product.price.toLocaleString("id-ID", {style:'currency', currency:'IDR'})}</p>
            <button className={styles.product_btn}>Beli Sekarang</button>
          </div>
        ))}
            </>
        ) : (
            
        // skeleton
        <div className={styles.product_content_skeleton}>
            <div className={styles.product_content_skeleton_image}/>
            <div className={styles.product_content_skeleton_category}/>
            <div className={styles.product_content_skeleton_name}/>
            <div className={styles.product_content_skeleton_price}/>
            <div className={styles.product_content_skeleton_btn}/>
        </div>
        )
    }

      </div>
    </div>
  );
};

export default ProductViews;
