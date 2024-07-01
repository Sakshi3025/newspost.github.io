document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const adminPostsContainer = document.getElementById('adminPostsContainer');

    function renderPosts() {
        let posts = localStorage.getItem('posts');
        adminPostsContainer.innerHTML = '';
        if (posts) {
            posts = JSON.parse(posts);
            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <p class="author">- ${post.author}</p>
                    <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
                `;
                adminPostsContainer.appendChild(postElement);
            });
        }
    }

    function deletePost(index) {
        let posts = localStorage.getItem('posts');
        if (posts) {
            posts = JSON.parse(posts);
            posts.splice(index, 1);
            localStorage.setItem('posts', JSON.stringify(posts));
            renderPosts();
        }
    }

    window.deletePost = deletePost;

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        
    

        let posts = localStorage.getItem('posts');
        if (posts) {
            posts = JSON.parse(posts);
        } else {
            posts = [];
        }

        posts.push({ title, content, author });
        localStorage.setItem('posts', JSON.stringify(posts));
        postForm.reset();
        renderPosts();
    });

    renderPosts();
});
