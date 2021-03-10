import React from "react";

const btnStyle = {
    fontWeight:"700",
    fontSize: "28px",
    cursor: "pointer",
    backgroundColor: "#9999ff"
}
const Square = ({ value, onClick }) => (
	<button style={btnStyle} onClick={onClick}>
		{value}
	</button>
);
export default Square;