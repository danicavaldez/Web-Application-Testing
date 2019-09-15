import React from "react";

export default function Display({ ball, strike }) {
  return(
    <div>
      <p>Balls: {ball}</p>
      <p>Strikes: {strike}</p>
    </div>
  )
}