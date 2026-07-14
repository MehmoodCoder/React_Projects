import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 overflow-hidden bg-slate-100 sm:h-52">
        <img
          src={item?.image_url}
          alt={item?.title || "recipe item"}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="text-sm font-semibold text-rose-600">
            {item?.publisher || "Popular Recipe"}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            {item?.title || "Recipe title"}
          </h3>
        </div>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="mt-auto w-fit rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-slate-700"
        >
          Recipe Details
        </Link>
      </div>
    </article>
  );
}