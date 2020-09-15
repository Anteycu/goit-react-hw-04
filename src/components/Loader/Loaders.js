import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export function Loaders({ message }) {
  return (
    <>
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      <p>{message}</p>
    </>
  );
}
