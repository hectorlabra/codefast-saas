import ButtonLogin from "@/components/ButtonLogin";
import FAQListItems from "@/components/FAQListItems";

export default function Home() {
  const isLoggedIn = true;
  const name = "Héctor";

  const pricingFeaturedList = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support",
  ];

  return (
    <main>
      {/* HEADER */}
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
      {/* HERO */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Collect customer feedback to build better products</h1>
        <div className="opacity-70 mb-10">
          Create a feedback board in minutes, prioritaze features, and build
          products your customer will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* PRICING */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">/month</div>
            </div>
            <ul className="space-y-2">
              {pricingFeaturedList.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-green-500 size-4">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full" />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">Frequently asked questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {
              [
                { question: "What do i get exactly", answer: "Loreum Ipsum" },
                { question: "How do I get started", answer: "Loreum Ipsum" },
                { question: "Do you offer a free plan", answer: "Loreum Ipsum" },
              ].map((qa) => (
                <FAQListItems key={qa.question} qa={qa} />
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  );
}
