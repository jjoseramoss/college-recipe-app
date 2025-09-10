"use client";

import { useState } from "react";

export default function AddRecipePage() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, ingredients, instructions });
        alert("Recipe submitted (check console)");
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] px-4">
            <section className="w-full max-w-lg bg-white/90 border border-neutral-200 rounded-xl shadow-sm p-8">
                <h1 className="text-2xl font-bold text-neutral-900 mb-6 tracking-tight">Add a Recipe</h1>
                <form className="space-y-5">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">Title</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="e.g. Easy Dorm Pasta"
                            
                            className="w-full border border-neutral-200 rounded-md px-3 py-2 text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="ingredients" className="block text-sm font-medium text-neutral-700 mb-1">Ingredients</label>
                        <textarea
                            id="ingredients"
                            placeholder="List ingredients, separated by commas"
                            
                            className="w-full border border-neutral-200 rounded-md px-3 py-2 text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition min-h-[60px] resize-y"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-neutral-700 mb-1">Instructions</label>
                        <textarea
                            id="instructions"
                            placeholder="Describe the steps..."
                            
                            className="w-full border border-neutral-200 rounded-md px-3 py-2 text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition min-h-[80px] resize-y"
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
            </section>
        </main>
    );
}