const simpletext =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
const mediumtext =
  "The sun rose over the horizon, casting a resplendent glow across the fields. Birds began to sing, greeting the nascent day with mellifluous songs. People started to stir in their homes, ready to embrace the myriad opportunities that lay ahead. The world seemed full of promise as the morning light permeated every corner of the landscape, infusing it with vitality and energy. Children ran outside, eager to frolic, while farmers prepared their implements for the day's labor. The aroma of fresh bread wafted from the bakery, mingling with the scent of blooming flowers. It was a new day, replete with endless possibilities and simple yet profound joys. As the town awakened, merchants began to open their shops, displaying an array of vibrant wares.";
const hardtext =
  "As the resplendent aurora emerged over the horizon, imbuing the undulating terrain with a lustrous effulgence, avian creatures commenced their caroling, heralding the incipient day with euphonious melodies. Inhabitants began to rouse from their slumber, poised to seize the cornucopia of prospects that lay ahead. \"The cosmos seemed imbued with potentiality,\" as the diurnal illumination infiltrated every nook and cranny of the verdant topography, suffusing it with unparalleled vigor and dynamism. Juveniles dashed outdoors, their hearts aflutter with anticipation, keen to gambol amidst nature's symphony, while seasoned agriculturists meticulously readied their implements for the day's toil.";
const hardCtext =
  "Hello! Welcome to the world of \"dummy text\"; it's a fascinating place, isn't it? Let's dive right in. Wait... did you notice? Yes, that was an exclamation mark! And there—right there—another one. Are you excited yet? You should be. After all, it's not every day you get to read such a \"punctuated\" piece. (I know, I know, too many puns.) Anyway, let's continue, shall we? So, where were we? Ah, yes, dummy text. What's its purpose, you ask? Well, let's consider a few scenarios: First, designers. They use it to fill space; it's a \"place-holder,\" if you will. Second, writers: they use it to see how their words will \"look\" on a page. Neat, huh? Third—yes, there's a third—developers. Code can be tricky, can't it? They need to see how everything fits together: text, images, and so on. Simple enough? Great!";
const hardBtext =
  "Keep thy foot when thou goest to the house of God, and be more ready to hear, than to give the sacrifice of fools: for they consider not that they do evil.Be not rash with thy mouth, and let not thine heart be hasty to utter any thing before God: for God is in heaven, and thou upon earth: therefore let thy words be few. For a dream cometh through the multitude of business; and a fool's voice is known by multitude of words. When thou vowest a vow unto God, defer not to pay it; for he hath no pleasure in fools: pay that which thou hast vowed. Better is it that thou shouldest not vow, than that thou shouldest vow and not pay.";

const textToBeWritten = document.getElementById("textToBeWritten");
const simpleButton = document.getElementById("simpleButton");
const mediumButton = document.getElementById("mediumButton");
const hardButton = document.getElementById("hardButton");

textToBeWritten.textContent = simpletext;

const buttonColoring = () => {
  if (textToBeWritten.textContent == simpletext) {
    simpleButton.classList.add("active-stage");
    mediumButton.classList.remove("active-stage");
    hardButton.classList.remove("active-stage");
    return;
  }
  if (textToBeWritten.textContent == mediumtext) {
    mediumButton.classList.add("active-stage");
    hardButton.classList.remove("active-stage");
    simpleButton.classList.remove("active-stage");
    return;
  }
  if (textToBeWritten.textContent == hardtext) {
    hardButton.classList.add("active-stage");
    simpleButton.classList.remove("active-stage");
    mediumButton.classList.remove("active-stage");
    return;
  }
};

simpleButton.addEventListener("click", () => {
  textToBeWritten.textContent = simpletext;
  buttonColoring();
});
mediumButton.addEventListener("click", () => {
  textToBeWritten.textContent = mediumtext;
  buttonColoring();
});
hardButton.addEventListener("click", () => {
  textToBeWritten.textContent = hardtext;
  buttonColoring();
});

const min = document.getElementById("min");
const sec = document.getElementById("sec");
const startButton = document.getElementById("startbtn");

let seconds = 10;

const timer = () => {
  const counter = setInterval(() => {
    seconds--;
    let minute = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    let second = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    min.textContent = minute;
    sec.textContent = second;
    console.log(`${minute} : ${second}`);

    if (seconds == 0) {
      clearInterval(counter);
    }
  }, 1000);
};

startButton.addEventListener("click", () => {
  timer();
});
