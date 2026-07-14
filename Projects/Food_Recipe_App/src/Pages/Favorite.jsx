import { useContext } from "react";
import RecipeItem from "../Components/RecipeItems";
import { GlobalContext } from "../Context/Index";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-rose-200 bg-white/80 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">
          Your collection
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Favorite recipes for later cooking.
        </h1>
      </div>

      {favoritesList && favoritesList.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {favoritesList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[40vh] items-center justify-center rounded-[2rem] border border-dashed border-rose-200 bg-white/70 p-8 text-center shadow-sm">
          <p className="text-xl font-semibold text-slate-700 sm:text-2xl">
            No favorites yet. Tap the button on a recipe to save it.
          </p>
        </div>
      )}
    </section>
  );
}

