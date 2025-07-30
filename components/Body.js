import Card from "./Card";
import { useEffect, useState } from "react";
import Simir from "./Simr"
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [dat, setDat] = useState([]);
  const [searchDat,setSearchDat] = useState([])
  const[searchbtn, setSearchbtn] = useState("")
  
   
  useEffect(()=>{
    fetchData();
  },[])
  
  const fetchData = async ()=>{
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await response.json()
    let res = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  
    setDat(res)
    setSearchDat(res)
    console.log(res)


  }
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Ohh yo're looks like offline!!!</h1>
 

  if(dat.length === 0){
    return <h1> <Simir/> </h1>
  }
 
console.log(dat)


  
  return (
    <div className="body">
      <div className="search-items">
        <input type="text" 
        placeholder="Search "
        value={searchbtn} 
        onChange={(e)=>{
            setSearchbtn(e.target.value)
        }}
         />
        <button
        onClick={()=>{
            const searchData = dat.filter((x)=>x.info.name.toLowerCase().includes(searchbtn.toLowerCase())

            )
            setSearchDat(searchData)
           
        }}
        >&#128269;</button>
       
      </div>
      <div className="res-container">
        {searchDat.map((restaurant) => (
          <Link key={restaurant.info.id} to={/restaurents/+restaurant.info.id} id="cards"><Card  resData={restaurant} /></Link>
          
        ))}
      </div>
    </div>
  );
};
export default Body;
