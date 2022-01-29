import React from "react";

type Props = {
  text: string;
  icon: string;
};

const Result: React.FC<Props> = (props) => {
  return (
    <div>
      {props.text}
      {props.icon}
    </div>
  );
};

export default Result;
