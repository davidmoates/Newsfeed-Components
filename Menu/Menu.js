/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/
function menuCreater(newData){
  function divCreater(){
    const div = document.createElement('div');
    div.classList.add('menu');
    return div
  };
  function ulCreater(){
    const uList = document.createElement('ul');
    return uList
  };
  function liCreater(listContent){
   const listItems = document.createElement('li');
   listItems.textContent = listContent;
   return listItems
 };
  const menuDiv = divCreater();
  const unorderList = ulCreater();
  const img = document.querySelector('.menu-button');
  img.addEventListener('click', () => {
    img.classList.add('menu--open');
  });
  img.addEventListener('dblclick', () => {
    img.classList.remove('menu--open');
  });

  const appendToMenu = document.querySelector('.header');
  menuDiv.appendChild(unorderList);
  appendToMenu.appendChild(menuDiv);
  for(let i = 0; i < newData.length; i++) {
    let theList = liCreater(newData[i]);
    unorderList.appendChild([i]);
  };

  const theMenu = `menuDiv` + `unoderList` + 'theList';
  return theMenu
};
menuCreater(menuItems);
