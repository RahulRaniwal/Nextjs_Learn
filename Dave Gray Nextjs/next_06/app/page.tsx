import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hanjii Good Morning Good ETM👋&nbsp;
        <br/>
        <span className="whitespace-nowrap">
          <span className="font-bold">Mera Naam Rahul he</span>
        </span>
      </p>
      <Posts/>
    </main>
  );
}
