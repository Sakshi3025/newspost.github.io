document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');

    function renderPosts() {
        let posts = localStorage.getItem('posts');
        postsContainer.innerHTML = '';
        if (posts) {
            posts = JSON.parse(posts);
            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2><a href="post-template.html?id=${index}" target="_blank">${post.title}</a></h2>
                    <p>${post.content.substring(0, 100)}...</p>
                    <p class="author">- ${post.author}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        }
    }

    renderPosts();
});
