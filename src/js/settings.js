export const select = {
  cartPoducts : '#template-products',
  productsContainer: '[data-container="productsContainer"]',
  product: '#product',
  contact: '#contact-us',
  startingPages: '#product, #contact-us',
  home: '#home',
  footer: 'footer',
  about:'#about',
  pages: '#home, #product, #contact-us',
  links: '.nav-link',
  hidden: 'hidden',
};

export const settings = {
  db: {
    url: '//localhost:3131',
    data: 'data',
  }
};


export const templates = {
  cartProducts: Handlebars.compile(document.querySelector(select.cartPoducts).innerHTML),
};
