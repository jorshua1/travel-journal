import React from "react";

function Post(props) {
  return (
    <div className="h-auto w-full rounded-xl shadow-lg flex flex-col mb-16 md:flex-row lg:basis-1/2">
      <img
        className="object-cover lg:h-auto 2xl:h-80 md:h-80 md:w-60 h-40 w-auto rounded-t-lg md:rounded-xl"
        src={props.travel.imagen}
        alt=""
      />
      <div className="h-auto flex flex-col p-10 justify-center">
        <span className="tracking-widest w-auto font-semibold">
          <li className="fa fa-map-marker text-red-400"></li> {props.travel.pais}
          <a
            href={props.travel.maps}
            className="pl-3 tracking-tight font-normal text-slate-500"
          >
            View on Google Map
          </a>
        </span>
        <h1 className="text-3xl py-3  font-bold">{props.travel.tituloPost}</h1>
        <h4 className="text-lg py-2 font-bold">{props.travel.fechaViaje}</h4>
        <p className="text-">
          {" "}
          {props.travel.resumen}
        </p>
      </div>
    </div>
  );
}

export default Post;
