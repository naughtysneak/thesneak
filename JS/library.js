/**
 * COPYRIGHT (c) 2025 - 2026 NaughtySneak. All rights reserved.
 */

const CharacterTags = {
	DARGOO: 1,
	ORION: 2,
	CYRO: 4,
	WILL: 8,
	GYO: 16,
	NOA: 32,
	ROY: 64,
	JP: 128,
	STERLING: 256,
	JOHN: 512,
	LAPLACE: 1024,
	ANTHONY: 2048,
	TRICK: 4096,
	MCCHOMP: 8192,
	ATLAS: 16843,
};
const TypeTags = {
	STICKER: 1,
	COMIC: 2,
	PORTRAIT: 4,
	SHEET: 8,
};
const CensorType =
{
	SFW: 1,
	SUGGESTIVE: 2,
	NSFW: 3,
};

class ArtEntry
{
	linkedElement;
	name;
	description;
	
	date;
	hoursInt;
	
	characterTags;
	typeTags;

	censorship;
	setCount;

	pieces;

	/**
	 * Constructs the metadata of the art piece, and link its visual parts.
	 * @param {HTMLElement} elmnt - The visual element to affect.
	 * @param {string} name - The piece name. Used in the Search Filter.
	 * @param {string} description - The description of the piece.

	 * @param {number} date - The date number. Formatting EX: November 23 2024 (202411) yy/mm.
	 * @param {number} hours - The hours taken to make a piece as an int.

	 * @param {int} chars - The character tags. Used in the Search Filter.
	 * @param {int} type - The piece type tag. Used in the Search Filter.

	 * @param {int} censor - The level of censorship. Used in the Content Filter.
	 * @param {int} setCount - How many images are in the entry as a full set.
	 */
	constructor(elmnt, name, description, date, hours, chars, type, censor, setCount)
	{
		this.linkedElement = elmnt;
		this.name = name;
		this.description = description
		
		this.date = date;
		this.hoursInt = hours;
		
		this.characterTags = chars;
		this.typeTags = type;
		
		this.censorship = censor;
		this.setCount = setCount;
		this.pieces = [];
	}

	// Toggle(state)
	// {
	// 	this.linkedElement.style.setProperty("display", state ? "block" : "none");
	// }
}

/*
	MONTHS - NUMBER	
	JAN - 1
	FEB - 2
	MAR - 3
	APR - 4
	MAY - 5
	JUN - 6
	JUL - 7
	AUG - 8
	SEP - 9
	OCT - 10
	NOV - 11
	DEC - 12
*/

let entries = {
	"Sexy Dargoo" 			: new ArtEntry	(null, "Sexy Dargoo",
											`Even @d4rg0o needs to have a taste every now and then.
											<br><br>And it goes without saying, that's not saliva on his fingers🤭.
											<br><br>First time doing lighting to an extent and I think it went pretty well!
											`,
											20235, 3, CharacterTags.DARGOO, TypeTags.PORTRAIT, CensorType.NSFW, 1),
	"Naughty Himbros" 		: new ArtEntry	(null, "Naughty Himbros",
											`Will and I decided to jack off together and see who could last the longest.
											<br><br>Despite how it looks, we didn't tie, he won.
											<br><br>Well played otter himbo...
											<br><br>However, I'm not done with you yet... 😈🤭
											`,
											20236, 9, CharacterTags.ORION | CharacterTags.WILL, TypeTags.PORTRAIT, CensorType.NSFW, 2),
	"Winking Laplace" 		: new ArtEntry	(null, "Winking Laplace",
											`After seeing Ramp's OC, Laplace, and realizing his origin, I HAD TO DRAW HIM!
											<br><br>An OC named after a Math function! How could I not?! Plus, he's cute 🥰.
											<br><br>So here is Laplace winking, in front of a graph plane, cuz yes :).
											`,
											20239, 3, CharacterTags.LAPLACE, TypeTags.PORTRAIT, CensorType.NSFW, 1),
	"Orion Ref v2023" 		: new ArtEntry	(null, "Orion Ref",
											`The first iteration of an Orion in all his blue glory.
											<br><br>His body art reflects his Euphorian heritage and power. It's designed to
											look kind of like he's wearing a wet suit.
											`,
											202311, 14, CharacterTags.ORION, TypeTags.SHEET, CensorType.SFW, 1),
	"Cumdump Daddy" 		: new ArtEntry	(null, "Cumdump Daddy",
											`My first collaboration piece with my friend Inka.									
											<br><br>While Bruce is filling Anthony's hole, Dylan is making good use of his mouth.
											<br><br>Sketch and Style: Inka
											<br>Refining and Rendering: Me
											`,
											20244, 8, CharacterTags.ANTHONY, TypeTags.PORTRAIT, CensorType.NSFW, 2),
	"Friendship" 			: new ArtEntry	(null, "Tricky Friendship",
											`A sticker I made of Trick Rex and me. 
											<br><br>No matter what happens between us, our friendship will always pull through.
											I love you, you big silly rex!
											<br><br>🫂🫂🫂🫂🫂
											`,
											202411, 4, CharacterTags.TRICK | CharacterTags.ORION, TypeTags.STICKER, CensorType.SFW, 1),
	"A Moment In Forever" 	: new ArtEntry	(null, "A Moment In Forever",
											`A single frame in a moment that feels like forever...
											<br><br>This is one of the many moments spent between Orion and Cryo, and
											one of the first few between Slurpjunkk and me.
											<br><br>Orion loves Cyro, as much as I love you, bb. 🩵💏💙
											`,
											20251, 7, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.SUGGESTIVE, 1),
	"It's Just Us" 			: new ArtEntry	(null, "It's Just Us",
											`There's no other place Orion wants to be than with Cryo; Alone in their own safe space,
											where they can show how much they love each other.
											<br><br>Someday, I hope to do the same with you Slurpjunkk.
											<br><br>Have a safe space, where it's just us, together 💙🩵.
											`,
											20251, 5, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.NSFW, 1),
	"Lovers Embrace" 		: new ArtEntry	(null, "Lovers Embrace",
											`A special gift for my bf (I call him my husband), Slurpjunkk.
											<br><br>What you see Orion and Cyro doing is exactly what I hope to do with you someday:
											embrace and love you in all forms.
											<br><br>Happy Valentine's Day my love. 🫂🫂💙🩵
											`,
											20252, 16, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.COMIC, CensorType.NSFW, 2),
	"Down Low Gyo" 			: new ArtEntry	(null, "Down Low Gyo",
											`Collab with shoopcozy03
 											<br><br>Gyo, Earl's dad, is a dom top. However, with Orion around, Gyo goes 
											from top to bottom instantly.
											<br><br>He likes riding Orion, hard, and being degraded by him, but on the down low. 
											He's got an image to keep up~ 😏🤭😈.
											`,
											20253, 16, CharacterTags.GYO | CharacterTags.ORION, TypeTags.COMIC, CensorType.NSFW, 1),
	"Hybrid Dominating" 	: new ArtEntry	(null, "Hybrid Dominating",
											`CW: Degrading
											<br><br>Noa's being a horny ass Sharluga again...
											<br><br>Good thing Orion is around to put that needy little bitch in his place and
											give him a good pounding. One of many~
											<br><br>Noa (21) belongs to NoasManCave.
											`,
											20253, 15, CharacterTags.NOA | CharacterTags.ORION, TypeTags.COMIC, CensorType.NSFW, 2),
	"Atlas West" 			: new ArtEntry	(null, "Atlas West Ref WIP",
											`I never really showed off Atlas as much as I would've liked. However, this adorable
											bombay cat deserves a retouch!
											<br><br>Definitely made him bigger... in more ways than one. Hehehe~
											<br><br>Welp, time to put a sock on the door :).
											`,
											20253, 5, CharacterTags.ATLAS, TypeTags.SHEET, CensorType.NSFW, 1),
	"Overtime Tips" 		: new ArtEntry	(null, "Overtime Tips WIP",
											`After a long day of serving and busting, why not leave the chain chomp a nice... "tip~
											<br><br>Needless to say, McChomp never goes home empty~ Hehehe.
											`,
											20254, 4, CharacterTags.MCCHOMP, TypeTags.COMIC, CensorType.NSFW, 2),
	"Orion v2025 SFW" 		: new ArtEntry	(null, "Orion Ref v2025 - SFW",
											`Name: Orion Vance
											<br>- Birth Name: Orion Axelia Pelago
											<br><br>Age: 23 (Born 7/4/2001)
											<br>Height: 6'7
											<br>Species: Orca
											<br><br>Appearance: After obtaining new magic and overcoming his inner demons, his magic evolved
											and rewarded him with new body art, and physical strength to reflect his inner one.
											`,
											20254, 19, CharacterTags.ORION, TypeTags.SHEET, CensorType.SFW, 2),
	"Orion v2025 NSFW" 		: new ArtEntry	(null, "Orion Ref v2025 - NSFW",
											`Name: Orion Vance
											<br>- Birth Name: Orion Axelia Pelago
											<br><br>Age: 23 (Born 7/4/2001)
											<br>Height: 6'7
											<br>Species: Orca
											<br><br>Appearance: After obtaining new magic and overcoming his inner demons, his magic evolved
											and rewarded him with new body art, and physical strength to reflect his inner one.
											<br><h2 style='margin: 0px; margin-top: 16px;'>NSFW Details</h2>
											<br>- Alignment: Dominant
											<br>- Position: Top
											<br>- Sexuality: Gay
											<br><br><h3 style='margin: 0px;'>Dick Sizes</h3>
											<br>Flaccid
											<br>- 7.044 inches,
											<br>- 9.2677 in circumference,
											<br>- 2.96 diameter stretch
											<br><br>Erect
											<br>- 11.16 - 12.6 inches,
											<br>- 13.034 in circumference,
											<br>- 4.14886 diameter stretch
											`,
											20254, 19, CharacterTags.ORION, TypeTags.SHEET, CensorType.NSFW, 2),
}