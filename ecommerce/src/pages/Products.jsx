import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  // const params = new URL(request.url).searchParams;
  // const search = params.get("search");

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
console.log(params);

  const response = await customFetch("/products", {
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
