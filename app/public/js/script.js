function copyToClipboard() {
	const copyText = document.querySelector(
		".shortUrl_container_response"
	).textContent;
	console.log(copyText);
	navigator.clipboard.writeText(copyText);
}
