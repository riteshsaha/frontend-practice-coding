const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
      ></img>
      <div className="res-name">
        <span>{resData.name}</span>
      </div>
      <RestaurantInfo
        resRating={resData.avgRating}
        resDeliveryTime={resData.sla.slaString}
      />
      <RestaurantAdditionalInfo
        resType={resData.cuisines.join(", ")}
        resLocation={resData.areaName}
      />
    </div>
  );
};

const RestaurantInfo = ({ resRating, resDeliveryTime }) => (
  <div className="res-info">
    <div className="res-star-rating">
      <img
        alt="star-logo"
        src="https://tse3.mm.bing.net/th?id=OIP.AFXqMeNJ9dlxl1JZd86VOwHaHa&pid=Api&P=0&h=220"
      ></img>
      <span className="rating">{resRating}</span>
      <span className="separator">•</span>
      <span className="delivery-time">{resDeliveryTime}</span>
    </div>
  </div>
);

const RestaurantAdditionalInfo = ({ resType, resLocation }) => (
  <div className="res-additional-info">
    <span className="res-type">{resType}</span>
    <br />
    <span className="res-location">{resLocation}</span>
  </div>
);

export default RestaurantCard;
