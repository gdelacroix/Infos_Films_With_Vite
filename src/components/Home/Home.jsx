import { useState } from 'react';
import "./Home.css";
import PropTypes from "prop-types";
const Home = () => {
    const [animation, setAnimation] = useState(true)
  	   
   const toggleAnimation = () => {
 	console.log(animation)
 	setAnimation(animation => !animation)
   }

  return (
    <div className="container">
      <img src={"../images/dwwm_1.png"} className={`logo ${animation && "rotate"}`}  alt="logo" />
      <h1>TP React Développeur Web et Web Mobile</h1>
      <button
 		className="App-button"
 		onClick={ toggleAnimation }>
 			Modifier l’animation
 	</button>

    </div>
  );
};

// Validation des props
Home.propTypes = {
    animate: PropTypes.bool, // Remplacez `bool` par le type correct de `animate`
  };
export default Home;
