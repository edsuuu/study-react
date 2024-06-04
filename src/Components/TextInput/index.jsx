import "./styles.css";

export default function TextInput({ searchValue, handleChange }) {
  return (
    <>
      <input className='input-de-pesquisa' onChange={handleChange} type="search" value={searchValue} />
    </>
  );
}
