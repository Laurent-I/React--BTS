import react from "react";

const Demo = (props) => {
  return <p>{props.show ? "This is new" : ""}</p>;
};
export default react.memo(Demo);
