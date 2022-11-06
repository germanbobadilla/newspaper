export const newsTemplate = `
     <div class="child-slide active" id="child-slide">
      <a href=${getArticles[i].url} target="_blank"><img src="${getArticles[i].urlToImage}" alt="${getArticles.title}"></a>
      <a href=${getArticles[i].url} target="_blank"><h2>${getArticles[i].title}</h2></a>
      <p>${getArticles[i].description}</p>
     </div>
`;
