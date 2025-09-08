import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-amber-50">
      <section className="w-full max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">
          MealShare
        </h1>
        <p className="text-lg text-neutral-700 mb-8">
          Share and discover tasty recipes from fellow college classmates!
        </p>
        <Link href="/recipes">
          <button className="btn">Browse Recipes</button>
        </Link>
      </section>

      <section className="w-full md:w-fit flex justify-center items-center mt-5">
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
