import { useState } from 'react';
import Users from './Users.jsx'
import Posts from './Posts.jsx';


// const MashinHa = [
//   {Make : "TOYOTA" , Modele : "Camry",Year : "2008",Price : "20,000$"},
//   {Make : "Benz" , Modele : "G-Class",Year : "2012",Price : "45,000$"},
//   {Make : "KMC" , Modele : "J7",Year : "2021",Price : "23,000$"}
// ]

function App() {
  // const [cars ,setCars]=useState(MashinHa)
  // const handeleDelete = (Make)=>{
  //   const newCars = cars.filter((car)=>Make !== car.Make);
  //   setCars(newCars);
  // }
  // const checkCar = (char)=>{
  //   const newCar=MashinHa.filter((car)=>car.Make.toLowerCase().includes(char.toLowerCase()));
  //   setCars(newCar)

  // }
  // return (
  //   <div>
  //     <input type="text" onChange={(e)=>{checkCar(e.target.value)}}/>
  //     {cars.map((car)=>
  //     <Cars key={car.Make} {...car} handeleDelete={()=>handeleDelete(car.Make) } ></Cars>)}

  //   </div>
  // )
  const [page, setPage] = useState("users");
  return (
    <div>
      <h1>React App</h1>
      <button onClick={() => { setPage("users") }}>users</button>
      <button onClick={() => { setPage("posts") }}>posts</button>
      {page === "users" && <Users />}
      {page === "posts" &&
        <>
          <Posts />
          <button onClick={() => setPage("users")}> back to users</button>
        </>
      
      }

    </div>

  )

}
export default App
