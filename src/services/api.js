import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const analyzeSkin = async (image) => {
  const formData = new FormData();

  formData.append("image", image);

  const response = await api.post(
    "/analyze-skin",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export default api;