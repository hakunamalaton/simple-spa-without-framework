Bun.serve({
  fetch() {
    return new Response(Bun.file('frontend/index.html'));
  },
});