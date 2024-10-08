import "./Film.css";
import PropTypes from "prop-types";

function Film({ abstract, poster }) {
  return (
    <div className="film">
        {poster ? ( // Vérifiez si poster est défini
        <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="poster du film" />
      ) : (
        <img src='../images/dwwm_1.png' alt="poster du film" /> // Affiche un message ou un autre élément si poster est null ou indéfini
      )}
    
      <p>{abstract}</p>
    </div>
  );
}

// Validation des props
Film.propTypes = {
  abstract: PropTypes.string.isRequired, // abstract est une chaîne de caractères et obligatoire
  poster: PropTypes.string, // poster est une chaîne de caractères 
};
export default Film;
