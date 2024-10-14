import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between h-24 px-28">
        <button>
          <img src="./Logo.png" alt="Logo" className="w-40 h-9" />
        </button>
        <div className="flex justify-between gap-10 text-gray-700 text-lg leading-6 font-normal font-sans">
          <nav className="flex justify-between gap-10">
            <ul>
              <li>
                <Link href="http://localhost:3001">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="http://localhost:3001/allBlog">Blog</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="http://localhost:3001/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pr-10 h-9 w-40 bg-gray-100 pl-4"
          />
          <img
            src="./search-outline.png"
            alt="search icon"
            className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </header>
    </div>
  );
};
