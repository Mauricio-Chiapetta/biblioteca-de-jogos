export function TextInput({ id,label, value, setValue }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(currentValue) => setValue(currentValue.target.value)}
      />
    </div>
  );
}
