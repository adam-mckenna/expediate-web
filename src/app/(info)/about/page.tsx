import type { Metadata } from "next";

import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Expediate | Expediate",
  description: "Learn what Expediate is, why it was built, and who created it.",
};

const AboutPage = () => (
  <main className="text-slate-800">
    <header className="min-h-62 px-5 flex flex-col items-center justify-center gap-2 text-center py-8 md:py-12">
      <h1 className="font-serif text-3xl sm:text-h1 leading-tight tracking-tight font-normal">
        About Expediate
      </h1>
      <p className="text-body leading-relaxed text-[oklch(var(--color-text-neutral-soft))]">
        What is Expediate, who made it, and why?
      </p>
    </header>

    <section className="bg-white pb-2 lg:pb-12 pt-6">
      <div className="rich-text px-5 md:px-8 md:py-10 grid gap-4 max-w-2xl mx-auto pb-14">
        <h2 className="font-serif text-h2 leading-tight tracking-tight text-slate-800">
          What is Expediate?
        </h2>
        <p>Hey there! Welcome to Expediate 👋</p>
        <p>
          Expediate is a tool created for athletes to track their nutrition
          quickly and easily using the&nbsp;
          <a
            href="https://tr3.run/articles/diet-quality-score-dqs-explained"
            target="_blank"
            className="text-link hover:text-link-hover-alt underline"
          >
            DQS model
          </a>
          &nbsp; created by&nbsp;
          <a
            href="https://mattfitzgerald.org/"
            className="text-link hover:text-link-hover-alt underline"
          >
            Matt Fitzgerald
          </a>
          .
        </p>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          How to use Expediate
        </h2>
        <p>
          The core idea of Expediate is speed and simplicity. No rigorous food
          logging, no counting calories, no stress.
        </p>
        <p>
          Expediate follows the DQS model. If you don’t know how that works,
          give&nbsp;
          <a
            href="https://tr3.run/articles/diet-quality-score-dqs-explained"
            className="text-link hover:text-link-hover-alt underline"
          >
            this guide
          </a>
          &nbsp; a quick read before you start.
        </p>
        <p>
          Once you’ve understood how the DQS model works, go to the&nbsp;
          <a
            href={ROUTES.HOME}
            className="text-link hover:text-link-hover-alt underline"
          >
            Log Food
          </a>
          &nbsp; screen. In the text field, add your food as a comma separated
          list. For example, “50g oats, 200ml milk, a handful of chia seeds, 1
          banana...” and so on.
        </p>
        <p>
          Expediate will (hopefully) interpret your food log and give you a
          score based on both the quantity and quality of what you ate.
        </p>
        <p>And that’s it – for now, at least. This project is an MVP.</p>
        <p>
          More features, such as user accounts, saved logs, dietary suggestions
          and support for other food tracking models may come in the future.
        </p>
        <p>
          For now, though, please be patient if something doesn’t work – and let
          me know about it via the feedback form below.
        </p>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          About the developer
        </h2>
        <p>
          Hey, I’m&nbsp;
          <a
            href="https://adammckenna.online"
            target="_blank"
            className="text-link hover:text-link-hover-alt underline"
          >
            Adam
          </a>
          . I’m a developer by day, and a keen runner in every gap between. I’m
          also a co-founder of&nbsp;
          <a
            href={ROUTES.ARTICLES}
            target="_blank"
            className="text-link hover:text-link-hover-alt underline"
          >
            tr3
          </a>
          .
        </p>
        <p>
          I developed this app as a side-project to practise my Node.js skills.
          I also created it because I believe that the DQS model is a fantastic
          alternative to rigid calorie counting – but you can read more about
          that&nbsp;
          <a
            href={ROUTES.ARTICLES}
            target="_blank"
            className="text-link hover:text-link-hover-alt underline"
          >
            here
          </a>
          .
        </p>

        <h2 className="font-serif text-h2 leading-tight tracking-tight mt-6 text-slate-800">
          Feedback
        </h2>
        <p>
          If you’re using this app and you have feedback, good or bad, I’d love
          to hear it. You can give feedback via this&nbsp;
          <a
            href="https://forms.gle/mpg6tVbePJkPQQQ18"
            className="text-link hover:text-link-hover-alt underline"
          >
            Google Form
          </a>
          &nbsp; – I’ll be super grateful.
        </p>
      </div>
    </section>
  </main>
);

export default AboutPage;
