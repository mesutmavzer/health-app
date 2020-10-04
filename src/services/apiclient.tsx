import axios from "axios";
import { Product } from "./types/Product";

export async function getProducts(pageIndex = 0, pageSize = 20, query = "") {
  try {
    const result = await axios.get(
      `https://localhost:5002/api/products?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getProductsByLetter(letter: string) {
  try {
    const result = await axios.get<Product[]>(
      `https://localhost:5002/api/products/initial/${letter}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
