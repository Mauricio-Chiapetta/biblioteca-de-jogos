import { useState } from "react";
import { TextInput } from "./textInput";

export function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="title" label="Title:" value={title} setValue={setTitle} />
      <TextInput id="cover" label="Capa:" value={cover} setValue={setCover} />
      <button>Adicionar</button>
    </form>
  );
}
