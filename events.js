window.addEventListener('load', (event) => {
	const myLastTweet = document.getElementById('my_last_tweet');
	
	myLastTweet.textContent = 'MY LAST POST';
	
	const myFriends = document.querySelectorAll('.external_link');
	
	myFriends.forEach(element => {
		element.style.color = 'green'});
		
	console.log('Hotovo');	
});