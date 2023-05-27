import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/index";
import { Button, Typography, CircularProgress } from "@material-ui/core";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products);

  const fetchProductList = () => {
    dispatch(fetchData());
  };

  return (
    <div>
      <Typography variant="h4" style={{ padding: "1rem 0" }}>
        Product list
      </Typography>
      <Button color="primary" variant="contained" onClick={fetchProductList}>
        Get Product List
      </Button>
      {products?.flag === "loading" ? (
        <div style={{ padding: "1rem" }}>
          <CircularProgress />
          <Typography variant="body1">loading...</Typography>
        </div>
      ) : products?.flag === "error" ? (
        <Typography variant="body1">{products?.error}</Typography>
      ) : (
        <ul className="list-group my-5 border border-light">
          {products?.data.length > 0 &&
            products?.data.map((item, index) => (
              <Typography variant="body1" key={index}>
                <pre>{JSON.stringify(item, null, 2)}</pre>
              </Typography>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
