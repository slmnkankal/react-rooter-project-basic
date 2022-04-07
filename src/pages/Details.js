import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import CheckoutBag from "../assets/CheckoutBag";
import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.productId]);

  
  // const handleBack = () => {
  //   navigate("/produckts"); //bu çözüm her halukarda product sayfasına yönlendirir!!!
  //   navigate(-1); //bir geri yönlendirir!!!
  // };

  // const handleCheckout = () => {
  //   navigate("/checkout");
  // };

  return (
    <div>
      <div className={styles.detailsNav}>
        <BackArrow
          className={styles.detailsNavIcon}
          onClick={() => navigate(-1)} // onClick={handleBack};
        />
        <h1>Details Page</h1>
        <CheckoutBag
          className={styles.detailsNavIcon}
          onClick={() => navigate("/checkout", {state: { product }})} // onClick={handleCheckout}
        />
      </div>
      <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product?.rating?.count}</p>
        <img
          className={styles.detailsImage}
          src={product?.image}
          alt={product?.title}
        />
      </div>
    </div>
  );
};

export default Details;