import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./../styles/Animals.css";

export const Zoo = () => {
  const [zoo, setZoo] = useState<IAnimal[]>([]);

  

  useEffect(() => {
    if (zoo.length !== 0) return;
    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        localStorage.setItem("animals",JSON.stringify(response.data))
        setZoo(response.data);
      });
  });

  return (
    <>
      {zoo.map((animal) => {
        return (
          <Link to={"/animal/" + animal.id}>
            <h5>{animal.name}</h5>
            <h5>{animal.latinName}</h5>
            <img src={animal.imageUrl} alt={animal.name} />
            <textarea value={animal?.shortDescription}></textarea>
          </Link>
        );
      })}
    </>
  );
};