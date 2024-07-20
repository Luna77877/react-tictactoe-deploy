import React from "react";
import "./Square.css";

// const Square = (props) => {
//   return (
//     <button className="square" onClick={() => props.onClick()}>
//       {props.value}
//     </button>
//   );
// };

// 2번째 방법 distructing??
const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
