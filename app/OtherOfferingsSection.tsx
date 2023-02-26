export const OtherOfferingsSection = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-row justify-center">
        <p className="mx-12 md:mx-24 xl:mx-80 text-slate-300 text-4xl">
          <span>{"I also offer independant programming services. "}</span>
          <span className="text-white font-semibold">
            {"Need an extra pair of hands on an existing project? "}
          </span>
          <a href="https://calendly.com/ashmidgley/chat" className="text-yellow-300 underline">{"Let's talk"}</a>
          <span>{"."}</span>
        </p>
      </div>
    </div>
  );
};
