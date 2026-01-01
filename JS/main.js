/**
 * COPYRIGHT (c) 2025 - 2026 NaughtySneak. All rights reserved.
 */

let artPieces = document.getElementsByClassName("piece");

let warning = document.getElementById("warning");
let enterBttn = document.getElementById("enter");
let exitBttn = document.getElementById("exit");

let welcomeScreenIndx = 0;

if(window.visualViewport.width < 550)
	welcomeScreenIndx = 1;

let welcome = document.getElementById("welcome");
let profile = document.getElementsByClassName("profile")[welcomeScreenIndx];
let sneakImg = document.getElementsByClassName("profile_img")[welcomeScreenIndx];
let welcomeText = document.getElementsByClassName("welcome_text")[welcomeScreenIndx];

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
		opacity: "var(--visiblity)",
		scale: "var(--size)",
	}
];
let popOut = [
	{
		opacity: "var(--visiblity)",
		scale: "var(--size)",
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
{ threshold: 0.1 });
for (let i = 0; i < artPieces.length; i++) {
	const element = artPieces[i];
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
	warning.animate(
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
		warning.style.setProperty("display", "none");
	}, 150);
	
	profile.style.setProperty("display", "grid");

	profile.animate(
		[
			{
				opacity: 0,
			},
			{
				opacity: 1,
			}
		],
		{
			delay: 450,
			fill: "forwards",
			easing: "linear",
			duration: 600
		}
	);
	sneakImg.animate(
		[
			{
				scale: 0.5
			},
			{
				scale: 1
			}
		],
		{
			delay: 450,
			fill: "forwards",
			easing: "cubic-bezier(0.34, 2, 0.64, 1)",
			duration: 600
		}
	); 
	welcomeText.animate(
		[
			{
				width: "0%",
			},
			{
				width: `100%`,
			}
		],
		{
			delay: 950,
			fill: "forwards",
			easing: "cubic-bezier(.3,.06,.4,.98)",
			duration: 600
		}
	);
	welcome.animate(
		[
			{
				opacity: 1,
			},
			{
				opacity: 0,
			}
		],
		{
			delay: 3000,
			fill: "forwards",
			easing: "linear",
			duration: 500
		}
	)

	setTimeout(() => {
		document.body.style.setProperty("overflow", "visible");
		welcome.style.setProperty("display", "none");
	}, 3500);
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
	if(e.key != "Escape")
		return;
	
	if(previewOverlay.style.getPropertyValue("display") != "none")
		Void_ClosePreview();

	if(changelog.style.getPropertyValue("display") != "none")
		Void_CloseChangelogs();
});

closePreviewBttn.onclick = () => Void_ClosePreview();
preivewOverlayBounds.addEventListener("click", () => Void_ClosePreview());
function Void_SetPreview(element, data)
{
	const style = getComputedStyle(element);
	
	element.addEventListener("click", () =>
	{
		let opacity = (Number)(style.opacity);
		if(opacity < 0.5)
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
	}, 150);
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
	}, 150);
}