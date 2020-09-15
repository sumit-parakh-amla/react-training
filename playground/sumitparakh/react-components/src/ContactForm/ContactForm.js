import React from "react";

const FirstName = (
  <input key={0} type="text" name={"firstName"} placeholder={"Enter first name"} />
);
const LastName = (
  <input key={1} type="text" name={"lastName"} placeholder={"Enter last name"} />
);
const Address = (
  <input type="text" name={"address"} placeholder={"Enter address"} />
);

// You can return not only html(Jsx), but array of jsx elements as well

export const ContactForm = (props) => {
  const config = props.config;
  const componentList = [];

  if (config.firstName) {
    componentList.push(FirstName);
  }
  if (config.lastName) {
    componentList.push(LastName);
  }
  if (config.address) {
    componentList.push(Address);
  }

  return <>{componentList}</>;
};
