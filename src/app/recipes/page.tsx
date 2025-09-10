"use client";
import { useState, useRef } from "react";
export default function RecipePage() {

  type RecipeType = {
    id: number;
    title: string;
    ingredients: string;
    instructions: string;
    cost: number;
  }

  const idRef = useRef(1);

//   const recipes = [
//     {
//       id: 1,
//       title: "Cheap High Protein Chick-Fil-A Hack",
//       ingredients: "Chicken Nuggets, salad base, dressing",
//       instructions: "Mix in a bowl and enjoy :)",
//       cost: 12,
//     },
//     {
//       id: 2,
//       title: "5-Minute Ramen Upgrade",
//       ingredients: "Ramen, egg, green onions",
//       instructions: "Cook ramen, add egg and onion",
//       cost: 5,
//     },
//   ];

  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  //Functions

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const costNumber = parseFloat(cost) || 0;

    const fullRecipe = {
        id: idRef.current,
        title: title,
        ingredients: ingredients,
        instructions: instructions,
        cost: costNumber,
    }

    setRecipes([...recipes, fullRecipe]);

    // Reset Values
    idRef.current += 1;
    setTitle("");
    setIngredients("");
    setInstructions("")
    setCost("");


    alert(`${title} ${ingredients}  ${instructions} $ -  ${cost}`)
  }


  return (
    <main className="flex flex-col items-center min-h-[70vh] px-4 py-10">
      <section className="w-full max-w-2xl">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-bold text-neutral-900 mb-8 tracking-tight">
            Recipes
          </h1>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn rounded-xl"
            onClick={() => {
                const dialog = document.getElementById("add_recipe_modal") as HTMLDialogElement | null;
                dialog?.showModal();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
          </button>
          <dialog id="add_recipe_modal" className="modal text-white">
            <div className="modal-box w-full max-w-lg bg-white/90 border border-neutral-200 rounded-xl shadow-sm p-8">
                <h1 className="text-2xl font-bold text-neutral-900 mb-6 tracking-tight">Add a Recipe</h1>
                <form method="dialog" onSubmit={handleSubmit} className="space-y-5 modal-backdrop">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">Title</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="e.g. Easy Dorm Pasta"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-neutral-200 rounded-md px-3 py-2 text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="ingredients" className="block text-sm font-medium text-neutral-700 mb-1">Ingredients</label>
                        <textarea
                            id="ingredients"
                            placeholder="List ingredients, separated by commas"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            className="w-full border border-neutral-200 rounded-md px-3 py-2 text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition min-h-[60px] resize-y"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-neutral-700 mb-1">Instructions</label>
                        <textarea
                            id="instructions"
                            placeholder="Describe the steps..."
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            className="w-full border border-neutral-200 rounded-md px-3 py-2 text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition min-h-[80px] resize-y"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="cost" className="block text-sm font-medium text-neutral-700 mb-1">Cost</label>
                        <input
                            type="number"
                            id="cost"
                            placeholder="$ Total Cost "
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            className="w-full border border-neutral-200 rounded-md px-3 py-2 text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition min-h-[40px] resize-y"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-sm transition"
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
          </dialog>
        </div>
        <div className="grid gap-6">
          {recipes.map((recipe) => (
            <a
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="block rounded-xl border border-neutral-200 bg-white/90 shadow-sm p-6 hover:bg-blue-50 transition"
            >
              <h2 className="text-lg font-semibold text-neutral-900 mb-1">
                {recipe.title}
              </h2>
              <p className="text-sm text-neutral-600">{recipe.ingredients}</p>
              <p className="text-sm text-green-400">${recipe.cost}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
