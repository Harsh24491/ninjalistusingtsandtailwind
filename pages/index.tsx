import Head from "next/head";
import Link from "next/link";


//export default function Home() {

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className="text-black text-center pb-5">Homepage</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <Link href="/ninjas/">
          <a className="block w-40 py-2 px-0 my-5 mx-auto text-white text-center rounded bg-blue-600 hover:bg-blue-900">See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
