import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context/Index";

export default function Details() {
  const { id } = useParams();

  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function getRecipeDetails() {
      try {
        setDetailsLoading(true);
        setDetailsError(null);

        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();

        if (!isMounted) return;

        if (data?.data?.recipe) {
          setRecipeDetailsData(data.data);
        } else {
          setDetailsError("Recipe not found.");
        }
      } catch (e) {
        if (!isMounted) return;
        setDetailsError("Failed to load recipe details.");
      } finally {
        if (isMounted) setDetailsLoading(false);
      }
    }

    getRecipeDetails();

    return () => {
      isMounted = false;
    };
  }, [id, setRecipeDetailsData]);

  const currentRecipe = recipeDetailsData?.recipe;
  const isFavorite = favoritesList?.some((item) => item.id === currentRecipe?.id) ?? false;

  if (detailsLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center rounded-[2rem] bg-white/80 p-8 shadow-sm">
        <p className="text-lg font-semibold text-slate-700">Loading recipe details...</p>
      </div>
    );
  }

  if (detailsError) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center rounded-[2rem] bg-white/80 p-8 shadow-sm">
        <p className="text-center text-lg font-semibold text-slate-700">{detailsError}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 rounded-[2rem] bg-white/80 p-4 shadow-sm sm:p-6 md:grid-cols-2 lg:p-8">
      <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
        <img
          src={currentRecipe?.image_url}
          alt={currentRecipe?.title || "recipe"}
          className="h-full w-full object-cover duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">
            {currentRecipe?.publisher || "Recipe"}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            {currentRecipe?.title || "Recipe details"}
          </h3>
        </div>

        <button
          onClick={() => currentRecipe && handleAddToFavorite(currentRecipe)}
          className="w-fit rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-slate-700"
          disabled={!currentRecipe}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>

        <div>
          <h4 className="text-xl font-semibold text-slate-900">Ingredients</h4>
          <ul className="mt-3 flex flex-col gap-3">
            {currentRecipe?.ingredients?.length ? (
              currentRecipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="ml-2">{ingredient.description}</span>
                </li>
              ))
            ) : (
              <li className="rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
                No ingredients listed for this recipe.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

