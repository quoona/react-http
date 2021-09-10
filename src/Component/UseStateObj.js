import React, { useState } from "react";

function UseStateObj() {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setname({ ...name, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setname({ ...name, lastName: e.target.value })}
      ></input>
      <h2>First Name is: {name.firstName}</h2>
      <h2>Last Name Name is: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default UseStateObj;
