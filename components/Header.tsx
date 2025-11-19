export default function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto md:h-screen flex flex-col items-start gap-[255px] py-[100px] px-8 w-full overflow-hidden justify-center max-lg:px-[100px] max-lg:py-10 max-lg:gap-[150px] max-md:px-10 max-md:pt-20 max-md:pb-5 max-md:gap-[100px] max-md:h-[50vh] max-md:min-h-[600px]">
      <video
        className="absolute top-0 left-0 w-full h-[50vh] object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        <source src="/hero-background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-[50vh] md:h-screen bg-linear-to-b from-[rgba(16,16,16,0.7)] to-[rgba(16,16,16,0.9)] z-1 max-md:from-[rgba(16,16,16,0.8)] max-md:to-[rgba(16,16,16,0.95)]"></div>

      <section className="relative z-2 flex flex-col w-full items-start justify-center gap-8 max-lg:w-full max-md:w-full">
        <h1 className="relative self-stretch font-['Poppins'] font-semibold text-[80px] leading-[100px] max-lg:text-[60px] max-lg:leading-20 max-md:text-[40px] max-md:leading-[50px] max-sm:text-[32px] max-sm:leading-10">
          <span className="text-secondary">Turning</span>
          <span className="text-primary"> Great Ideas</span>
          <br />
          <span className="text-secondary">Into Meaningful</span>
          <br />
          <span className="text-primary"> Digital Experience</span>
        </h1>
        <p className="relative w-[910px] font-['Poppins'] font-normal text-secondary text-lg leading-8 max-lg:w-full max-md:w-full max-sm:text-base max-sm:leading-7">
          Where design meets technology, your ideas come alive; crafted into
          digital experiences that inspire and delight.
        </p>
      </section>
    </header>
  );
}
