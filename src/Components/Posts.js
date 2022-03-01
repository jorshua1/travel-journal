import React from "react";
import Post from "../Components/Post";
import TravelData from "../Data/TravelData";

function Posts() {
  const postComponents = TravelData.map((travel) => {
    return (
      <Post
      //mandamos toda la data del objeto y el componente post se
      //encargara de manejarlo
        key={travel.id}
        travel={travel}
      />
    );
  });

  return <div className="h-auto md:p-20 p-5 lg:grid lg:grid-cols-2 lg:gap-10">{postComponents}</div>;
}

export default Posts;
