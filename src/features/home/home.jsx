// import React from "react";
import {useSelector, useDispatch} from "react-redux";
import MyButton from "../../components/button";
import {increment, decrement, incrementByAmount} from "./counterSlice";

export default function Home() {
  const count = useSelector((state) => state.home.counter);
  const dispatch = useDispatch();

  return (
    <>
      Count:{count}
      <MyButton
        title="Increment"
        onClickHandler={() => dispatch(increment())}
      />
      <MyButton
        title="Decrement"
        onClickHandler={() => dispatch(decrement())}
      />
      <MyButton
        title="Increment By Number"
        onClickHandler={() => dispatch(incrementByAmount(2))}
      />
    </>
  );
}
