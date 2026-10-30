import React from "react";

export const UserProfile = () => {
  const name = "Peter";
  const yearsOfExp = 2;
  const isAvailable = true;

  return (
    //</><React.Fragment>
    <>
      <h1>Hello {name} </h1>
      <p>Started in: {2026 - yearsOfExp}</p>
      <p>
        Status : {isAvailable ? "Available for hire" : "Not available for hire"}
      </p>
    </>
    //</React.Fragment>
  );
};
