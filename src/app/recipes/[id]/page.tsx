interface RecipePageProps {
    params: { id: string };
}

const recipes: Record<string, { title: string; instructions: string }> = {
    "1": { title: "Cheap High Protein Chick-Fil-A Hack", instructions: "Mix chicken nuggets and salad" },
    "2": { title: "5-Minute Ramen Upgrade", instructions: "Boil ramen, crack egg, add onions" },
};

export default function RecipeDetailPage({ params }: RecipePageProps) {
    const { id } = params;
    const recipe = recipes[id];

    if (!recipe) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center">
                <div className="rounded border border-red-200 bg-red-50 px-6 py-4 text-center">
                    <h1 className="text-lg font-semibold text-red-600">Recipe not found</h1>
                    <p className="mt-2 text-sm text-red-400">Sorry, we couldn&apos;t find that recipe.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-xl px-4 py-10">
            <section className="rounded-lg border border-neutral-200 bg-white/80 shadow-sm p-8">
                <h1 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">{recipe.title}</h1>
                <div className="h-px bg-neutral-200 mb-6" />
                <h2 className="text-base font-semibold text-neutral-700 mb-2">Instructions</h2>
                <p className="text-neutral-600 leading-relaxed">{recipe.instructions}</p>
            </section>
        </main>
    );
}