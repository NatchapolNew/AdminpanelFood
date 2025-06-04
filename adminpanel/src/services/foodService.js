import axios from "axios";

const API_URL = "http://localhost:8080/api/foods";
export const addFood = async (foodData, image) => {
  const formData = new FormData();
  formData.append("food", JSON.stringify(foodData));
  formData.append("file", image);
  try {
    const res = await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getFood = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteFood = async (id) => {
  try {
    const res = await axios.delete(API_URL+"/"+id);
    return res.status === 204;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
