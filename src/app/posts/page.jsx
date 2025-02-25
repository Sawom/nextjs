import Link from "next/link";

export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPost();

  return (
    <div className="space-y-5">
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id}>
            <p>{singlePost.title}</p>
            <p> {singlePost.body} </p>
            <Link href={`/posts/${singlePost.id}`}>
              <button className="bg-green-500 px-4"> details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
