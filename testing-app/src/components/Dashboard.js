import React from "react";

export default function Dashboard(props) {

  function addStrike() {
    props.setStrike(props.strike + 1)
      if(props.strike === 3) {
        props.setStrike(0)
        props.setBall(0)
      }
  }

  return (
    <div>
      <button onClick={addStrike}>Strike</button>
      <button>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </div>
  )
}