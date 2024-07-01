document.addEventListener('DOMContentLoaded', function() {
    const postTitle = document.getElementById('postTitle');
    const postContent = document.getElementById('postContent');
    const postAuthor = document.getElementById('postAuthor');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postId = urlParams.get('id');

    let posts = localStorage.getItem('posts');
    if (posts) {
        posts = JSON.parse(posts);
        const post = posts[postId];

        if (post) {
            postTitle.textContent = post.title;
            postContent.textContent = post.content;
            postAuthor.textContent = `- ${post.author}`;
           

        } else {
            postTitle.textContent = 'Post not found';
            postContent.textContent = '';
            postAuthor.textContent = '';
        }
    }
});
