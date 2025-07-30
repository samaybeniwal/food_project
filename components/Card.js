const Card = (props)=>{
    const {resData} = props;
        return(
            <div className="res-card">
                <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="sweets image" id="sweets-img"/>
                <h3 className="detail">{props.resData.info.name}</h3> 
                <h4 className="detail">{props.resData.info.cuisines.join(" , ")}</h4> 
                <h5 className="detail">{props.resData.info.areaName}</h5> 
                <h4 className="detail">{props.resData.info.avgRating} ✮</h4>
                <h4 className="detail">{props.resData.info.sla.deliveryTime} minutes</h4> 
                <h4 className="detail">{props.resData.info.costForTwo} </h4> 

            </div>
        )
}

export default Card