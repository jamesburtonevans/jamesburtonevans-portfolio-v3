class NavBar extends HTMLElement {
  connectedCallback() {
    // main container
    const container = document.createElement('div');
    container.id = "nav-bar";
    container.className = "container";

    // logo
    const logoContainer = document.createElement('div');
    logoContainer.id = "logo";
    logoContainer.className = "container";

    const logoImg = document.createElement('img');
    logoImg.id = "logo-img";

    const logoText = document.createElement('span');
    logoText.id = "logo-text";
    logoText.textContent = "James Evans";

    // navigation
    const navContainer = document.createElement('div');
    navContainer.id = "links";
    navContainer.className = "container";

    const navList = document.createElement('ul');
    navList.id = "nav-list";

    // append
    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(logoText);

    navList.appendChild(navListItem("/", "Home"));
    navList.appendChild(navListItem("/about.html", "About"));
    navList.appendChild(navListItem("/", "Work"));
    navContainer.appendChild(navList);

    container.appendChild(logoContainer);
    container.appendChild(navContainer);

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
customElements.define('nav-bar', NavBar);
