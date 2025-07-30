import { useState, useEffect } from "react";
import Simir from "./Simr";
import { useParams } from "react-router";
import { MENU_API } from "../constants/constant";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setResInfo(data.data);
  };
  

  if (resInfo === null) return <Simir />;

  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
 
  const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  const itemCardsSelection = cards.filter((x)=>x.card.card.itemCards) 

  const items = itemCardsSelection.flatMap((x)=>x?.card?.card?.itemCards)
  
 

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="menu-details">
        <h3>
        {avgRatingString}({totalRatingsString}) - {costForTwoMessage}
       </h3>
       <h3>{cuisines.join(" ,")}</h3>
       <h4>Outlet {areaName} </h4>
       <h4>{sla.slaString} </h4>
      </div>
     <div className="menu-menu">
         <h3>Menu</h3>
      <ul className="list">
        {items.map((x,index) => {
              const id = x?.card?.info?.id;
              const name = x?.card?.info?.name;
              const price = x?.card?.info?.defaultPrice || x?.card?.info?.price
              const rating = x?.card?.info?.ratings?.aggregatedRating?.rating || x?.card?.topRatedFilter?.attributes.displayText
              const description =  x?.card?.info?.description
              const imageId = x.card.info.imageId
              



          return (
           
            
            <li  className="menu-container"
             key={`${id}_${index}`}>
                 <div className="flex">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm font-medium mt-1">₹{price/100}</p>

          {rating && (
            <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
              <span>⭐ {rating}</span>
             
            </div>
          )}

          {
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
          }
        </div>

         { 
          <div className="menu-right">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
              alt={name}
              className="menu-img"
            />
            <button className="mt-2 text-green-600 font-semibold border px-4 py-1 rounded-full shadow-sm">
              ADD
            </button>
            
          </div>
        }
            
            </li>
            
          );
        })}
      </ul>
     </div>
     
    </div>

  );
};
export default ResMenu;
