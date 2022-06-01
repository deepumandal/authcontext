import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        {" "}
        <h1>Navbar</h1>
      </div>

      <div>
        <button
          style={{ margin: "50px" }}
          onClick={() => {
            if (state == "logout") {
              dispatch({ action: "login" });
            } else {
              dispatch({ action: "logout" });
            }
          }}
        >
          {" "}
          {state}{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
