import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default async function Home() {
  const data = await getData();
  return (
    <main className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={data} />
      </main>
    </main>
  );
}

async function getData() {
  const products = await fetch("https://fakestoreapi.com/products");

  if (!products.ok) {
    throw new Error("Failed to fetch data");
  }
  return products.json();
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }
