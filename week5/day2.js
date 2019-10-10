var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
      alreadyRead: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
      alreadyRead: true
    }
  ];
  
  let newWrapperElement = document.createElement("ul");
  for (let index = 0; index<books.length; index++){
    const book = books[index];
    let newElement = document.createElement("p");
    let newTitleElement = document.createElement("strong");
    let newTitleContent = document.createTextNode(book.title);
    let newContent = document.createTextNode(" by " + book.author);
    let newImage = document.createElement("img");
    newImage.src =book.cover;
    newImage.style.display = "block";

    if(book.alreadyRead){
        newTitleElement.style.color = "red";
    }
    newTitleElement.appendChild(newTitleContent);
    newElement.appendChild(newTitleElement);
    newElement.appendChild(newContent);
    newElement.appendChild(newImage);

    newWrapperElement.appendChild(newElement);
}
    document.body.appendChild(newWrapperElement);
  