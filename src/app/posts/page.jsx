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
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
