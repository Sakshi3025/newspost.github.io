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
    document.getElementById('postForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        
        const post = {
            id: new Date().getTime(), // Unique identifier for the post
            title: title,
            content: content,
            author: author
        };
    
        let posts = localStorage.getItem('posts');
        if (posts) {
            posts = JSON.parse(posts);
        } else {
            posts = [];
        }
    
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    
        window.location.href = 'admin.html';
    });
    
    renderPosts();
});
