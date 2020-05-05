const fistBtn = document.getElementById("fistBtn");
const jokeText = document.getElementById("joke-text");
const reactText = document.getElementById("reaction-text");
const jokeBubble = document.getElementById("joke-bubble");

fistBtn.addEventListener("click", jokeGen);

async function jokeGen() {
	try {
		const newJoke = await fetch("https://api.chucknorris.io/jokes/random").then(resp => resp.json());
		checkLength(newJoke.value);
		jokeText.textContent = newJoke.value;
		const randomResp = Math.floor(Math.random()*(18)+1);
		checkEmoji(randomResp);
		reactText.textContent = reactions[randomResp];
		}
	 catch (e) {
		jokeText.textContent = "nuthin";
		reactText.textContent = "oh";
	}
}
function checkLength(str) {
	if (str.length > 100) {
		jokeBubble.classList.toggle("long",true);
	} else {
		jokeBubble.classList.toggle("long",false);
	}
}
function checkEmoji(id) {
	if (id >= 9 && id <= 11) {
		reactText.classList.toggle("emoji",true);
	} else {
		reactText.classList.toggle("emoji",false);
	}
}

const reactions = {
	1: "omg I luv you",
	2: "ew, I effing hate Chuck Norris",
	3: "you so funny",
	4: "oh yah, baby",
	5: "true enuf",
	6: "enuf said",
	7: "shut up!",
	8: "I don't wanna hear it",
	9: "💀",
	10: "🤙",
	11: "😂",
	12: "heh heh heh",
	13: "not again",
	14: "get away from me",
	15: "i can't EVEN with you",
	16: "ughHgahgGh",
	17: "i feel small",
	18: "yeaaaaghhhh!",
}

