/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'From Up to Down: A Rags to Riches Story.',
    date: 'Sept 11st, 2019',
    firstParagraph: `Now, this is a story all about how, My life got flipped-turned upside down, And I'd like to take a minute, Just sit right there, I'll tell you how I became the prince of a town called Bel Air, In west Philadelphia born and raised, On the playground was where I spent most of my days, Chillin' out maxin' relaxin' all cool, And all shootin some b-ball outside of the school, When a couple of guys who were up to no good ,Started making trouble in my neighborhood, I got in one little fight and my mom got scared, She said 'You're movin' with your auntie and uncle in Bel Air'`,

    secondParagraph: `I begged and pleaded with her day after day, But she packed my suit case and sent me on my way, She gave me a kiss and then she gave me my ticket. I put my Walkman on and said, 'I might as well kick it'. First class, yo this is bad, Drinking orange juice out of a champagne glass. Is this what the people of Bel-Air living like? Hmm this might be alright. But wait I hear they're prissy, bourgeois, all that ,Is this the type of place that they just send this cool cat?, I don't think so, I'll see when I get there, I hope they're prepared for the prince of Bel-Air.`,

    thirdParagraph: `Well, the plane landed and when I came out, There was a dude who looked like a cop standing there with my name out, I ain't trying to get arrested yet, I just got here, I sprang with the quickness like lightning, disappeared, I whistled for a cab and when it came near, The license plate said fresh and it had dice in the mirror, If anything I could say that this cab was rare, But I thought 'Nah, forget it' - 'Yo, homes to Bel Air', I pulled up to the house about seven or eigth, And I yelled to the cabbie 'Yo homes smell ya later', I looked at my kingdom, I was finally there, To sit on my throne as the Prince of Bel Air`
  }
];

 // Step 1: Create a function that creates a component. You will want your component to look like the template below:
 //
 //  <div class="article">
 //    <h2>{title of the article}</h2>
 //    <p class="date">{date of the article}</p>
 //
 //    {three separate paragraph elements}
 //
 //    <span class='expandButton'></span>
 //  </div>
 //
 //  Hint: You will need to use createElement more than once here!
 //
 //  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.
 //
 //  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.
 //
 //  Step 3: return the entire component.
 //
 //  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
 //
 //  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.



function articleCreater(h2Content, dateContent, p1Content, p2Content, p3content){
  function divCreater(){
    const div = document.createElement('div');
    div.classList.add('article');
    return div
  };
  function header2Creater(content){
    const header2 = document.createElement('h2');
    header2.textContent = content;
    return header2
  };
  function paragraphCreater(content, newClass){
   const paragraph = document.createElement('p');
   paragraph.textContent = content;
   paragraph.classList.add(newClass);
   return paragraph
 };
 function spanCreater(){
   const span = document.createElement('span');
   span.classList.add('expandButton');
   span.textContent = 'click to open';
   span.addEventListener('click', () => {
     span.textContent = 'Double Click to Close';
     articleDiv.classList.add('article-open')
   });
   span.addEventListener('dblclick', () => {
     span.textContent = 'click to open';
     articleDiv.classList.remove('article-open');
   });
   return span
 };
  const articleDiv = divCreater();
  const headline = header2Creater(h2Content);
  const dateP = paragraphCreater(dateContent, 'date');
  const p1 = paragraphCreater(p1Content, 'contentP');
  const p2 = paragraphCreater(p2Content, 'contentP');
  const p3 = paragraphCreater(p3content, 'contentP');
  const spanButton = spanCreater();
  const appendToParent = document.querySelector('.articles');
  articleDiv.appendChild(headline);
  articleDiv.appendChild(dateP);
  articleDiv.appendChild(p1);
  articleDiv.appendChild(p2);
  articleDiv.appendChild(p3);
  articleDiv.appendChild(spanButton);
  appendToParent.appendChild(articleDiv);
  const article = `headline` + `dateP` + `p1` + `p2` + `p3` + `spanButton`;
  return article
};

data.map((item) => {
  let newArticle = articleCreater(item.title, item.date, item.firstParagraph, item.secondParagraph, item.thirdParagraph);
  return newArticle
});
