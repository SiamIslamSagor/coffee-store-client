import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Header></Header>
      <div className="m-20 ">
        <h1 className="text-6xl text-center my-20 text-purple-600">
          HOOt HOOt Cold Coffees here in: {coffees.length}types
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {coffees.map(coffee => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
