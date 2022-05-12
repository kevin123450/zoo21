import { time } from "console";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";
import "./../styles/Animals.css";

export const Animal = () => {
  const [extzoo, setExtanimal] = useState<IExtendedAnimal>();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(new Date);
  let params = useParams();
  const date = new Date();

  const [time,setTime] = useState(date);
  useEffect(() => {
    const interval = setInterval(() => {
      setCheck(new Date())
      console.log("assa")
    }, 1000);
  
    return () => clearInterval(interval);
  }, []); 

  useEffect(()=>{
    const item = localStorage.getItem("time") 
    var saveTime; 
    
    console.log(item,"s")
    
    if(item != null){
      saveTime= JSON.parse(item)
      setTime(saveTime)
      var secondBetweenTwoDate = Math.abs((new Date().getTime() - new Date(saveTime).getTime()) / 1000);

      if(secondBetweenTwoDate < 5){
        console.log("mindre än 5")
        setLoading(true)

      }
    }
   
    console.log("xd",time)
  }, [])

  useEffect(()=>{
    var secondBetweenTwoDate = Math.abs((new Date().getTime() - new Date(time).getTime()) / 1000);
    console.log(secondBetweenTwoDate)
    if(secondBetweenTwoDate > 5){
      console.log("innan för if")
      setLoading(false);
      
    }
  }, [time,check])

  async function handleSubmit(_time: any) {
    setLoading(true);   
    var today = new Date();
    setTime(today)
    localStorage.setItem("time",JSON.stringify(today));
    
    console.log(time); 
  }

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
      <p><button type="button" onClick={handleSubmit} disabled={loading}>
        Feed
      </button></p>
    </div>

  );
};