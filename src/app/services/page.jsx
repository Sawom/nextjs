import Link from "next/link";
// dynamic route
const ServicesPage = () => {
  const data = [
    {
      _id: "1",
      name: "Web Development",
      description:
        "Build modern and responsive websites with the latest technologies.",
      price: 1200,
      category: "IT Services",
    },
    {
      _id: "2",
      name: "Graphic Design",
      description:
        "Create stunning visual designs for branding, marketing, and web use.",
      price: 800,
      category: "Design",
    },
    {
      _id: "3",
      name: "SEO Optimization",
      description:
        "Improve website ranking with SEO strategies and keyword research.",
      price: 500,
      category: "Marketing",
    },
    {
      _id: "4",
      name: "App Development",
      description: "Develop mobile applications for iOS and Android platforms.",
      price: 2500,
      category: "IT Services",
    },
    {
      _id: "5",
      name: "Digital Marketing",
      description:
        "Boost online presence with social media and content marketing strategies.",
      price: 1000,
      category: "Marketing",
    },
  ];

  return (
    <div>
      <p className="font-bold text-3xl">this is services</p>
      {/* data map kore link e add korlam */}
      {data.map((data) => {
        return (
          <div>
            <Link href={`/services/${data._id}`}>{data.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesPage;
