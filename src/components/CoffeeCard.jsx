import PropTypes from "prop-types";
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  console.log(photo);
  return (
    <div className="card  card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="py-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30npsv3aKpszjVYJ4pPpbQq6JVKqvXZKceA&usqp=CAU"
          alt="Movie"
        />
      </figure>
      <div className="flex items-center w-full justify-around">
        <div>
          <h2 className="card-title">{name}!</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn">View</button>
            <button className="btn">Edit</button>
            <button className="btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeCard;
