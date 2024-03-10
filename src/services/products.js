import api from "./apiConfig.js";

export const getProducts = async => {
  try{

 const response = api.get("/products");
 return response.data;

  } catch (error) {
    console.error("Error Getting all Products:", error);
}
};

export const getProduct = async (title) => {
  try{

    const response = api.get(`/products/${title}`);
    return response.data;

  } catch (error) {
    console.error("Error Getting Product:", error);
}
};

export const createProduct = async (title, productData) => {
  try{

    const response = api.post("/products", productData);
    return response.data;

  } catch (error) {
    console.error(error);
}
};

export const editProduct = async (title, productData) => {
  try{

    const response = api.put(`/products/${title}`, productData);
    return response.data;

  } catch (error) {
    console.error(error);
}
};

export const deleteProduct = async (title) => {
  try{

    const response = api.delete(`/products/${title}`);
    return response.data;

  } catch (error) {
    console.error(error);
}
};
