import React from "react";

const RoomCard = ({ myData }) => {
  const { name, properties, address, variants, images } = myData;
  const randomNumber = Math.floor(Math.random() * (7 - 0)) + 0;

  const img =
    properties.room_images === undefined
      ? "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/HOTEL_ROOM/sourced/Dubai/126675265/347985843.jpg"
      : properties.room_images[0].image_urls[randomNumber];


  return (
    <div className="card">
      <div className="card-info">
        <img src={img} alt="Room Image"></img>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>
            <i className="fa-solid fa-mug-saucer"></i> &nbsp; {variants[0].name}
          </p>
          <p>
            <i className="fa-solid fa-bed"></i> &nbsp;{" "}
            {properties.bed_type.toLowerCase()}
          </p>
          <p>
            <i className="fa-solid fa-user"></i> &nbsp; Upto{" "}
            {properties.room_capacity.max_occupancy} adults
          </p>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <p>Price for 1 night</p>
          <p>Includes taxes & fees</p>
          <p>
            {
              <del>
                $&nbsp; {variants[0].total_price.total_price_rounded.toString()}
              </del>
            }{" "}
            &nbsp; $&nbsp;
            {variants[0].total_price.discounted_price_rounded}
          </p>
          <h2>{name.substr(0, 46)}</h2>
          <p>Select rooms to add special request</p>
          <button>Select</button>
          <a>Cancellation policy {">"}</a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
