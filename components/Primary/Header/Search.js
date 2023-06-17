import { TfiSearch } from "react-icons/tfi";

const Search = () => {
  return (
    <section>
      <div className="flex text-sm rounded-full bg-light max-w-7xl w-full drop-shadow-md">
        <input
          type="text"
          name="search"
          className="w-[calc(100%-62px)] placeholder:text-placeholder px-4 py-2 focus:ring-0 focus:outline-none rounded-full text-placeholder"
          placeholder="Search here..."
        />
        <button
          type="button"
          className="h-[36px] py-2 px-6 text-light bg-search-bg rounded-full"
        >
          <TfiSearch className="" />
        </button>
      </div>
    </section>
  );
};

export default Search;
