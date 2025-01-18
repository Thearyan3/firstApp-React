import React, { useState } from 'react';

const Home = () => {
  // const [age, setAge] = useState("20");
  const [brand, setBrand] = useState("BMW");
  const [model, setModel] = useState("GTR3");
  const [year, setYear] = useState("2005");
  const [color, setColor] = useState("white");
  return (<div>
        <h3>This is my {brand} Car.</h3>
       <p>Its a {color} {model} from {year} .....</p>
    </div>
  )
}
export default Home
