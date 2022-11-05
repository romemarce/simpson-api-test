const charcterFech = async (count = 10)=>{
  // sincronico
  // https://es.javascript.info/async-await
  let response = await fetch(
    "https://thesimpsonsquoteapi.glitch.me/quotes?count=" + count
  );
  return await response.json();
}

const characterPrint = (list = [], dom) => {
  dom.innerHTML = ""; 
  list.forEach((e) => {
    dom.innerHTML += generateCharacter(e);
  });
}

const generateCharacter = ({ image, character, quotes = [] }) => {
  let tag_li = ""
  quotes.forEach(quote => {
    tag_li += `<li>${quote}</li>`;
  });
  
  return `
  <article>
    <img src="${image}" alt="${character}" />
    <h2>${character}</h2>
    <ul>${tag_li}</ul>
  </article>
  `;
};

const loading = (dom)=>{
  dom.innerHTML = '<div class="spinner"></div>';
}

export default {
  charcterFech,
  characterPrint,
  generateCharacter,
  loading,
};