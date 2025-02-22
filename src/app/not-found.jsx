import Link from "next/link";

const NotfoundPage = () => {
  return (
    <div>
      <h1>404 Not found</h1>
      <Link href="/"> go back to home</Link>
    </div>
  );
};

export default NotfoundPage;
