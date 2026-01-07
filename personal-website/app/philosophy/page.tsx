export const metadata = {
  title: "Philosophy | Name Surname",
  description: "Core beliefs and operating principles.",
};

export default function Philosophy() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-12 text-4xl font-bold tracking-tight text-black dark:text-white">
        My Philosophy
      </h1>

      <div className="prose prose-lg dark:prose-invert prose-gray">
        <p className="lead text-xl text-gray-500 mb-8">
          I believe that technology without ethics is dangerous, and intention without action is wasted.
        </p>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">1. Build Systems, Not Just Tools</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Tools solve isolated problems. Systems solve classes of problems. When expanding Build Myanmar,
            we didn&apos;t just host events; we built a self-reinforcing flywheel of education, media, and physical space
            that allowed the ecosystem to grow without constant intervention.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">2. Long-term Games with Long-term People</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Compound interest applies to relationships just as much as wealth. I invest in people who are
            committed to the decade-long journey of rebuilding our nation.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">3. Radical Truth</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Progress starts with acknowledging reality. Whether in a startup or a country,
            avoiding hard truths leads to decay. We must look at the data, the feedback, and the human cost
            with unblinking eyes.
          </p>
        </section>
      </div>
    </div>
  );
}
