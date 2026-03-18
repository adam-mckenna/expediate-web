import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DQS explained | Expediate",
  description:
    "A plain-language guide to the Diet Quality Score system Expediate uses.",
};

const DQSExplainedPage = () => (
  <main className="text-slate-800">
    <header className="min-h-62 px-5 flex flex-col items-center justify-center gap-2 text-center py-8 md:py-12">
      <h1 className="font-serif text-3xl sm:text-h1 leading-tight tracking-tight font-normal">
        DQS Explained
      </h1>
      <p className="text-body leading-relaxed text-[oklch(var(--color-text-neutral-soft))]">
        What is DQS, and how does it work?
      </p>
    </header>

    <section className="bg-white pb-2 lg:pb-12 pt-6">
      <div className="rich-text px-5 md:px-8 md:py-10 grid gap-4 max-w-2xl mx-auto pb-14">
        <h2 className="font-serif text-h2 leading-tight tracking-tight text-slate-800">
          What is DQS?
        </h2>
        <p>
          DQS is an acronym for &quot;Diet Quality Score,&quot; a system created
          by{" "}
          <a
            href="https://mattfitzgerald.org/"
            className="text-link hover:text-link-hover-alt underline"
            target="_blank"
          >
            Matt Fitzgerald
          </a>{" "}
          for athletes to easily track their nutrition.
        </p>
        <p>
          It is a useful middle ground for those who want to gauge the quality
          of their diet, but don&apos;t have the time or energy to rigidly count
          calories.
        </p>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          So, how does it work?
        </h2>
        <p>The DQS system is pretty simple. This is how it works in general:</p>
        <ol className="list-decimal pl-5 space-y-[10px]">
          <li>
            <strong>Keep track of your food intake.</strong> Keep a simple list
            of everything you ate throughout the day, and a rough quantity. For
            example: &quot;50g oats, 200ml milk, a handful of chia seeds, 1
            banana...&quot; and so on.
          </li>
          <li>
            <strong>Assign each item a category.</strong> There are 10
            categories in the DQS system, and most foods can be assigned to one
            of these. Those that can&apos;t count as a neutral score (0).
          </li>
          <li>
            <strong>
              Assign each item a score based on category and quantity.
            </strong>{" "}
            Some foods give positive scores, while others negative. There is a
            scoring matrix that is based on both the category of food
            you&apos;ve eaten, and the amount. For instance, while eating dairy
            provides positive scores initially, you will start losing points if
            you eat too much.
          </li>
        </ol>
        <p>
          If you want to know more about how it works, you can read{" "}
          <a
            href="https://tr3.run/articles/diet-quality-score-dqs-explained"
            className="text-link hover:text-link-hover-alt underline"
            target="_blank"
          >
            this guide
          </a>
          .
        </p>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          The Categories
        </h2>
        <ol className="list-decimal pl-5 space-y-[10px]">
          <li>
            <strong>Fruits:</strong> apples, oranges, bananas, strawberries,
            natural juices, etc.&nbsp;
            <Link
              href="/categories/fruit"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Vegetables:</strong> potatoes, broccoli, cabbage, courgette,
            aubergine, onions, bell peppers, tomatoes, legumes, etc.&nbsp;
            <Link
              href="/categories/vegetables"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Lean meats &amp; fish:</strong> eggs, salmon, mackerel, lean
            turkey mince, chicken breast, etc.&nbsp;
            <Link
              href="/categories/lean-meat-and-fish"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Nuts &amp; seeds:</strong> peanuts, almonds, chia seeds,
            flax, linseed, nut butters, etc.&nbsp;
            <Link
              href="/categories/nuts-seeds"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Whole grains:</strong> grains that are unrefined, such as
            brown rice, wholemeal bread, wholegrain pasta, rye crackers, quinoa,
            popcorn, etc.&nbsp;
            <Link
              href="/categories/whole-grains"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Dairy:</strong> natural dairy products, such as cheeses
            (feta, halloumi, cheddar, etc), milk, yoghurt, kefir, cottage
            cheese, etc.&nbsp;
            <Link
              href="/categories/dairy"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Refined grains:</strong> grains that have been refined, such
            as white rice, white bread, white pasta, crackers, etc.&nbsp;
            <Link
              href="/categories/refined-grains"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Sweets:</strong> foods high in sugar, such as ice cream,
            biscuits, cake, chocolate, candies, soft drinks, etc.&nbsp;
            <Link
              href="/categories/sweets"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Fried foods:</strong> foods that have been deep fried, such
            as fried chicken, chips/fries, crisps/chips, tempura, etc.&nbsp;
            <Link
              href="/categories/fried-foods"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
          <li>
            <strong>Fatty proteins:</strong> proteins that are high in fat, such
            as sausages, chicken thigh, steak, etc.&nbsp;
            <Link
              href="/categories/fatty-proteins"
              className="text-link hover:text-link-hover-alt underline"
            >
              View the full list.
            </Link>
          </li>
        </ol>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          Serving Sizes
        </h2>
        <p>
          Fitzgerald suggests following &quot;common sense&quot; serving sizes.
          In his own words:
        </p>
        <p>
          &quot;With high-quality foods, I believe in using commonsense
          guidelines for serving sizes that are based on the amounts we
          typically eat.
        </p>
        <p>
          While it is often said that we tend to eat excessively large portions
          these days, this is typically not the case with high-quality foods
          such as vegetables and whole grains.
        </p>
        <p>
          The thing to watch out for is counting too small a portion of a
          high-quality food as a serving. A packet of ketchup does not count as
          a vegetable serving (and not because it&apos;s technically a
          fruit)&quot;
        </p>
        <ol className="list-decimal pl-5 space-y-[10px]">
          <li>
            <strong>Fruit serving:</strong> one piece of medium-sized fruit, a
            big handful of berries or a medium-size glass of 100% fruit juice.
          </li>
          <li>
            <strong>Vegetable serving:</strong> fist-size portion of whole
            vegetables, a 1/2 cup of tomato sauce or a medium-size bowl of
            vegetable soup.
          </li>
          <li>
            <strong>Lean meats &amp; fish serving:</strong> fist-size portion of
            meat or fish.
          </li>
          <li>
            <strong>Nuts &amp; seeds:</strong> palm-full of nuts/seeds or a
            heaping tablespoon of nut/seed butter.
          </li>
          <li>
            <strong>Whole grains:</strong> fist-size portion of rice, a
            medium-size bowl of pasta or cereal or two slices of bread.
          </li>
          <li>
            <strong>Dairy:</strong> glass of milk (or the amount you&apos;d
            typically use in cereal), two slices of deli cheese, a
            single-serving tub of yoghurt.
          </li>
          <li>
            <strong>Refined grains:</strong> fist-size portion of rice, a
            medium-size bowl of pasta or cereal or two slices of bread.
          </li>
          <li>
            <strong>Sweets:</strong> one small cookie, 12oz of soda, 1
            label-defined serving of sweets or chocolate (unless 80%+ cocoa),
            one regular slice of cake, or scoop or bowl of ice cream.
          </li>
          <li>
            <strong>Fried foods:</strong> one small bag of crisps, one fried
            hamburger patty, 3–4 fried wings, small portion chips or one
            doughnut or churro.
          </li>
          <li>
            <strong>Fatty proteins:</strong> as per lean meats, a fist-size
            portion of meat.
          </li>
        </ol>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          Combination foods
        </h2>
        <p>
          Some foods are made up of two or more of these categories. Pepperoni
          pizza, for instance, is comprised of (at least): fatty protein, dairy
          (cheese), refined grains and vegetables (tomato sauce).
        </p>
        <p>
          For such complex foods, Fitzgerald recommends separating them into
          their consistent parts and scoring each separately. We recommend using
          Expediate in the same way.
        </p>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          Scoring
        </h2>
        <p>
          Once you have figured out what the portions you have consumed are, you
          can use this matrix to score your day.
        </p>
        <p>
          If you&apos;re using Expediate, you don&apos;t need to worry about
          this matrix. We&apos;ll calculate your score for you.
        </p>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          What about other foods?
        </h2>
        <p>
          There are many foodstuffs not covered by the DQS system, for example:
        </p>
        <ol className="list-decimal pl-5 space-y-[10px]">
          <li>
            <strong>Condiments, sauces and spreads:</strong> if used in
            moderation, these should not be scored. If using heavy loads of
            mayo, buffalo sauce or similar fatty sauces, these should be counted
            as negative points (-1 per portion).
          </li>
          <li>
            <strong>Alcohol:</strong> each day, any alcoholic drink after your
            first is counted as -2.
          </li>
          <li>
            <strong>Coffee and tea:</strong> regular coffee and tea has no
            negative score associated with it (and&nbsp;
            <a
              href="https://zoe.com/learn/coffee-gut-bacteria-zoe-study?srsltid=AfmBOoqv5l2Nb0LbTVE7DFskp7mny_zQ9ff-YRugWARbjLVpqpkcmiC3"
              className="text-link hover:text-link-hover-alt underline"
              target="_blank"
            >
              coffee in particular is purportedly excellent for gut health
            </a>
            ). If you use sugar or syrups, these count as &quot;sweets&quot;.
          </li>
          <li>
            <strong>Sport fuel:</strong> isotonic drinks, energy bars and so on
            do not count positively or negatively towards score when used during
            exercise. If consumed outside of exercise and made primarily from
            whole grains they can be scored +1 for the first, -1 for the second
            and -2 for each consumed thereafter. Those that are primarily sugar
            should be counted as &quot;sweets&quot;.
          </li>
        </ol>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          FAQs
        </h2>
        <p>
          <strong>What about fats, such as olive oil or butter?</strong>
        </p>
        <p>
          There are many schools of thought on fat and their impact on the body,
          positive or negative.&nbsp;
          <a
            href="https://www.trainingpeaks.com/blog/fat-and-the-endurance-athlete/"
            className="text-link hover:text-link-hover-alt underline"
            target="_blank"
          >
            Fitzgerald doesn&apos;t believe they&apos;re harmful.
          </a>
        </p>
        <p>
          Despite that, he hasn&apos;t provided any clear guidance on how to
          score fats. We suggest that you treat them as condiments, sauces and
          spreads (read above): using fats sparingly doesn&apos;t require
          mention. If you use a lot, you should mark each serving as -1.
        </p>
        <p>
          <strong>
            Why doesn&apos;t condiments, sauces, spreads and alcohol count in
            Expediate?
          </strong>
        </p>
        <p>
          While Fitzgerald suggests marking these down, we haven&apos;t
          developed that functionality yet. If that&apos;s something you&apos;re
          particularly interested in, please let us know via this{" "}
          <a
            href="https://forms.gle/mpg6tVbePJkPQQQ18"
            className="text-link hover:text-link-hover-alt underline"
          >
            Google Form
          </a>
          .
        </p>
      </div>
    </section>
  </main>
);

export default DQSExplainedPage;
