import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";
import "./../styles/Animals.css";
import { Button } from "./Button";

export const Animal = () => {
  const [extzoo, setExtanimal] = useState<IExtendedAnimal>();
  let params = useParams();

  useEffect(() => {
    
      let animals: IExtendedAnimal[]= JSON.parse(localStorage.getItem("animals") || "[]");

      for (let i = 0; i < animals.length; i++){
        if(animals[i].id.toString()==params.id){

          setExtanimal(animals[i])
        }
    }
  }, []);

  return (
    
    <div className="center">
      <h4>Name: {extzoo?.name} {extzoo?.latinName}</h4>
      <h4>Latin: {extzoo?.latinName}</h4>
      <img src={extzoo?.imageUrl} alt={extzoo?.name} />
      <textarea value={extzoo?.longDescription}></textarea>
      <p><Button></Button></p>
    </div>

  );
};