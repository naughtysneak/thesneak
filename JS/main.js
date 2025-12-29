/**
 * COPYRIGHT (c) 2025 - 2026 NaughtySneak. All rights reserved.
 */

let artEntries = document.getElementsByClassName("entry art_entry");
let artPieceBttn = document.getElementsByClassName("piece");

let warning = document.getElementById("warning");
let enterBttn = document.getElementById("enter");
let exitBttn = document.getElementById("exit");

let previewOverlay = document.getElementById("preview_overlay");
let previewGraphic = document.getElementById("preview_graphic");
let previewContent = document.getElementById("preview_content");
let previewBackground = document.getElementById("preview_background");
let preivewOverlayBounds = previewOverlay.getElementsByClassName("close_bounds")[0];
let closePreviewBttn = previewOverlay.getElementsByClassName("close_button")[0];

let pieceTitle = document.getElementById("piece_title");
let pieceTime = document.getElementById("piece_time");
let pieceDescription = document.getElementById("piece_description");
let i = artEntries.length - 1;

let changelog = document.getElementById("changelog");
let logOverlayBounds = changelog.getElementsByClassName("close_bounds")[0];
let closeLogsBttn = changelog.getElementsByClassName("close_button")[0];
let openLogsBttn = document.getElementById("open_changelog");

//#region OBSERVER
let popIn = [
	{
		opacity: 0,
		scale: 0.8,
	},
	{
		opacity: 1,
		scale: 1,
	}
];
let popOut = [
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
});
for (let i = 0; i < artEntries.length; i++) {
	const element = artEntries[i];
	observer.observe(element);
}
//#endregion

//#region VISUAL LINKING
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
		let child = element[1].linkedElement.children[1].children[a];
		child.addEventListener("click", Void_SetPreview(child, element[1]));

		element[1].pieces.push(child);

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
//#endregion

enterBttn.onclick = () =>
{
	warning.style.setProperty("display", "none");
	document.body.style.setProperty("overflow", "visible");
};
exitBttn.onclick = () =>
{
	window.open("https://www.google.com/");
};
openLogsBttn.onclick = () =>
{
	changelog.style.setProperty("display", "grid");
	changelog.animate(
		[
			{
				opacity: 0,
				scale: 0.95,
			},
			{
				opacity: 1,
				scale: 1,
			}
		],
		{
			fill: "forwards",
			easing: "ease",
			duration: 200,
		}
	);
}

window.addEventListener("keydown", (e) =>
{
	if(previewOverlay.style.getPropertyValue("display") == "none")
		return;
	
	if(e.key == "Escape")
		Void_ClosePreview();
});

closePreviewBttn.onclick = () => Void_ClosePreview();
preivewOverlayBounds.addEventListener("click", () => Void_ClosePreview());
function Void_SetPreview(element, data)
{
	const style = getComputedStyle(element);
	
	element.addEventListener("click", () =>
	{
		if(style.opacity != "1")
			return;
		
		previewOverlay.style.setProperty("display", "grid");
		
		previewContent.style.setProperty("--gradKeyA", style.getPropertyValue("--gradKeyA"));
		previewContent.style.setProperty("--gradKeyB", style.getPropertyValue("--gradKeyB"));
		
		previewBackground.style.setProperty("--piece", style.getPropertyValue("--piece"));
		previewGraphic.style.setProperty("--piece", style.getPropertyValue("--piece"));
		
		pieceTitle.innerText = data.name;
		pieceTime.innerText = `Time Taken: ~${data.hoursInt} Hours`;

		pieceDescription.innerHTML = data.description;
		pieceDescription.style.setProperty("--headerColor", style.getPropertyPriority("--headerColor"));

		previewOverlay.animate(
			[
				{
					opacity: 0,
					scale: 0.95,
				},
				{
					opacity: 1,
					scale: 1,
				}
			],
			{
				fill: "forwards",
				easing: "ease",
				duration: 200,
			}
		);
	});
}
function Void_ClosePreview()
{
	previewOverlay.animate(
		[
			{
				opacity: 1,
				scale: 1,
			},
			{
				opacity: 0,
				scale: 0.95,
			}
		],
		{
			fill: "forwards",
			easing: "ease",
			duration: 200,
		}
	);

	setTimeout(() => {
		previewOverlay.style.setProperty("display", "none");
	}, 200);
}

closeLogsBttn.onclick = () => Void_CloseChangelogs();
logOverlayBounds.addEventListener("click", () => Void_CloseChangelogs())
function Void_CloseChangelogs()
{
	changelog.animate(
		[
			{
				opacity: 1,
				scale: 1,
			},
			{
				opacity: 0,
				scale: 0.95,
			}
		],
		{
			fill: "forwards",
			easing: "ease",
			duration: 200,
		}
	);

	setTimeout(() => {
		changelog.style.setProperty("display", "none");
	}, 200);
}