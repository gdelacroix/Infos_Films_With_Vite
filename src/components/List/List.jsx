import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./List.css";
import Film from "../Film/Film";
import getFilmsFromTMdbWidthText from "../../TMBApi";

function List() {
  const [films, setFilms] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    getFilmsFromTMdbWidthText(search, 1).then((response) => {
      setFilms(response.results);
    });
  });
  return (
    <div className="container">
      <h2>Liste des films</h2>
      <p>{search}</p> {/* data correspond au paramètre de la route */}
      {films.map((film) => (
        <Film
          key={film.id}
          poster={film.poster_path }
          abstract={film.overview}
        />
      ))}
    </div>
  );
}
export default List;
