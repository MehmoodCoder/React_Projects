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

        if (data?.data) {
          setRecipeDetailsData(data?.data);
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
  const isFavorite =
    favoritesList?.some((item) => item.id === currentRecipe?.id) ?? false;

  if (detailsLoading) return <div className="py-10">Loading... Please wait!</div>;
  if (detailsError)
    return (
      <div className="py-10">
        <p className="text-center text-black font-semibold">{detailsError}</p>
      </div>
    );

  return (
    <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full">
        <div className="aspect-[4/3] overflow-hidden rounded-xl group bg-white/75">
          <img
            src={currentRecipe?.image_url}
            alt="recipe"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <span className="text-sm text-cyan-700 font-medium">
            {currentRecipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {currentRecipe?.title}
          </h3>
        </div>

        <button
          onClick={() => currentRecipe && handleAddToFavorite(currentRecipe)}
          className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white w-fit"
          disabled={!currentRecipe}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>

        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 mt-3">
            {currentRecipe?.ingredients?.map((ingredient, idx) => (
              <li key={idx} className="rounded-lg bg-white/70 p-3">
                <span className="text-lg font-semibold text-black block">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-base font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

