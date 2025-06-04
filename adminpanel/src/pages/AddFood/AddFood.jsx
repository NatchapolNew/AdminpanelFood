import React, { useEffect, useState } from "react";
import { asset } from "../../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { addFood } from "../../services/foodService";
const AddFood = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("You must select the an image");
      return;
    }
    try {
      await addFood(data, image);
      toast.success("Add food success!!");
      setData({ name: "", description: "", price: "", category: "" });
      setImage(null)
    } catch (err) {
      console.log(err);
      toast.error("Error add food")
    }
  };

  return (
    <div className="mx-2 mt-2 ">
      <div className="row">
        <div className="card col-md-4">
          <div className="cardbody">
            <h2 className="mb-4 mt-2">Add Food</h2>
            <form onSubmit={onSubmitHandle}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : asset.upload}
                    alt="Upload"
                    height={50}
                    width={50}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandle}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  required
                  name="description"
                  placeholder="Please input description."
                  onChange={onChangeHandle}
                  value={data.description}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandle}
                  value={data.category}
                >
                  <option value="" disabled>
                    --Select--
                  </option>
                  <option value="friedrice">Fried Rice</option>
                  <option value="cake">Cake</option>
                  <option value="burger">Burger</option>
                  <option value="pizza">Pizza</option>
                  <option value="rolls">Rolls</option>
                  <option value="salad">Salad</option>
                  <option value="icecream">Ice cream</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="name"
                  required
                  name="price"
                  onChange={onChangeHandle}
                  value={data.price}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
