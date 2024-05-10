Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname.startsWith('/static/js/views/Dashboard')) {
      return new Response(Bun.file('frontend/static/js/views/Dashboard.js'));
    }
    else if (url.pathname.startsWith('/static/js/views/Post')) {
      return new Response(Bun.file('frontend/static/js/views/Post.js'));
    }
    else if (url.pathname.startsWith('/static/js/views/Setting')) {
      return new Response(Bun.file('frontend/static/js/views/Setting.js'));
    }

    else if (url.pathname.startsWith('/static')) {
      return new Response(Bun.file('frontend/static/js/index.js'));
    }

    return new Response(Bun.file('frontend/index.html'));
  },
});