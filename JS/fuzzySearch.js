/**
 * COPYRIGHT (c) 2025 - 2026 NaughtySneak. All rights reserved.
 */

class Match
{
	cost;
	indx;

	constructor()
	{
		this.cost = 0;
		this.indx = -1;
	}
}

let artEntries = document.getElementsByClassName("art_entry");
let searchBar = document.getElementById("search");
let searchMatch;

let censorshipFlags	= 0;
let typeFlags		= 0;
let yearNumber		= 0;

let focusedCustomUI = null;
let censorUI = new MultiToggle(document.getElementById("censor_control"), "Explicit Level");
censorUI.Void_OnValueChange = () => 
{
	NarrowCandidates();
}
let typeUI = new MultiToggle(document.getElementById("type_control"), "Piece Type");
typeUI.Void_OnValueChange = () => 
{
	NarrowCandidates();
}
let yearUI = new MultiToggle(document.getElementById("year_control"), "Year Published");
yearUI.Void_OnValueChange = () =>
{
	NarrowCandidates();
}

let narrowedCandidates = Array.from(Object.entries(entries));

function NarrowCandidates()
{
	let temp = [];
	narrowedCandidates = Array.from(Object.entries(entries));
	
	censorshipFlags = censorUI.value;
	yearNumber = yearUI.value;
	typeFlags = typeUI.value;
	
	for (let i = 0; i < narrowedCandidates.length; i++) {
		const element = narrowedCandidates[i][1];
		
		let censorship = censorshipFlags > 0 ? (element.censorship | censorshipFlags) === censorshipFlags : true;
		let type = typeFlags > 0 ? (element.typeTags | typeFlags) === typeFlags : true;
		let year = yearNumber > 0 ? element.year <= yearNumber : true;
		let narrowed = censorship && type && year;

		element.Void_TogglePiece(narrowed)
		
		if(narrowed)
			temp.push(narrowedCandidates[i]);
	}

	narrowedCandidates = Array.from(temp);
	for (let a = 0; a < artEntries.length; a++) {
		const element = artEntries[a];
		
		let childCount = element.children[1].children.length;
		let disabledChildCount = 0;

		for (let c = 0; c < childCount; c++) {
			const child = element.children[1].children[c];
			
			if(child.style.getPropertyValue("display") == "none")
				disabledChildCount++;
		}
		
		element.style.setProperty("display", childCount == disabledChildCount ? "none" : "grid");
	}
}

function Void_RunSearch()
{
	let result = Void_FuzzySearch(searchBar.value.toString(), 14);
	let children;

	if(searchMatch != null)
	{
		children = Array.from(searchMatch[1].linkedElement.children[1].children);
		
		for (let i = 0; i < children.length; i++) {
			const element = children[i];
			
			element.style.setProperty("--visiblity", "");
		}
	}

	searchMatch = narrowedCandidates[result.indx];
	
	for (let i = 0; i < narrowedCandidates.length; i++) {
		const element = narrowedCandidates[i][1].linkedElement;		
		
		let enable = searchBar.value == "" || searchBar.value != "" && element == narrowedCandidates[result.indx][1].linkedElement;
		element.style.setProperty("display", enable ? "grid" : "none");
	}
	
	if(searchBar.value == "")
		return;
	
	if(searchMatch != null)
		children = Array.from(searchMatch[1].linkedElement.children[1].children);
	
	let pieces = Array.from(searchMatch[1].pieces);

	for (let i = 0; i < children.length; i++) {
		const element = children[i];
		let matchFound = false;

		for (let c = 0; c < pieces.length; c++) {
			const child = pieces[c];
			matchFound = element == child;
			
			if(matchFound)
				break;
		}
		
		element.style.setProperty("--visiblity", matchFound ? "1" : "0.25");
	}
}

function Void_FuzzySearch(searchedTerm, tolerance)
{
	let minimumCost = 999999;
	let match = null;
	let i = 0;

	narrowedCandidates.forEach(element => {
		let distance = Int_LevenshteinDistance(element[0].toString().toLowerCase(), searchedTerm.toString().toLowerCase());
		
		if(distance <= tolerance && distance < minimumCost)
		{
			let entry = new Match();
			entry.cost = distance;
			entry.indx = i;
			
			match = entry;
			minimumCost = distance;
		}

		i++;
	});

	return match;
}

function Int_LevenshteinDistance(keyword, searchTerm)
{
	let m = keyword.length;
	let n = searchTerm.length;
	
	let lastRow = [n + 1];
	let currRow = [n + 1];

	for (let l = 0; l <= n; l++)
		lastRow[l] = l;

	for (let l = 1; l <= m; l++)
	{
		currRow[0] = l;

		for (let c = 1; c <= n; c++)
		{
			if(keyword[l - 1] == searchTerm[c - 1])
				currRow[c] = lastRow[c - 1];
			else
			{
				let deleteCost = lastRow[c];
				let insertCost = currRow[c - 1];
				let substituteCost = lastRow[c - 1];

				currRow[c] = 1 + Math.min(deleteCost, Math.min(insertCost, substituteCost));
			}
		}
		
		lastRow = Array.from(currRow);
	}
	
	return currRow[n];
}