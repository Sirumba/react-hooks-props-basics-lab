import React from "react";

function Home({color, name, text = "is a Web Developer from", city}) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} {text} {city}
      </h1>
    </div>
  );
}

export default Home;


