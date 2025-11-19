// components/TrustedCompanies.tsx
import Image from "next/image";

export default function TrustedCompanies() {
  const companies = Array(6).fill("/spotify.svg");

  return (
    <section
      className="max-w-screen w-full z-10 h-full flex py-32 gap-32 flex-wrap max-lg:px-5 max-md:gap-10 max-md:px-5"
      aria-label="Trusted Companies"
    >
      {companies.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt="Logos of trusted companies"
          width={100}
          height={40}
          className="w-[120px] h-10"
        />
      ))}
    </section>
  );
}
