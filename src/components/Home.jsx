import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import RoomComponent from "./RoomComponent";

const Home = () => {
  const [room, setRoom] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchRoomData = async () => {
    const res = await fetch("http://localhost:3000/rooms_by_serial_no");
    const roomData = await res.json();
    setRoom(roomData[0].rooms);
    setLoading(false);
  };

  useEffect(() => {
    fetchRoomData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <RoomComponent roomInfo={room} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
