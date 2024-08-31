import { useState } from "react";
import { Game } from "./components/Game";
import { NewGameForm } from "./components/NewGameForm";

function App() {
  const [games, setGames] = useState([]);

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => [...state, game]);
  };

  const removeGame = (id) => {
    setGames((state) => state.filter((game) => game.id !== id));
  };

  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              cover={game.cover}
              title={game.title}
              onRemove={() => removeGame(game.id)}
              key={game.id}
            />
          ))
        ) : (
          <h2>Parece que não tem nada aqui, tente adicionar alguns jogos :)</h2>
        )}
      </div>
    </div>
  );
}

export default App;
