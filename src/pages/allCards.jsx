import React, { useEffect, useState } from "react";
import Card from "../components/card";
import movieData from "../data/movies-filter-react.json";
import CheckComponent from "../components/check";

export default function AllCards() {
  const [language, setLanguage] = useState([]);
  const [country, setCountry] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filterArray, setFilter] = useState(movieData);

  useEffect(() => {
    if (language.length == 0 && country.length == 0 && genre.length == 0) {
      setFilter(movieData);
    } else {
      let langArray = movieData.filter((movie) => {
        if (language.length === 0) return true;
        return movie.movielanguages.some((l) => language.includes(l));
      });
      let countryArray = langArray.filter((movie) => {
        if (country.length === 0) return true;

        return movie.moviecountries.some((c) => country.includes(c));
      });

      let genreArray = countryArray.filter((movie) => {
        if (genre.length === 0) return true;
        return movie.moviegenres.some((g) => genre.includes(g));
      });
      console.log(genreArray);
      setFilter(genreArray);
    }
  }, [language, genre, country]);
  return (
    <>
      <CheckComponent
        language={language}
        setLanguage={setLanguage}
        country={country}
        setCountry={setCountry}
        genre={genre}
        setGenre={setGenre}
      />

      <div className="grid xl:grid-cols-3 lg:grid-cols-2  relative">
        {filterArray.map((movie) => {
          return (
            <Card
              key={movie.imdbmovieid}
              movietitle={movie.movietitle}
              moviemainphotos={movie.moviemainphotos}
              movielanguages={movie.movielanguages.join(", ")}
              moviecountries={movie.moviecountries.join(", ")}
              moviegenres={movie.moviegenres.join(", ")}
            />
          );
        })}
      </div>
    </>
  );
}
