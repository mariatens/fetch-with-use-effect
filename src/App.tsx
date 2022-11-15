import { useEffect, useState } from "react";

interface Joke {
  quote: string;
}

function App() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        "https://api.kanye.rest"
      );
      const jsonBody: Joke = await response.json();
      setJoke(jsonBody);
    };

    fetchJoke();
  }, []);

  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Kanye West app</h1>
      {joke && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{joke.quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
