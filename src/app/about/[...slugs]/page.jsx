// catch all segments
export default async function AboutSlugPage({ params }) {
  const p = await params;
  console.log(p);
  return (
    <div>
      <h1>about slug page</h1>
    </div>
  );
}
