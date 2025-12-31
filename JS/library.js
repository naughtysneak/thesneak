/**
 * COPYRIGHT (c) 2025 - 2026 NaughtySneak. All rights reserved.
 */

const CharacterTags = {
	UNSET: 0,
	DARGOO: 1,
	ORION: 2,
	CYRO: 4,
	WILL: 8,
	GYO: 16,
	NOA: 32,
	ROY: 64,
	JP: 128,
	COW: 256,
	STERLING: 512,
	JOHN: 1024,
	LAPLACE: 2048,
	ANTHONY: 4096,
	TRICK: 8192,
	MCCHOMP: 16843,
	ATLAS: 32768,
	KORI: 65536,
	COMMISSION: 131072,
};
const TypeTags = {
	UNSET: 0,
	STICKER: 1,
	COMIC: 2,
	PORTRAIT: 4,
	SHEET: 8,
};
const CensorType =
{
	UNSET: 0,
	SFW: 1,
	SUGGESTIVE: 2,
	NSFW: 4,
};

class ClampedRange
{
	#min = 0;
	#max = 0;
	clampMin = 0;
	clampMax = 24;

	constructor()
	{

	}
	
	get min()
	{
		return this.#min;
	};

	set min(x)
	{
		if(x < this.clampMin)
			x = this.clampMin;
		
		this.#min = x;

		if(this.#max < this.#min)
			this.#max = this.#min;
	};

	get max()
	{
		return this.#max;
	};

	set max(x)
	{
		if(x > this.clampMax)
			x = this.clampMax;
		
		this.#max = x;

		if(this.#max < this.#min)
			this.#min = this.#max;
	};
};
class ArtEntry
{
	linkedElement;
	name;
	description;
	
	year;
	month;
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

	 * @param {number} year - The date number. Formatting EX: November 23 2024 (202411) yy/mm.
	 * @param {number} month - The date number. Formatting EX: November 23 2024 (202411) yy/mm.
	 * @param {number} hours - The hours taken to make a piece as an int.

	 * @param {int} chars - The character tags. Used in the Search Filter.
	 * @param {int} type - The piece type tag. Used in the Search Filter.

	 * @param {int} censor - The level of censorship. Used in the Content Filter.
	 * @param {int} setCount - How many images are in the entry as a full set.
	 */
	constructor(elmnt, name, description, year, month, hours, chars, type, censor, setCount)
	{
		this.linkedElement = elmnt;
		this.name = name;
		this.description = description
		
		this.year = year;
		this.month = month;
		this.hoursInt = hours;
		
		this.characterTags = chars;
		this.typeTags = type;
		
		this.censorship = censor;
		this.setCount = setCount;
		this.pieces = [];
	}

	Void_TogglePiece(state)
	{
		this.pieces.forEach(element => {
			element.style.setProperty("display", state ? "block" : "none");
		});
	}
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
											2023, 5, 3, CharacterTags.DARGOO, TypeTags.PORTRAIT, CensorType.NSFW, 1),
	"Naughty Himbros" 		: new ArtEntry	(null, "Naughty Himbros",
											`Will and I decided to jack off together and see who could last the longest.
											<br><br>Despite how it looks, we didn't tie, he won.
											<br><br>Well played otter himbo&hellip;
											<br><br>However, I'm not done with you yet&hellip; 😈🤭
											`,
											2023, 6, 9, CharacterTags.ORION | CharacterTags.WILL, TypeTags.PORTRAIT, CensorType.NSFW, 2),
	"Atlas Ref v2023" 		: new ArtEntry	(null, "Atlas Ref v2023",
											`Everyone has friends. If you're lucky, you get to have one stay since childhood.
											<br><br>Orion is a lucky one thanks to Atlas, a super smart, nice, and sexy black bombay cat.
											<br><br>They're both inseparble and the same age&hellip; and friends with benefits sometimes too&hellip;
											hehehehe.
											`,
											2023, 7, 3, CharacterTags.ATLAS, TypeTags.REF, CensorType.NSFW, 4),
	"Winking Laplace" 		: new ArtEntry	(null, "Winking Laplace",
											`After seeing Ramp's OC, Laplace, and realizing his origin, I HAD TO DRAW HIM!
											<br><br>An OC named after a Math function! How could I not?! Plus, he's cute 🥰.
											<br><br>So here is Laplace winking, in front of a graph plane, cuz yes :).
											`,
											2023, 9, 3, CharacterTags.LAPLACE, TypeTags.PORTRAIT, CensorType.NSFW, 1),
	"Orion Ref v2023" 		: new ArtEntry	(null, "Orion Ref v2023",
											`The first iteration of an Orion in all his blue glory.
											<br><br>His body art reflects his Euphorian heritage and power. It's designed to
											look kind of like he's wearing a wet suit.
											`,
											2023, 11, 14, CharacterTags.ORION, TypeTags.SHEET, CensorType.SFW, 1),
	"Cumdump Daddy" 		: new ArtEntry	(null, "Cumdump Daddy",
											`My first collaboration piece with my friend Inka.									
											<br><br>While Bruce is filling Anthony's hole, Dylan is making good use of his mouth.
											<br><br>Sketch and Style: Inka
											<br>Refining and Rendering: Me
											`,
											2024, 4, 8, CharacterTags.ANTHONY, TypeTags.PORTRAIT, CensorType.NSFW, 2),
	"Friendship" 			: new ArtEntry	(null, "Tricky Friendship",
											`A sticker I made of Trick Rex and me. 
											<br><br>No matter what happens between us, our friendship will always pull through.
											I love you, you big silly rex!
											<br><br>🫂🫂🫂🫂🫂
											`,
											2024, 11, 4, CharacterTags.TRICK | CharacterTags.ORION, TypeTags.STICKER, CensorType.SFW, 1),
	"A Moment In Forever" 	: new ArtEntry	(null, "A Moment In Forever",
											`A single frame in a moment that feels like forever&hellip;
											<br><br>This is one of the many moments spent between Orion and Cryo, and
											one of the first few between <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a> and me.
											<br><br>Orion loves Cyro, as much as I love you, bb. 🩵💏💙
											`,
											2025, 1, 7, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.SUGGESTIVE, 1),
	"It's Just Us" 			: new ArtEntry	(null, "It's Just Us",
											`There's no other place Orion wants to be than with Cryo; Alone in their own safe space,
											where they can show how much they love each other.
											<br><br>Someday, I hope to do the same with you <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>.
											<br><br>Have a safe space, where it's just us, together 💙🩵.
											`,
											2025, 1, 5, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.NSFW, 1),
	"Let The Dark Rise" 	: new ArtEntry	(null, "Let The Dark Rise",
											`Orion&apos;s new magic is attached to his soul. It allows him to manifest physical forms of his Id and Superego.
											<br><br>This is what his Id looks like. He calls it his "Beast".
											<br><br>If you want him to come out&hellip; let the dark rise.
											`,
											2025, 2, 4, CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.SUGGESTIVE, 1),
	"My Big, Strong, Shelter" 	: new ArtEntry	(null, "My Big, Strong, Shelter",
											`When Orion was rescued, a red orca was the first one to find him. His name is <a href="https://bsky.app/profile/korse.bsky.social" target="_blank">Kori</a>.
											<br><br>Kori is like a big brother to Orion. Eventually he had to move, but they met up again, in another time
											when Orion needed someone to protect him again.
											`,
											2025, 6, 2, CharacterTags.KORI | CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.SFW, 1),
	"Lovers Embrace" 		: new ArtEntry	(null, "Lovers Embrace",
											`A special gift for my bf (I call him my husband), <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>.
											<br><br>What you see Orion and Cyro doing is exactly what I hope to do with you someday:
											embrace and love you in all forms.
											<br><br>Happy Valentine's Day my love. 🫂🫂💙🩵
											`,
											2025, 2, 16, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.COMIC, CensorType.NSFW, 2),
	"Down Low Gyo" 			: new ArtEntry	(null, "Down Low Gyo",
											`Collab with <a href="https://linktr.ee/shoopcozy" target="_blank">shoopcozy03</a>
 											<br><br>Gyo, Earl's dad, is a dom top. However, with Orion around, Gyo goes 
											from top to bottom instantly.
											<br><br>He likes riding Orion, hard, and being degraded by him, but on the down low. 
											He's got an image to keep up~ 😏🤭😈.
											`,
											2025, 3, 16, CharacterTags.GYO | CharacterTags.ORION, TypeTags.COMIC, CensorType.NSFW, 1),
	"Hybrid Dominating" 	: new ArtEntry	(null, "Hybrid Dominating",
											`CW: Degrading
											<br><br>Noa's being a horny ass Sharluga again&hellip;
											<br><br>Good thing Orion is around to put that needy little bitch in his place and
											give him a good pounding. One of many~
											<br><br>Noa (21) belongs to <a href="https://noaartstudio.carrd.co/" target="_blank">NoasManCave</a>
											`,
											2025, 3, 15, CharacterTags.NOA | CharacterTags.ORION, TypeTags.COMIC, CensorType.NSFW, 2),
	"Atlas West" 			: new ArtEntry	(null, "Atlas West Ref WIP",
											`I never really showed off Atlas as much as I would've liked. However, this adorable
											bombay cat deserves a retouch!
											<br><br>Definitely made him bigger&hellip; in more ways than one. Hehehe~
											<br><br>Welp, time to put a sock on the door :).
											`,
											2025, 3, 5, CharacterTags.ATLAS, TypeTags.SHEET, CensorType.NSFW, 1),
	"Overtime Tips" 		: new ArtEntry	(null, "Overtime Tips WIP",
											`After a long day of serving and busting, why not leave the chain chomp a nice&hellip; "tip~
											<br><br>Needless to say, McChomp never goes home empty~ Hehehe.
											`,
											2025, 4, 4, CharacterTags.MCCHOMP, TypeTags.COMIC, CensorType.NSFW, 2),
	"Orion v2025 SFW" 		: new ArtEntry	(null, "Orion Ref v2025 - SFW",
											`Name: Orion Vance
											<br>- Birth Name: Orion Axelia Pelago
											<br><br>Age: 23 (Born 7/4/2001)
											<br>Height: 6'7
											<br>Species: Orca
											<br><br>Appearance: After obtaining new magic and overcoming his inner demons, his magic evolved
											and rewarded him with new body art, and physical strength to reflect his inner one.
											`,
											2025, 4, 19, CharacterTags.ORION, TypeTags.SHEET, CensorType.SFW, 2),
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
											2025, 4, 19, CharacterTags.ORION, TypeTags.SHEET, CensorType.NSFW, 2),
	"Cyro Maskless" 		: new ArtEntry	(null, "Cyro Maskless",
											`As a litttle surprise, and for fun, I made two stickers of
											<a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>&apos;s Cyro with his new changes, and made my own too :>
											<br><br>You seen him mask on, now… here he his masked off!
											<br><br>His eyes turn purple to enhance his vision, and revert to monster cat eyes.
											`,
											2025, 4, 2, CharacterTags.CYRO, TypeTags.SHEET, CensorType.SFW, 1),
	"All of You" 			: new ArtEntry	(null, "All of You",
											`When I saw <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>&apos;s IRL face for the first time,
											all I saw was a pair of eyes behind a mask.
											<br><br>Then, I got to see it all, and saw what I knew was behind it: The man I love with the beautiful eyes and smile.
											<br><br>Orion feels the same with Cyro. He loves him, MASKS on or off.
											`,
											2025, 4, 6, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.STICKER, CensorType.SFW, 4),
	"Sneak Followers JP" 	: new ArtEntry	(null, "Sneaky Followers Stickers 1a & 1b - JP",
											`<a href="https://x.com/zeblackedyo" target="_blank">zeblackedyo</a>&apos;s JP wanted to get a nice look at Orion's cock.
											I think this is pretty close&hellip;
											<br><br>"Now fucking suck on it JP&hellip;"
											`,
											2025, 4, 2, CharacterTags.JP | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 2),
	"Sneak Followers Cow" 	: new ArtEntry	(null, "Sneaky Followers Stickers 2a & 2b - Cow Plant",
											`<a href="https://x.com/arty_enAD" target="_blank">arty_enAD</a>&apos;s Cow Plant is hungry,
											and currently craving some eggplant&hellip though I think he'd prefer Orion's more~
											<br><br>Eat up big boy~ Can take it in orally, and anally~
											`,
											2025, 4, 2, CharacterTags.COW | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 2),
	"Sneak Followers Roy" 	: new ArtEntry	(null, "Sneaky Followers Stickers 3a & 3b - Roy the Fox",
											`<a href="https://x.com/ToonsAfterD" target="_blank">ToonsAfterD</a>&apos;s Roy has been having a hard time.
											Thankfully, he has just the tools to take the edge off&hellip;
											<br><br>Orion gave him a special one that he really likes to ride~
											`,
											2025, 4, 2, CharacterTags.COW | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 2),
	"Couple Eggs" 			: new ArtEntry	(null, "Couple Eggs",
											`I made egg versions of Orion and Cyro for Easter.
											<br><br>Best part, I get to mess with <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>, because
											he doesn't like eggs&hellip;
											<br><br>Hehehehehe~
											`,
											2025, 4, 2, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.STICKER, CensorType.SFW, 2),
	"Brother Eggs" 			: new ArtEntry	(null, "Brother Eggs",
											`I made egg versions of <a href="https://bsky.app/profile/sxnackx.bsky.social" target="_blank">Axel</a> with his adopted big bro, Orion, and their
											friend who&apos;s like their big bro, <a href="https://bsky.app/profile/korse.bsky.social" target="_blank">Kori</a>!
											<br><br>A chaotic trio. Hehehehehe :>
											`,
											2025, 4, 2, CharacterTags.KORI | CharacterTags.ORION, TypeTags.STICKER, CensorType.SFW, 2),
	"Destiny Attire" 		: new ArtEntry	(null, "Destiny Attire Ver.",
											`Happy 4 month anniversary <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>!
											<br><br>4 amazing months with the sexiest ghost ever&hellip;
											<br><br>240 years later&hellip; it's still amazing. It's just the two of us&hellip; fulfilling our destinies together 💙.
											<br><br>Even as Father Time and Death&hellip; we still like to be free willie~
											<br><br>I LOVE YOU BB! 💙💙
											`,
											2025, 4, 10, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.STICKER, CensorType.SFW, 2),
	"Destiny Naturale" 		: new ArtEntry	(null, "Destiny Natural Ver.",
											`Happy 4 month anniversary <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>!
											<br><br>4 amazing months with the sexiest ghost ever&hellip;
											<br><br>240 years later&hellip; it's still amazing. It's just the two of us&hellip; fulfilling our destinies together 💙.
											<br><br>Even as Father Time and Death&hellip; we still like to be free willie~
											<br><br>I LOVE YOU BB! 💙💙
											`,
											2025, 4, 10, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 2),
	"Comfort hug" 			: new ArtEntry	(null, "Comfort hug",
											`My friend <a href="https://x.com/ToonsAfterD" target="_blank">ToonsAfterD</a> went through a tough time.
											<br><br>To try and cheer him up, I made a sticker of Orion holding Roy.
											<br><br>It worked, and as of today, he&apos;s doing better. I got your back blue fox man.
											`,
											2025, 5, 1, CharacterTags.ROY, TypeTags.STICKER, CensorType.SFW, 1),
	"Euphorian Cyro" 		: new ArtEntry	(null, "Euphorian Cyro",
											`My early birthday gift (June 10th) for my lovely bf, <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a>!
											<br><br>He has this sticker of Cyro as a seal, and I thought “Hey, why not make a ref, BUT integrated with Orion’s Talia / Euphorian Magic”.
											<br><br>So behold: Cyro as a seal, and some info!
											`,
											2025, 5, 8, CharacterTags.CYRO, TypeTags.SHEET, CensorType.NSFW, 3),
	"Love, Orion" 			: new ArtEntry	(null, "Love, Orion",
											`Orion is a dom top.
											<br><br>However, he feels safe with Cyro, and since Cyro knows the right moves to make, Orion has no problem bottoming for him .💙
											<br><br>This is my first public Orion bottoming piece, and I kindly ask that you be respectful in the comments.
											`,
											2025, 6, 21, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.COMIC, CensorType.NSFW, 1),
	"Vegas Buddies" 		: new ArtEntry	(null, "Vegas Buddies",
											`I met a friend of mine face to face, and we got to hang out on my birthday!
											<br><brSame friend who made me a doodle, and owns a chain chomp OC.
											<br><br>That friend was&hellip; <a href="https://x.com/thechainchompy" target="_blank">thechainchompy</a>!!!
											`,
											2025, 7, 2, CharacterTags.MCCHOMP | CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.SFW, 1),
	"JP Commission" 		: new ArtEntry	(null, "Commission #000 - JP",
											` I made a new NSFW sticker for my friend <a href="https://x.com/zeblackedyo" target="_blank">zeblackedyo</a>.
											<br><br>JP is got his cheeks groped and spread, and now he wants some dick&hellip; Orion&apos;s AND YCH.
											<br><br>Hope you like em man 🫂🫂🫂
											`,
											2025, 8, 3, CharacterTags.JP | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 2),
	"Whale Ho" 				: new ArtEntry	(null, "Whale Ho WIP",
											`&hellip;So this is happening :).
											<br><br>"Whale Ho!" coming soon :).
											`,
											2025, 8, 3, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 1),
	"Piggy Stickers" 		: new ArtEntry	(null, "Commission ID #002 - Chocolate Piggy",
											`The friendliest chocolate piggy has come to show you an amazing part of himself&hellip; his belly :P.
											<br><br>SFW sticker for <a href="https://x.com/BowserFred47" target="_blank">BowserFred47</a>.
											`,
											2025, 10, 2, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 1),
	"Tech Otter Sticker" 	: new ArtEntry	(null, "Commission ID #003 - Tech Otter",
											`This otter can be a little shy sometimes&hellip; so definitely embarrass him if you can, his face is adorable :>.
											<br><br>SFW sticker for <a href="https://x.com/CEOofOtters" target="_blank">CEOofOtters</a>.
											`,
											2025, 10, 2, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 1),
	"Neko Stickers" 		: new ArtEntry	(null, "Commission ID #001 - Neko",
											`Neko definitely has A LOT to show off&hellip; in more ways than one~
											<br><br>SFW & NSFW stickers for <a href="https://x.com/Feel_My_Biceps_" target="_blank">Feel_My_Biceps_</a>.
											`,
											2025, 10, 4, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 2),
	"Cyro Stickers" 		: new ArtEntry	(null, "Commission ID #004 - Cyro",
											`My bf <a href="https://x.com/slurpjunkk" target="_blank">Slurpjunkk</a> did an amazing thing that he didn't
											have to do: He requested a commission to help me reach my financial goal.
											<br><br>Best way to say thank you: A good dicking, which also a way of saying I love you 💙.
											`,
											2025, 11, 4, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 2),
	"McChomp Stickers" 		: new ArtEntry	(null, "Commission ID #005 - McChomp",
											`From a casual wave to the pussy attack, to embracing his acoustic child :>.
											<br><br>Done with a lot of detail and a tip on top!
											<br><br>3 SFW stickers for <a href="https://x.com/thechainchompy" target="_blank">thechainchompy</a>.
											`,
											2025, 11, 6, CharacterTags.MCCHOMP, TypeTags.STICKER, CensorType.NSFW, 3),
	"Kannen Trey Stickers" 	: new ArtEntry	(null, "Commission ID #006 - Tech Otter",
											`Kannen definitely got a little more than he bargained for with Trey&hellip; I think the big fox is a little surprised too :>.
											<br><br>Just don't break the couch! Green ones are hard to find&hellip;
											<br><br>NSFW sticker for <a href="https://x.com/AAlkhemet" target="_blank">AAlkhemet</a>
											and <a href="https://x.com/TreyBFoxy" target="_blank">TreyBFoxy</a>.
											`,
											2025, 10, 2, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 1),
	"Mossy Stickers" 		: new ArtEntry	(null, "Commission ID #007 - Mossy",
											`Mossy is quite the cozy half-bunny half-shark! He's also great at not using his teeth&hellip; as you can see below, hehehe.
											<br><br>1 NSFW & 2 SFW stickers for <a href="https://x.com/Mossy_BunAD" target="_blank">Mossy_BunAD</a>.
											`,
											2025, 11, 6, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 3),
	"Prince Stickers" 		: new ArtEntry	(null, "Commission ID #008 - Prince",
											`Prince is quite the interesting Doberman! One second, he's dominating with a leash in his hand&hellip; the next
											he's got a dick storm and a wide hole :>.
											<br><br>3 NSFW stickers for <a href="https://x.com/PurpleDeer6" target="_blank">PurpleDeer6</a>.
											`,
											2025, 11, 6, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 3),
	"Grungle Stickers" 		: new ArtEntry	(null, "Commission ID #009 - Grungle",
											`Grungle is definitely an interesting wendingo, even more so because I kept forgetting details&hellip; herp derp.
											<br><br>Don't let him fool you, though. A good tug on the leash or a nom, and he's happy again.
											<br><br>2 SFW stickers for <a href="https://x.com/black60918" target="_blank">black60918</a>.
											`,
											2025, 11, 4, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 2),
	"Grizsel Stickers Pt 1" : new ArtEntry	(null, "Commission ID #010 - Grizsel (1)",
											`Bears need to eat a lot before they go into hibernation. Meanwhile, Grizsel eats a lot of dick cuz they're
											horny as FUCK! Don't hold back and destroy this bear!!!
											<br><br>3 NSFW stickers for <a href="https://x.com/zrigslBrPolar" target="_blank">zrigslBrPolar</a>.
											`,
											2025, 11, 6, CharacterTags.COMMISSION, TypeTags.STICKER, CensorType.NSFW, 3),
	"Grizsel Stickers Pt 2" : new ArtEntry	(null, "Commission ID #012 - Grizsel (2)",
											`Now you know what happened to Grizsel after the last set, and I may or may not have participated&hellip;
											good purple polar slut~
											<br><br>Feel free to destroy their hole too~
											<br><br>2 NSFW & Bonus stickers for <a href="https://x.com/zrigslBrPolar" target="_blank">zrigslBrPolar</a>.
											`,
											2025, 12, 6, CharacterTags.COMMISSION | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 3),
	"Slushie Stickers" 		: new ArtEntry	(null, "Commission ID #011 - Slushie",
											`With Slushie, there are many types of warm feelings! From a wrapped hug&hellip; to the heat from his body
											and his cock on or in you.
											<br><br>Any volunteers? 😈
											<br><br>3 NSFW, 1 SFW, & Bonus Sticker for <a href="https://x.com/SodaFur20" target="_blank">SodaFur20</a>.
											`,
											2025, 12, 10, CharacterTags.COMMISSION | CharacterTags.ORION, TypeTags.STICKER, CensorType.NSFW, 5),
	"Johnny Sticker" 		: new ArtEntry	(null, "Johnny Headpats",
											`I made a headpat sticker for my friend <a href="https://x.com/yifforroarts" target="_blank">yifforroarts</a> when
											he was going through a hard time.
											<br><br>I won't say what happened out of privacy, but it was pretty rough. I thought if he can&apos;t put a smile on his face,
											at least Orion can put one on John.
											<br><br>My friend is smiling again :).
											`,
											2025, 12, 2, CharacterTags.JOHN | CharacterTags.ORION, TypeTags.STICKER, CensorType.SFW, 1),
	"Cake Dreaming" 		: new ArtEntry	(null, "Yifforroarts x NaughtySneak - Cake Dreaming",
											`So <a href="https://x.com/yifforroarts" target="_blank">yifforroarts</a> made this amazing sketch of Orion! I loved it so much
											that I asked to render it, and he said yes!
											<br><br>Orion is busy at his desk, but is distracted by Johnny's cheeks&hellip; HE'S AN ASS MAN AND THE BUNNY'S HOT!
											<br><br>Service me.
											`,
											2025, 12, 3, CharacterTags.JOHN | CharacterTags.ORION, TypeTags.PORTRAIT, CensorType.NSFW, 1),
	"Celeste Kolvon-Vance" 	: new ArtEntry	(null, "Celeste Kolvon-Vance",
											`She's finally here&hellip; everyone, meet Celeste, our perfect little girl 💙💙💙.
											<br><br>Now, our family is complete 🥹🥹🥹!
											<br><br>Now, as for how this happened&hellip; idk it's comic logic, stop asking and hold the precious bb already!
											`,
											2025, 12, 4, CharacterTags.CYRO | CharacterTags.ORION, TypeTags.SHEET, CensorType.SFW, 1),
}

class MultiToggle
{
	element;
	value = 0;
	
	#displayMessage = "";
	#display;

	#optionsMenu;
	#options = [];

	constructor(obj, placeholder)
	{
		this.element = obj;
		this.#optionsMenu = this.element.getElementsByClassName("toggle_list")[0];
		let optionElements = this.element.getElementsByClassName("toggle_option");
		
		this.#display = this.element.getElementsByTagName('p')[0];
		this.#display.innerText = placeholder;
		
		for (let i = 0; i < optionElements.length; i++) {
			const element = optionElements[i];
			
			let toggle = new OptionToggle(element, element.getAttribute("data-value"));
			this.#options.push(toggle);
		}
		for (let i = 0; i < this.#options.length; i++) {
			const element = this.#options[i];
			
			element.Void_OnToggleChange = () =>
			{
				if(element.toggled)
					this.value += (Number)(element.value);
				else
					this.value -= (Number)(element.value);
				
				this.#displayMessage = "";
				
				this.#options.forEach(e => {
					if(e.toggled)
						this.#displayMessage += `${e.element.innerText}, `;
				});
				
				this.#display.innerText = this.value == 0 ? placeholder : this.#displayMessage;
				this.Void_OnValueChange();
			};
		}

		this.element.addEventListener("mouseenter", () =>
		{
			this.Void_OnClick(true);
		});
		this.element.addEventListener("mouseleave", () =>
		{
			this.Void_OnClick(false);
		});
	}

	Void_OnValueChange()
	{

	}

	Void_OnClick(state)
	{
		this.#optionsMenu.style.setProperty("display", state ? "block" : "none");
		this.element.style.setProperty("border-radius", state ? "var(--radius) var(--radius) 0px 0px" : "var(--radius)");
	}
}
class OptionToggle
{
	element;
	toggled = false;

	value;

	constructor(obj, value)
	{
		this.element = obj;
		this.value = value;

		this.element.addEventListener("click", () =>
		{
			this.toggled = !this.toggled;
			this.element.classList.toggle("toggle");

			this.Void_OnToggleChange();
		})
	}
	
	Void_OnToggleChange()
	{

	}
}