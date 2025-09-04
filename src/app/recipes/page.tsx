export default function RecipePage() {
    const recipes = [
        {
            id: 1, title: "Cheap High Protein Chick-Fil-A Hack", ingredients: "Chicken Nuggets, salad base, dressing", instructions: "Mix in a bowl and enjoy :)"
        },
        {
            id: 2, title: "5-Minute Ramen Upgrade", ingredients: "Ramen, egg, green onions", instructions: "Cook ramen, add egg and onion"
        },
    ]

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">Recipes</h1>
            <div className="grid gap-4">
                {recipes.map((recipe) => (
                    <a 
                    key={recipe.id}
                    href={`/recipes/${recipe.id}`}
                    className="p-4 border rounded-lg hover-bg-gray-50"
                    >
                        <h2 className="text-xl font-semibold">{recipe.title}</h2>
                        <p className="text-gray-600">{recipe.ingredients}</p>
                    </a>
                ))}
            </div>
        </main>
    )
}