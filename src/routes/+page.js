export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const posts = await response.json();

  const featuredPosts = posts.filter((post) => post.meta.featured === true);

  return {
    featuredPosts,
  };
};
