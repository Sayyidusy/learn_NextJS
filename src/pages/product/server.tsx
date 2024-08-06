import ProductView from "@/views/product";
import { ProductType } from "../../types/productType";

const ProductPage = (props: {products: ProductType[]}) => {
    const {products} = props;
    return (
        <div>
            <ProductView products={products}/>
        </div>
    )
}

export default ProductPage

// dipanggil setiap melakukan request ke server
export async function getServerSideProps(){
    // fetch data dari api
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();

    // return data sebagai props
    return {
        props: {
            products: response.data
        },
    }
}

// fungsi server side rendering

// ui pada website atau data akan langsung muncul ketika user mengakses website
// data yang ditampilkan akan selalu up to date

// kekurangan
// - performa lebih lambat
// - tidak cocok untuk data yang jarang berubah atau tidak perlu up to date