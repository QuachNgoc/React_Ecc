const handleTime = (date) => {
  return (
    // (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    // "/" +
    // (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    // "/" +
    // date.getFullYear()
    date
  );
};

export default function handleGetPostsByType(data, type = "news") {
  if (typeof data === "undefined") {return}
  const results = data.filter((item) => item.type === type);
  const resultsFormatDate = results.map((item) => {
    return {
      ...item,
      time: handleTime(item.time),
    };
  });
  return resultsFormatDate || [];
}

export function handleGetPostById(data, id = 1) {
  if (typeof data === "undefined") {return}
  const post = data.find((item) => item.id === id) || null;
  return { ...post, time: handleTime(post.time) };
}

export function handleGetPostRelate(data, topic, id = 1) {
  const posts = handleGetPostsByType(data, topic);
  const results = posts.filter((item) => item.id !== id);
  return results || [];
}

export function handleGetPostByAuthor(data, author_id = 1) {
  if (typeof data === "undefined") {return}
  const results = data.filter((item) => item.author_id === author_id);
  return handlePosts(results) || [];
}

export function handlePosts(data) {
  if (typeof data === "undefined") {return};
  const resultsFormatDate = Object.values(data).map((item) => {
    return {
      ...item,
      time: handleTime(item.time),
    };
  });
  return resultsFormatDate || [];
}
