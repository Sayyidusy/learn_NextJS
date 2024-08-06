import { fetcher } from "@/lib/swr/fetcher";
import ProductViews from "@/views/product";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";


// const dibawah ini ada di file lib/swr/fetcher.ts
// const fetcher = (url:string) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

//   useEffect(() => {
//     if (!isLogin) {
//       push("/auth/login");
//     }
//   },[]);


  const { data, error, isLoading } = useSWR(
    "/api/product",
    fetcher
  );
  
  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductViews products ={isLoading ? [] : data.data} />
    </div>
  );
};





export default ProductPage;
