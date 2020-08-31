import React,{useState} from "react";

const Header = ({setTerm}) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTerm(inputValue);
    setInputValue("");
  }
  return (
    <div className="bg-indigo-700">
      <div className="container text-white mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center p-4 ">
        <h2 className="text-2xl mb-4 md:mb-0">Pixabay Gallary</h2>
        <form className="md:ml-auto flex text-black " onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchInput"
            className="rounded-l-lg pl-3 focus:outline-none"
            placeholder="Search here..."
            onChange={handleChange}
            value={inputValue}
          />
          <input
            type="submit"
            value="Search"
            className="bg-teal-400 text-white p-2 rounded-r-lg focus:outline-none cursor-pointer hover:bg-teal-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
