export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, date, tags } = post.metadata;
  const content = post.default;

  if (!post) throw error(404);
  return {
    content,
    title,
    date,
    tags,
  };
}
