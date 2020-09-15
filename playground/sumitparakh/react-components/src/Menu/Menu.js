import React from "react";

export const Menu = (props) => {
  if (!props.menus) {
    return <></>;
  }

  return (
    <ul>
      {props.menus.map((menu, index) => (
        <li style={{ color: "blue", padding: "10px" }} key={index}>
          {menu}
        </li>
      ))}
    </ul>
  );
};
