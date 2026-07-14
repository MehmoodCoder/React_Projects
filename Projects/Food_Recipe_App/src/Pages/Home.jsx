import { useContext } from "react";
import { GlobalContext } from "../Context/Index";
import RecipeItem from "../Components/RecipeItems";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center rounded-3xl bg-white/80 p-8 shadow-sm">
        <p className="text-lg font-semibold text-slate-700">Loading recipes... please wait.</p>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] bg-gradient-to-r from-rose-500 to-orange-400 p-6 text-white shadow-xl sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
          Recipe Explorer
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Discover dinner ideas and weekend favorites.
        </h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base">
          Search for dishes, ingredients, or cuisines and save the ones you want to try again.
        </p>
      </div>

      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {recipeList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[40vh] items-center justify-center rounded-[2rem] border border-dashed border-rose-200 bg-white/70 p-8 text-center shadow-sm">
          <p className="text-xl font-semibold text-slate-700 sm:text-2xl">
            Search for a recipe to see delicious results here.
          </p>
        </div>
      )}
    </section>
  );
}

