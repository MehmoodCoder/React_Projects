import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/Index";

export default function Navbar() {
  const context = useContext(GlobalContext);

  if (!context) {
    return <div className="rounded-full bg-white/80 px-4 py-3 text-sm">Loading Navbar...</div>;
  }

  const { searchParam, setSearchParam, handleSubmit, favoritesList } = context;
  const totalFavorites = favoritesList?.length ?? 0;

  return (
    <nav className="sticky top-4 z-20 mb-6 rounded-[2rem] border border-white/70 bg-white/80 px-4 py-4 shadow-lg shadow-rose-100 backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            <NavLink to={"/"} className="transition hover:text-rose-600">
              FoodRecipe
            </NavLink>
          </h2>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700">
            {totalFavorites} saved
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:max-w-xl lg:flex-1 lg:justify-end">
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search recipes or ingredients..."
            className="w-full rounded-full border border-rose-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200 sm:w-80"
          />
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Search
          </button>
        </form>

        <ul className="flex items-center gap-3 sm:gap-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-rose-100 text-rose-700" : "text-slate-700 hover:text-rose-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-rose-100 text-rose-700" : "text-slate-700 hover:text-rose-600"
                }`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}