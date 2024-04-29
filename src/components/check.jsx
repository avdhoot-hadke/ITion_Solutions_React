export default function CheckComponent({
  language,
  setLanguage,
  country,
  setCountry,
  genre,
  setGenre,
}) {
  return (
    <div className="bg-white mb-2 p-1 grid grid-cols-3 lg:grid-cols-1">
      <div className="flex lg:flex-row flex-col ">
        <div className="font-bold">Languages:</div>
        <Check label="English" state={language} setState={setLanguage} />
        <Check label="Hindi" state={language} setState={setLanguage} />
        <Check label="Marathi" state={language} setState={setLanguage} />
        <Check label="Telugu" state={language} setState={setLanguage} />
        <Check label="Tamil" state={language} setState={setLanguage} />
        <Check label="Kannada" state={language} setState={setLanguage} />
        <Check label="Oriya" state={language} setState={setLanguage} />
        <Check label="Bengali" state={language} setState={setLanguage} />
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="font-bold">Country:</div>
        <Check label="India" state={country} setState={setCountry} />
        <Check label="United States" state={country} setState={setCountry} />
        <Check label="United Kingdom" state={country} setState={setCountry} />
        <Check
          label="United Arab Emirates"
          state={country}
          setState={setCountry}
        />
        <Check label="France" state={country} setState={setCountry} />
        <Check label="Singapore" state={country} setState={setCountry} />
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="font-bold">Genre:</div>
        <Check label="Action" state={genre} setState={setGenre} />
        <Check label="Adventure" state={genre} setState={setGenre} />
        <Check label="Fantasy" state={genre} setState={setGenre} />
        <Check label="Sport" state={genre} setState={setGenre} />
        <Check label="Biography" state={genre} setState={setGenre} />
        <Check label="Drama" state={genre} setState={setGenre} />
      </div>
    </div>
  );
}

export function Check({ label, state, setState }) {
  const checked = state.includes(label);
  const handleChange = () => {
    if (checked) {
      setState(state.filter((item) => item !== label));
    } else {
      setState([...state, label]);
    }
  };

  return (
    <div className="ps-2">
      <input
        type="checkbox"
        className="me-1"
        value={label}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </div>
  );
}
