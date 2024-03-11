import api from "./apiConfig.js";

export const getProducts = async () => {
  try{

 const response = await api.get("/products");
 return response.data;

  } catch (error) {
    console.error("Error Getting all Products:", error, api);
}
};

export const getProduct = async (title) => {
  try{

    const response = await api.get(`/products/${title}`);
    return response.data;

  } catch (error) {
    console.error("Error Getting Product:", error);
}
};

export const createProduct = async (productData) => {
  try{

    const response = await api.post("/products", productData);
    return response.data;

  } catch (error) {
    console.error(error);
}
};

export const editProduct = async (title, productData) => {
  try{

    const response = await api.put(`/products/${title}`, productData);
    return response.data;

  } catch (error) {
    console.error(error);
}
};

export const deleteProduct = async (title) => {
  try{

    const response = await api.delete(`/products/${title}`);
    return response.data;

  } catch (error) {
    console.error(error);
}
};
