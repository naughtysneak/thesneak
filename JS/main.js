let artEntries = document.getElementsByClassName("entry");
let i = artEntries.length - 1;

let popIn =
[
	{
		opacity: 0,
		scale: 0.8,
	},
	{
		opacity: 1,
		scale: 1,
	}
];
let popOut =
[
	{
		opacity: 1,
		scale: 1,
	},
	{
		opacity: 0,
		scale: 0.8,
	}
];

let observer = new IntersectionObserver((entries) =>
{
	entries.forEach(element => {
		if(element.isIntersecting)
			element.target.animate
			(
				popIn,
				{
					fill: "forwards",
					easing: "ease",
					duration: 400,
				}
			);
		else
			element.target.animate
			(
				popOut,
				{
					fill: "forwards",
					easing: "ease",
					duration: 500,
				}
			);
	});
},
{
	threshold: 0.35
});
for (let i = 0; i < artEntries.length; i++) {
	const element = artEntries[i];
	observer.observe(element);
}

let warning = document.getElementById("warning");
let enterBttn = document.getElementById("enter");
let exitBttn = document.getElementById("exit");

enterBttn.onclick = () =>
{
	warning.style.setProperty("display", "none");
	document.body.style.setProperty("overflow", "visible");
};

exitBttn.onclick = () =>
{
	window.open("https://www.google.com/");
};

let childCount = 1;
let addedPieces = 0;
let a = 0;
let metadata = Object.entries(entries);
let resetChildCount = true;

for (let m = 0; m < metadata.length; m++) {
	const element = metadata[m];
	element[1].linkedElement = artEntries[i];
	
	if(resetChildCount)
	{
		childCount = element[1].linkedElement.children[1].children.length;
		a = 0;
		resetChildCount = false;
	}
	
	while(addedPieces < element[1].setCount)
	{
		element[1].pieces.push(element[1].linkedElement.children[1].children[a]);
		++a;

		++addedPieces;
	}
	
	childCount -= element[1].setCount;
	addedPieces = 0;

	if(childCount <= 0)
	{
		--i;
		resetChildCount = true;
	}
}