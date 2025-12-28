class Match
{
	candidate;
	cost;

	constructor()
	{
		this.candidate = "";
	}
}

let searchBar = document.getElementById("search");
let searchMatch;

function RunSearch()
{
	let result = FuzzySearch(searchBar.value.toString(), 14);

	for (let i = 0; i < artEntries.length; i++) {
		const element = artEntries[i];
		
		let disable = searchBar.value != "" && result != null && element != entries[result.candidate].linkedElement;
		element.style.setProperty("display", disable ? "none" : "block");

		if(element.style.getPropertyValue("display") == "block")
			searchMatch = entries[result.candidate];
	}
	
	let children = Array.from(searchMatch.linkedElement.children[1].children);
	let pieces = Array.from(searchMatch.pieces);

	for (let i = 0; i < children.length; i++) {
		const element = children[i];
		let matchFound = false;

		for (let c = 0; c < pieces.length; c++) {
			const child = pieces[c];
			matchFound = element == child;
			if(matchFound)
				break;
		}
		
		element.style.setProperty("opacity", matchFound ? "1" : "0.25");
	}
}

function FuzzySearch(searchedTerm, tolerance)
{
	let minimumCost = 999999;
	let matchIndx = -1;

	let matches = [];
	
	Object.entries(entries).forEach(element => {
		let distance = LevenshteinDistance(element[0].toString().toLowerCase(), searchedTerm.toString().toLowerCase());

		if(distance <= tolerance)
		{
			let entry = new Match();
			entry.candidate = element[0];
			entry.cost = distance;
			matches.push(entry);
		}
	});

	for (let i = 0; i < matches.length; i++) {
		const element = matches[i];
		
		if(element.cost < minimumCost)
		{
			minimumCost = element.cost;
			matchIndx = i;
		}
	}

	return matchIndx == -1 ? null : matches[matchIndx];
}

function LevenshteinDistance(keyword, searchTerm)
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