const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const newCoffee = { name, quantity, supplier, test, category, details };
    console.log(newCoffee);
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold">Add coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
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
          value="Add Coffee"
          className="btn bg-[#D2B48C] btn-block"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
