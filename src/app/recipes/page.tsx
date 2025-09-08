export default function RecipePage() {
    const recipes = [
        {
            id: 1,
            title: "Cheap High Protein Chick-Fil-A Hack",
            ingredients: "Chicken Nuggets, salad base, dressing",
            instructions: "Mix in a bowl and enjoy :)"
        },
        {
            id: 2,
            title: "5-Minute Ramen Upgrade",
            ingredients: "Ramen, egg, green onions",
            instructions: "Cook ramen, add egg and onion"
        },
    ];

    return (
        <main className="flex flex-col items-center min-h-[70vh] px-4 py-10">
            <section className="w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-neutral-900 mb-8 tracking-tight">Recipes</h1>
                <div className="grid gap-6">
                    {recipes.map((recipe) => (
                        <a
                            key={recipe.id}
                            href={`/recipes/${recipe.id}`}
                            className="block rounded-xl border border-neutral-200 bg-white/90 shadow-sm p-6 hover:bg-blue-50 transition"
                        >
                            <h2 className="text-lg font-semibold text-neutral-900 mb-1">{recipe.title}</h2>
                            <p className="text-sm text-neutral-600">{recipe.ingredients}</p>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}