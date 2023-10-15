import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20 ">
      <h1 className="text-6xl text-center my-20 text-purple-600">
        HOOt HOOt Cold Coffees here in: {coffees.length}types
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {coffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
