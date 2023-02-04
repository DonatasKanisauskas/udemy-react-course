
let num = 0;

function customId() {
  return num++;
}

function randomVal( items ) {
  const randomNum = Math.floor( Math.random() * items.length );
  return items[randomNum];
}

export { customId, randomVal };