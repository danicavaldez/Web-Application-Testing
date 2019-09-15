import React from "react";

export default function Dashboard(props) {

  function addStrike() {
    props.setStrike(props.strike + 1)
      if(props.strike === 3) {
        props.setStrike(0)
        props.setBall(0)
      }
  }

  function addBall() {
    props.setBall(props.ball + 1)
    if(props.ball === 4) {
      props.setStrike(0)
      props.setBall(0)
    }
  }

  function addFoul() {
    props.setFoul(props.foul + 1)
    if (props.strike <= 1) {
      props.setStrike(props.strike + 1)
    }
  }

  function addHit() {
    props.setHit(props.hit + 1)
    if(props.hit === 1) {
      props.setStrike(0)
      props.setBall(0)
    }
  }

  return (
    <div>
      <button onClick={addStrike}>Strike</button>
      <button onClick={addBall}>Ball</button>
      <button onClick={addFoul}>Foul</button>
      <button onClick={addHit}>Hit</button>
    </div>
  )
}