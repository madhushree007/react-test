const fakePosts = {
  pages: [
    { id: 1, name: 'first post', body: 'this is the body' },
    { id: 2, name: 'second post', body: 'this is the body' },
  ],
};

export function useStages() {
  return fakePosts;
}