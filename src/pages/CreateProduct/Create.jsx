import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/ProductApi";
import Local from "./Local";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

const Create = () => {
  const [files, setFiles] = useState([]);
  const { formData, handleChange } = useGetInputValue(initialState);
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleCreatePro = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", formData.info);

    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });

    createProduct(form);
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div>
      Create
      <form onSubmit={handleCreatePro} action="">
        <input
          value={formData.title}
          onChange={handleChange}
          type="text"
          name="title"
        />
        <input
          value={formData.price}
          onChange={handleChange}
          type="number"
          name="price"
        />
        <input
          value={formData.oldPrice}
          onChange={handleChange}
          type="number"
          name="oldPrice"
        />
        <input
          value={formData.category}
          onChange={handleChange}
          type="text"
          name="category"
        />
        <input
          value={formData.units}
          onChange={handleChange}
          type="text"
          name="units"
        />
        <textarea
          onChange={handleChange}
          value={formData.description}
          name="description"
        ></textarea>
        <textarea
          onChange={handleChange}
          value={formData.info}
          name="info"
        ></textarea>
        <input onChange={handleFileChange} type="file" multiple />
        <Local files={files} setFiles={setFiles} />
        <button disabled={isLoading}>Create</button>
      </form>
    </div>
  );
};

export default Create;
