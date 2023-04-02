// Create a function that displays the secondary menu after clicking on "News" in the main menu
function showSecondaryMenu() {
     // Get the secondary menu
     const secondaryMenu = document.getElementById("secondary-menu");
     // Get the news button
     const newsButton = document.getElementById("news-button");
     // Add a click event listener to the news button
     newsButton.addEventListener("click", function () {
          // Toggle the secondary menu
          secondaryMenu.classList.toggle("show");
     });
}