export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

const Singlepost = async ({ params }) => {
  const post = await params;
  const singlePost = await getSinglePost(post.id);
  return (
    <div>
      <p> {JSON.stringify(singlePost)} </p>
      <h2 className="text-2xl">{singlePost.title}</h2>
      <p>{singlePost.body}</p>
    </div>
  );
};

export default Singlepost;
