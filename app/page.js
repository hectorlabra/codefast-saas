import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Héctor";

  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="font-bold">CodeFastSaaS</div>
          <div className="space-x-4 hidden md:block">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Collect customer feedback to build better products</h1>
        <div className="opacity-70 mb-10">
          Create a feedback board in minutes, prioritaze features, and build
          products your customer will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
