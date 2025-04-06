// Fetch the list of articles and display them as links
fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const articleList = document.getElementById('article-list');
    
    // Loop through articles and create a list item with a link for each one
    data.articles.forEach(article => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `article.html?id=${article.id}`;  // Link to article page with article ID in the URL
      link.textContent = article.title;  // Display article title as the link text
      listItem.appendChild(link);
      articleList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching articles:', error));

