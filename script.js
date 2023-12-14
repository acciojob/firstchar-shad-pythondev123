function firstChar(text) {
  // your code here
	let n= text.length;
	for(let i=0; i<n; i++){
		if(text[i]!= ' ') return text[i];
	}
	return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
