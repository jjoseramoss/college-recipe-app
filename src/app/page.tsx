import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-amber-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        College Recipe Book 
      </h1>

      <p className="text-lg text-gray-700">
        Share and discover tasty recipes from fellow college classmates! 
      </p>

      
      <Link href="/recipes" className="rounded-lg p-4 m-4 bg-blue-500 hover:bg-blue-700 text-white">Ingredients</Link>
    </main>
  )
}