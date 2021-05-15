<html>
	<head>
		<title>Master Notes Collaboration</title>
		
		<!--version = "1.5";-->
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		
		<!--Calling all external files-->
		<!--Creature report-->
		<script src="chat.js" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" media ="only screen and (min-width: 320px)" href="mobile_chat.css" >
		<link rel="stylesheet" type="text/css" media ="only screen and (min-width: 1280px)" href="main_chat.css" >
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
						
						<div id="quotesDiv" style="text-align:center;">
							<i id="quotes" rel="javascript" style="font-size:150%;"></i>
							<br>
							<div id="author">
								<script src="quotes.js"></script>
							</div>
						</div>
						<br>
					
					<div class="tabcontent view2"> <!-- Top banner -->
						
						<!--tablinks / button that go to each page-->
							<input type="button" class="tablinks active" onclick="openTab2()" id="Chat" value="Chat">
							<input type="button" class="tablinks" onclick="openTab2()" 	id="Sections" value="Resources">
							<input type="button" class="tablinks" onclick="openTab2()" 	id="Other" value="Settings">	
										<!--reload button-->
							<!--input type="image" class="view2" id="reload" width="100%" height="100%" src="Assets/reload.svg" /-->
							<input type="image" id="reload" class="rotate wait" onmouseover="reloadOnHover(this)" src="Assets/reload.svg">							

			
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
					
					<?php
						include('dropdown.html');
					?>
				</div>
				
				<div class="tabcontent" id="SectionsContent"> <!--tab 2 (may have different name)-->
						<!--pre style="font-size:300%;text-align:center;">&nbsp;&#128512;&nbsp;&#128514;&nbsp;&#128531;&nbsp;&#128520;&nbsp;&#128539;&nbsp;&#128557;&nbsp;&#128534;&nbsp;&#128526;&nbsp;&#128567;&nbsp;&#127875;</pre-->
					
					<div id="SectionsContentTop" style="text-align:center;margin-top:60px;margin-bottom:10px;">
						<div style="font-size:150%;padding-bottom:10%;">
							<a target="_blank" class="lynk" style="float:left;width:45%;" href="https://tinyurl.com/y5l9tpda" target="_blank" id="vHist" title="Made from a broken sleep schedule">UGCW Version 2.0</a>
							<a target="_blank" class="lynk" style="float:left;width:45%;margin-left:5%" href="https://docs.google.com/document/d/1a6CC-QbsSrQsS2kVk930HUDtcLuYnOIwLij50khnnhY/edit?usp=sharing">UGC Document</a>
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
							</div>  
							        
							<div>   
								<p>French</p>
								<a target="_blank" class="lynk" href=" https://bescherelle.com/">Bescherelle</a>
								<a target="_blank" class="lynk" href="https://www.wordreference.com/">WordReference</a>
								<a target="_blank" class="lynk" href="https://www.duolingo.com/dictionary/fr">Duo Translate</a>
							</div>  
							        
							<div>   
								<p>School</p>
								<a target="_blank" class="lynk" href="https://durham.elearningontario.ca/d2l/home">D2L</a>
								<a target="_blank" class="lynk" href="https://sites.google.com/ddsb.ca/virtual-morning-announcements/home">VMAs</a>
							</div>
							      
							<div> 
								<p>Other</p>
								<a target="_blank" class="lynk" href="https://snapdrop.net/">Snapdrop.net</a> 
								<a target="_blank" class="lynk" href="https://app.myblueprint.ca/student/dashboard/activities">myBlueprint</a>
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
								  <input type="checkbox">
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
					<p style="font-size:200%;">password:<input id="loginPass" class="loginInput" type=password></p>
					<button id="loginSubmit" style="">submit</button>		
			</div>		
		
		<div class=view2 id="controlBox"> <!--Modes + Logout-->
				<label class="radioButton"><input type="radio" name="mode" id="modeDefault" checked value="Default mode">Default mode</label><br>
				<label class="radioButton"><input type="radio" name="mode" id="modeDark" value="Dark mode">Dark mode</label><br>
				<label class="radioButton"><input type="radio" name="mode" id="modeMo" value="Mo(de)">Mo(de)<label><br>
		</div>
		
	</body>
</html>