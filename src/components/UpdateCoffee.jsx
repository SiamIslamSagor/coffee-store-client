import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photo } =
    coffee;

  const handleUpdateCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // to send data in server side
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="bg-[#f4f3f0] p-24">
        <h2 className="text-3xl font-extrabold">Update coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* form row */}
          <div className="md:flex gap-4 mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={name}
                  name="name"
                  type="text"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={quantity}
                  name="quantity"
                  type="text"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row */}
          <div className="md:flex gap-4 mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={supplier}
                  name="supplier"
                  type="text"
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Test</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={test}
                  name="test"
                  type="text"
                  placeholder="Test"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row */}
          <div className="md:flex gap-4 mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={category}
                  name="category"
                  type="text"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={details}
                  name="details"
                  type="text"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row */}
          <div className="mb-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={photo}
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Coffee"
            className="btn bg-[#D2B48C] btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
