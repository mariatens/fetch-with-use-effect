interface InputTextProps {
  value: string;
  onChange: (typedFilm: string) => void;
}

export function SearchBar(props: InputTextProps): JSX.Element {
  return (
    <div className="margin-top">
      <input
        className="searchBar"
        placeholder="Search a film"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
}
