"use client";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <p className="font-bold text-3xl">this is about page</p>
      <button type="button" className="mt-4" onClick={handleNavigation}>
        address page
      </button>
    </div>
  );
};

export default AboutPage;
