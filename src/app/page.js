"use client";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  // const data = await getData();

  if (session) {
    //logged in code
    return (
      <div>
        <p>Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <main className="bg-gray-100">
      {/* <Header /> */}
      {/* <main className="max-w-screen-2xl mx-auto"> */}
      {/* banner */}
      {/* <Banner /> */}
      {/* ProductFeed */}
      {/* <ProductFeed products={data} /> */}
      {/* </main> */}

      <p>Not Signed In</p>
      <button
        className="bg-blue-600 py-2 px-6 rounded-md mb-2"
        onClick={signIn}
      >
        Sign in with google
      </button>
      <button
        className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
        onClick={signIn}
      >
        Sign in with github
      </button>
    </main>
  );
}

// async function getData() {
//   const products = await fetch("https://fakestoreapi.com/products");

//   if (!products.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return products.json();
// }

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
