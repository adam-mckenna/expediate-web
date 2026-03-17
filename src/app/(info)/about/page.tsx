import { ROUTES } from "@/lib/constants";

const AboutPage = () => (
  <main className="text-slate-800">
    <header className="min-h-62 flex flex-col items-center justify-center gap-1">
      <h1 className="font-serif">About Expediate</h1>
      <p className="text-[16px] leading-[140%] text-[#757575]">
        What is Expediate, who made it, and why?
      </p>
    </header>

    <section className="bg-white pb-8 pt-4">
      <div className="p-4 md:p-8 grid gap-[10px] max-w-2xl mx-auto pb-12 text-[#5A5A5A]">
        <h2 className="font-serif text-xl text-slate-800">
          What is Expediate?
        </h2>
        <p>Hey there! Welcome to Expediate 👋</p>
        <p>
          Expediate is a tool created for athletes to track their nutrition
          quickly and easily using the{" "}
          <a
            href="https://tr3.run/articles/diet-quality-score-dqs-explained"
            target="_blank"
            className="text-[#088FC4] underline"
          >
            DQS model
          </a>{" "}
          created by&nbsp;
          <a
            href="https://mattfitzgerald.org/"
            className="text-[#088FC4] underline"
          >
            Matt Fitzgerald
          </a>
          .
        </p>

        <h2 className="font-serif text-xl mt-6 text-slate-800">
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
            className="text-[#088FC4] underline"
          >
            this guide
          </a>
          &nbsp; a quick read before you start.
        </p>
        <p>
          Once you’ve understood how the DQS model works, go to the&nbsp;
          <a href={ROUTES.HOME} className="text-[#088FC4] underline">
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

        <h2 className="font-serif text-xl mt-6 text-slate-800">
          About the developer
        </h2>
        <p>
          Hey, I’m{" "}
          <a
            href="https://adammckenna.online"
            target="_blank"
            className="text-[#088FC4] underline"
          >
            Adam
          </a>
          . I’m a developer by day, and a keen runner in every gap between. I’m
          also a co-founder of&nbsp;
          <a
            href={ROUTES.ARTICLES}
            target="_blank"
            className="text-[#088FC4] underline"
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
            className="text-[#088FC4] underline"
          >
            here
          </a>
          .
        </p>

        <h2 className="font-serif text-xl mt-6 text-slate-800">Feedback</h2>
        <p>
          If you’re using this app and you have feedback, good or bad, I’d love
          to hear it. You can give feedback via this&nbsp;
          <a
            href="https://forms.gle/mpg6tVbePJkPQQQ18"
            className="text-[#088FC4] underline"
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
