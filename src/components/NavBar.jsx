import React from "react";

function NavBar() {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="bg-primary d-flex p-2"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <a
          style={{
            marginRight: "0.8rem",
            justifyContent: "center",
            textDecoration: "none",
            color: "white",
          }}
          href="/movies"
        >
          Movies
        </a>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="/aboutcompany"
        >
          Company Info
        </a>
      </div>
    </div>
  );
}

export default NavBar;
