export default function Card({
  movietitle,
  imdbmovieid,
  movielanguages,
  moviecountries,
  moviemainphotos,
  moviegenres,
}) {
  return (
    <div className=" max-h-[240px] bg-white flex  rounded-lg m-1 shadow hover:shadow-lg">
      <div className="h-100 w-1/3">
        <img
          src={moviemainphotos}
          alt="movie-image"
          className="object-cover w-full h-full rounded-l-lg"
        />
      </div>
      <div className="w-2/3 flex flex-col px-2 ">
        <h3 className="text-lg font-bold">{movietitle}</h3>
        <p className="text-sm pt-1">
          Languages:
          <span className="text-zinc-400">{movielanguages}</span>
        </p>
        <p className="text-sm pt-1">
          Genre:
          <span className="text-zinc-400">{moviegenres}</span>
        </p>
        <p className="text-sm  pt-1 overflow-scroll">
          Countries:
          <span className="text-zinc-400">{moviecountries}</span>
        </p>
      </div>
    </div>
  );
}
