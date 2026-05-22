class ProjectCard extends HTMLElement {
  connectedCallback() {
    // gather attributes
    const href = this.getAttribute('href');
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const tags = this.getAttribute('tags').split(',');
    const coverImage = this.getAttribute('cover');

    // main container
    const container = document.createElement('a');
    container.className = "project-card";
    container.classList.add = "container";
    container.href = href;

    // card components

    const textContainer = document.createElement('div');
    textContainer.className = "text-container";
    const titleText = document.createElement('h1');
    titleText.textContent = title;

    const descriptionText = document.createElement('h3');
    descriptionText.textContent = description;

    const tagsList = document.createElement('ul');
    tagsList.className = "tags";
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      var li = document.createElement('li');
      li.textContent = tag;
      tagsList.appendChild(li);
    }

    const coverContainer = document.createElement('div');
    coverContainer.className = "cover-div";
    const cover = document.createElement('img');
    cover.src = coverImage;


    // append

    coverContainer.appendChild(cover);
    textContainer.appendChild(tagsList);
    textContainer.appendChild(titleText);
    textContainer.appendChild(descriptionText);
    container.appendChild(coverContainer);
    container.appendChild(textContainer);
    this.appendChild(container);
  }
}

// FUNCTIONS
function navListItem(href, name) {
  const item = document.createElement('li');
  const itemLink = document.createElement('a');

  itemLink.className = "nav-item";
  itemLink.href = href;
  itemLink.textContent = name;

  item.appendChild(itemLink);

  return item;
}

// define custom element
customElements.define('project-card', ProjectCard);
