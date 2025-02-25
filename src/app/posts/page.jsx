export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPost();

  return (
    <div>
      <p>{JSON.stringify(posts)}</p>
    </div>
  );
};

export default Posts;
