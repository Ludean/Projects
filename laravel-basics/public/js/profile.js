var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		var profile = JSON.parse(xhr.responseText);
		console.log(profile);
	};
};

xhr.open('GET', 'data/user-profile.json');
xhr.send();