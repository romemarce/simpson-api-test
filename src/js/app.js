const charactersDOM = document.getElementById("characters");

import tp from "./templates.js";

tp.loading(charactersDOM)
const listFilter = [];

let list = await tp.charcterFech(50);

list.forEach((elem) => {
  if (listFilter.length == 0) {
    listFilter.push({
      image: elem.image,
      character: elem.character,
      quotes: [elem.quote],
    });
  } else {
    let esta = true;
    listFilter.forEach((e) => {
      if (e.character == elem.character) {
        e.quotes.push(elem.quote);
        esta = false;
      }
    });
    if (esta) {
      listFilter.push({
        image: elem.image,
        character: elem.character,
        quotes: [elem.quote],
      });
    }
  }
});

tp.characterPrint(listFilter, charactersDOM);


// La paginacion se puede hacer con:
// slice: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice