<html>
	<head>
		<title>UGCW</title>

		<!--version = "1.5";-->

		<meta name="viewport" content="width=device-width, initial-scale=1.0">


		<!--Calling all external files-->
		<!--Creature report-->
		<script src="chat.js" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" media ="only screen and (min-width: 320px)" href="mobile_chat.css" >
		<link rel="stylesheet" type="text/css" media ="only screen and (min-height: 768px)" href="main_chat_readability.css" >
		<!-- <link rel="stylesheet" type="text/css" media ="only screen and (min-height: 768px)" href="main_chat.css" > -->
		<link rel="shortcut icon" type="image/x-icon" href="Assets/bigoof.png" />
		<script src="copyEmoji.js"></script>
		<script src="quotes.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script type="text/javascript" src="DOMPurify-main/dist/purify.min.js"></script>

		<style>
			.view {
				border:0px solid white;
			}

			.view2 {
				border: 0px solid red;
			}

			textarea#log{
				width:100%;
				height:100%;
			}

			.hide{
				display:none;
			}

		</style>

	</head>

	<body style="font-family:TimesNewRoman!" id="body">

		<div id="container" class="hide" style="position:relative;"> <!--this is the main page-->


			<div id="mainpg" class="view">
						<h1 title="RIP Master Notes Collaboration Website" id="titleMNCW">U.G.C.W.</h1>

						<div id="quotes-div" style="text-align:center;">
							<i id="quotes" rel="javascript" style="font-size:150%;"></i>
							<br>
							<div id="author">
								<script src="quotes.js"></script>
							</div>
						</div>
						<br>

					<div class="tabcontent view2"> <!-- Top banner -->

						<!--tablinks / button that go to each page-->
							<input type="button" class="tab__button active" onclick="openTab()" id="Chat" value="Chat">
							<input type="button" class="tab__button" onclick="openTab()" 	id="Sections" value="Resources">
							<input type="button" class="tab__button" onclick="openTab()" 	id="Other" value="Settings">
										<!--reload button-->
							<!--input type="image" class="view2" id="reload" width="100%" height="100%" src="Assets/reload.svg" /-->
							<input type="image" id="reload" src="Assets/reload.svg">
					</div>


				<!--chat content-->
				<div class="tabcontent" id="ChatContent">
					<div style="width:100%; float:left;">
						<div class="log_container" id="log_cont">
							<div id="log" name="chatlog" readonly style="left:400;top:279;height:50%;"></div>
						</div>
					</div>

						<input type="text" id="textbox" class="form" name="textbox" placeholder="Type something..." autocomplete="off"/>
						<input type="submit" id="submit" value="Send">

						<div class="flex-container">

						<div class="btn-group">
							<div class="dropdown">
							  <button class="emote-dropdown__emoji-icon"></button>
							  <div class="emote-dropdown__dropdown-content">
								  <input type="button" value="&#129315;"name="&#129315;" onclick="getEmoji(this)" class="emote" title="ROFL, developed by Mo"/>
								  <input type="button" value="&#128526;"name="&#128526;" onclick="getEmoji(this)" class="emote" title="Sunglasses, developed by Mo"/>
								  <input type="button" value="&#128557;" name="&#128557;" onclick="getEmoji(this)" class="emote" title="Loudly crying"/>
								  <input type="button" value="&#128561;" name="&#128561;" onclick="getEmoji(this)" class="emote" title="Shocked"/>
								  <input type="button" value="&#128530;" name="&#128530;" onclick="getEmoji(this)" class="emote" title="Unamused"/>
								  <input type="button" value="&#128527;" name="&#128527;" onclick="getEmoji(this)" class="emote" title="Smirking"/>
								  <input type="button" value="&#128564;" name="&#128564;" onclick="getEmoji(this)" class="emote" title="Sleeping, RIP Mo's sleep"/>
								  <input type="button" value="&#128548;" name="&#128548;" onclick="getEmoji(this)" class="emote" title="Mad"/>
								  <input type="button" value="&#128544;" name="&#128544;" onclick="getEmoji(this)" class="emote" title="Madder"/>
								  <input type="button" value="&#128545;" name="&#128545;" onclick="getEmoji(this)" class="emote" title="MAD AS AHEN QUOTE"/>
								  <input type="button" value="&#129488;" name="&#129488;" onclick="getEmoji(this)" class="emote" title="The YIP have arrived."/>
								  <input type="button" value="&#129318;" name="&#129318;" onclick="getEmoji(this)" class="emote" title="BRUV, AHEN QUOTE."/>
								  <input type="button" value="&#128373;" name="&#128373;" onclick="getEmoji(this)" class="emote" title="The YIP has arrived, again."/>

								  <input type="button" value="&#128077;"name="&#128077;" onclick="getEmoji(this)" class="emote" title="Thumbs up, developed by Mo"/>
								  <input type="button" value="&#128076;" name="&#128076;" onclick="getEmoji(this)" class="emote" title="NOICE"/>
								  <input type="button" value="&#128075;" name="&#128075;" onclick="getEmoji(this)" class="emote" title="Hello! Bye! I'm waving."/>

								  <input type="button" value="&#128064;" name="&#128064;" onclick="getEmoji(this)" class="emote" title="Eyes, the YIP is watching you.."/>
								  <input type="button" value="&#128175;" name="&#128175;" onclick="getEmoji(this)" class="emote" title="One + ninety-nine = hundred"/>
								  <input type="button" value="&#128293;" name="&#128293;" onclick="getEmoji(this)" class="emote" title="Fire Nation"/>
								  <input type="button" value="&#128169;" name="&#128169;" onclick="getEmoji(this)" class="emote" title="Earth Nation (no offense, we love Earth)"/>
								  <input type="button" value="&#127754;" name="&#127754;" onclick="getEmoji(this)" class="emote" title="Water Nation"/>
								  <input type="button" value="&#9992;" 	name="&#9992;" onclick="getEmoji(this)" class="emote" title="Air Nation"/>
								  <input type="button" value="&#129504;" name="&#129504;" onclick="getEmoji(this)" class="emote" title="BIG BRAIN"/>
								  <input type="button" value="👁️&#128068;👁️" name="👁️&#128068;👁️" onclick="getEmoji(this)" class="emote" title="Helpless..."/>
								  </div>
							</div>
						</div>

						<div class="dropdown">
					      <button class="emote-dropdown__sticker-icon"></button>
					      <div class="emote-dropdown__dropdown-content">
					        <input type="button" value="doge1" class="emote" onclick="getEmoji(this)" name=":dogeputin:"title="Miny Doge" />
					        <input type="button" value="doge2" class="emote" onclick="getEmoji(this)" name=":dogeputinXL:"title="Much Big Doge" />
					        <input type="button" value="lolol" class="emote" onclick="getEmoji(this)" name=":lmao:"/>
					        <input type="button" value="hmmmm" class="emote" onclick="getEmoji(this)" name=":thonk:"/>
					        <input type="button" value="wgat?" class="emote" onclick="getEmoji(this)" name=":wgat:"title="Huh" />
					        <input type="button" value="oof.." class="emote" onclick="getEmoji(this)" name=":bigoof:"/>
					        <input type="button" value="tesla" class="emote" onclick="getEmoji(this)" name=":elonlol:"/>
					        <input type="button" value="YEEEE" class="emote" onclick="getEmoji(this)" name=":yee:"/>
					        <input type="button" value="doge3" class="emote" onclick="getEmoji(this)" name=":dogedance:"/>
					        <input type="button" value="hyper" class="emote" onclick="getEmoji(this)" name=":hyperthink:"/>
					        <input type="button" value="read2" class="emote" onclick="getEmoji(this)" name=":readtwice:"/>
					        <input type="button" value="bruhh" class="emote" onclick="getEmoji(this)" name=":nosense:"/>
					        <input type="button" value="egg!!" class="emote" onclick="getEmoji(this)" name=":egg:"/>
					        <input type="button" value="ummmm" class="emote" onclick="getEmoji(this)" name=":um:"/>
					        <input type="button" value="shrug" class="emote" onclick="getEmoji(this)" name="¯\_(ツ)_/¯">
					      </div>
					    </div>
				</div>
			</div>

				<div class="tabcontent" id="SectionsContent"> <!--tab 2 (may have different name)-->
						<!--pre style="font-size:300%;text-align:center;">&nbsp;&#128512;&nbsp;&#128514;&nbsp;&#128531;&nbsp;&#128520;&nbsp;&#128539;&nbsp;&#128557;&nbsp;&#128534;&nbsp;&#128526;&nbsp;&#128567;&nbsp;&#127875;</pre-->

					<div id="SectionsContentTop" style="text-align:center;margin-top:60px;margin-bottom:10px;">
						<div style="font-size:150%;padding-bottom:10%;">
							<a target="_blank" class="lynk" style="float:left;width:45%;" href="https://tinyurl.com/y5l9tpda" target="_blank" id="vHist" title="Made from a broken sleep schedule">UGCW Version 2.0</a>
							<a target="_blank" class="lynk" style="float:left;width:45%;margin-left:5%" href="https://docs.google.com/document/d/1o0s6VEspQCCtux_TkCuhYoz1H7ZIqLISpJwRRR9Jdmk/edit?usp=sharing">UGC Document</a>
							<!-- The text field -->
						</div>
						<!--a target="_blank" href="https://invite.duolingo.com/BDHTZTB5CWWKTXIDI7IOHXECIE">Duolingo referral link</a> <br><br>
						<small>FYI the symbols and(&) plus(+) and quotations ("") are not usable in the chat.</small-->
					</div>

					<div style="margin-top:30;text-align:center;">

						<hr class="borderlineInsanity"></hr>
							<div>
								<p>Chess</p>
								<a target="_blank" class="lynk" href="https://lichess.org/">Lichess</a>
								<a target="_blank" class="lynk" href="https://www.chess.com/home">Chess.com</a>
								<a target="_blank" class="lynk" href="https://lichess.org/training/daily">POTD</a>
							</div>

							<div>
								<p>French</p>
								<a target="_blank" class="lynk" href="https://www.wordreference.com/">WordReference</a>
								<a target="_blank" class="lynk" href="https://www.duolingo.com/dictionary/fr">Duo Translate</a>
								<a target="_blank" class="lynk" href="https://feeds.feedblitz.com/french-word-of-the-day&x=1">WOTD-fr</a>
							</div>

							<div>
								<p>Other</p>
								<a target="_blank" class="lynk" href="https://snapdrop.net/">Snapdrop.net</a>
								<a target="_blank" class="lynk" href="https://app.myblueprint.ca/student/dashboard/activities">myBlueprint</a>
								<a target="_blank" class="lynk" href="https://feeds.feedblitz.com/japanese-word-of-the-day&x=1">WOTD-jp</a>
							</div>

							<br><br>
						<hr class="borderlineInsanity"></hr>
					</div>
				</div>

				<div class="tabcontent" id="OtherContent">

					<div class="settings">
						<div style="width:80rem;margin-left:15rem;">
							<div>
								<label class="switch" id="checkbox1">
								  <input type="checkbox" checked onclick="details_toggle();">
								  <span class="slider"></span>
								</label>
								<p>Show chat details</p>
							</div>

							<div>
								<label class="switch">
								  <input type="checkbox" checked onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');">
								  <span class="slider"></span>
								</label>
								<p>Allow us to sell your data to third-parties</p>
							</div>
							<button id="logout" title="The YIP questions your loyalty to the union...">Logout</button>
						</div>
					</div>
				</div>


			</div>

		</div>

			<!--underneath is the login page, hidden upon login-->
			<div class="loginpg" id="login">
					<p>genius collaborators' website</p>
					<p style="font-size:200%;">username:<input id="loginUser" class="loginInput" type=text></p>
					<p style="font-size:200%;">password:<input id="loginPass" class="loginInput" type=password>
						<label class="password_container" id="password_container_text">Show/hide
						  <input type="checkbox" onclick="passwordVisibility()" checked>
						  <span class="checkmark"></span>
						</label>
					</input>
					</p>
					<button id="loginSubmit" style="">submit</button>
			</div>

		<div class=view2 id="mode__control-box"> <!--Modes + Logout-->
				<label class="mode__radio-button"><input type="radio" name="mode" id="modeDefault" checked value="Default mode">Default mode</label><br>
				<label class="mode__radio-button"><input type="radio" name="mode" id="modeDark" value="Dark mode">Dark mode</label><br>
				<label class="mode__radio-button"><input type="radio" name="mode" id="modeMo" value="Mo(de)">Mo(de)<label><br>
		</div>

	</body>
</html>
