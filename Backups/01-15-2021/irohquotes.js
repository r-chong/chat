//console.log("quotes operational")

	var random_number = Math.floor(Math.random()*12);

	var quoteArray = [
	'I know you&#39;re not supposed to cry over spilled tea,<br>But it&#39;s just so sad!',
	'Sick of tea? That&#39;s like being sick of breathing!',
	'Life happens wherever you are, whether you make it or not.',
	'Prince Zuko, pride is not the opposite of shame, but it&#39;s source.<br>True humility is the only antidote to shame.',
	'Sometimes life is like this dark tunnel,<br>You can&#39;t always see the light at the end of the tunnel,<br>But if you just keep moving, you will come to a better place.',
	'It&#39s important to draw wisdom from many different places...<br>If we take it from only one place it becomes rigid and stale.',
	'Good times become good memories,<br>But bad times make good lessons.',
	'Failure is only the opportunity to begin again.',
	'In the darkest of times, hope is something you give yourself. <br> That is the meaning of inner strength',
	'While it is always best to believe in oneself,<br>A little help from others can be a great blessing.',
	'Sharing tea with a fascinating stranger is one of life&#39s true delights.',
	'Destiny is a funny thing.<br>You never know how things are going to work out. But if you keep an open mind and an open heart,<br> I promis you will find your own destiny someday.',
	]

	document.getElementById("quotes").innerHTML = quoteArray[random_number];