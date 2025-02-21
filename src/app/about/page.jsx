import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <p className="font-bold text-3xl">this is about page</p>
      <Link href="/about/address"></Link>
    </div>
  );
};

export default AboutPage;
