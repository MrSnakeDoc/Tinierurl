function copyToClipboard() {
	const copyText = document.querySelector(
		".shortUrl_container_response"
	).textContent;
	navigator.clipboard.writeText(copyText);
}
