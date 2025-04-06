// Helper function to load JSON data (articles)
function loadArticles() {
  fetch('articles.json')
    .then(response => response.json())
    .then(data => {
      // On the landing page (index.html), populate the article list
      if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        displayArticleLinks(data);
      }

      // On an article page (template.html), populate the article content
      else if (window.location.pathname.includes('article')) {
        const articleId = window.location.pathname.split('/').pop();
        displayArticleContent(data, articleId);
      }
    })
    .catch(error => {
      console.error('Error loading articles:', error);
    });
}

// Function to display the list of article links on the landing page
function displayArticleLinks(articles) {
  const container = document.getElementById('article-links');
  container.innerHTML = ''; // Clear any existing content

  articles.forEach(article => {
    const articleLink = document.createElement('a');
    articleLink.classList.add('article-link');
    articleLink.href = `/article/${article.id}.html`; // Link to the individual article page
    articleLink.textContent = article.title;

    container.appendChild(articleLink);
  });
}

// Function to display the content of an individual article
function displayArticleContent(articles, articleId) {
  const article = articles.find(a => a.id === articleId);

  if (article) {
    const contentContainer = document.getElementById('article-content');
    contentContainer.innerHTML = `
      <h1>${article.title}</h1>
      <p><strong>Summary:</strong> ${article.summary}</p>
      <p>This is where the full content of the article would go.</p>
    `;
  }
}

// Load articles when the script runs
document.addEventListener('DOMContentLoaded', loadArticles);
