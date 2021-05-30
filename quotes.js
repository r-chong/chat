//console.log("quotes operational")

//math.random generates a number in between 0 and 1
//math.floor rounds the math.random
//multiply by # of quotes
//&#39s is apostrophe

var quoteArray = [
  [
    "I know you&#39;re not supposed to cry over spilled tea,<br>But it&#39;s just so sad!",
    "Uncle Iroh",
  ],
  ["Sick of tea? That&#39;s like being sick of breathing!", "Uncle Iroh"],
  ["Life happens wherever you are, whether you make it or not.", "Uncle Iroh"],
  [
    "Prince Zuko, pride is not the opposite of shame, but it&#39;s source.<br>True humility is the only antidote to shame.",
    "Uncle Iroh",
  ],
  //['Sometimes life is like this dark tunnel,<br>You can&#39;t always see the light at the end of the tunnel,<Br>But if you just keep moving, you will come to a better place.', "Uncle Iroh"],
  [
    "It&#39s important to draw wisdom from many different places...<br>If we take it from only one place it becomes rigid and stale.",
    "Uncle Iroh",
  ],
  [
    "Good times become good memories,<br>But bad times make good lessons.",
    "Uncle Iroh",
  ],
  ["Failure is only the opportunity to begin again.", "Uncle Iroh"],
  [
    "In the darkest of times, hope is something you give yourself. <br> That is the meaning of inner strength",
    "Uncle Iroh",
  ],
  [
    "While it is always best to believe in oneself,<br>A little help from others can be a great blessing.",
    "Uncle Iroh",
  ],
  [
    "Sharing tea with a fascinating stranger is one of life&#39s true delights.",
    "Uncle Iroh",
  ],
  [
    "Destiny is a funny thing.<br>You never know how things are going to work out.<br>But if you keep an open mind and an open heart, I promise you will find your own destiny someday.",
    "Uncle Iroh",
  ],
  [
    "SECRET TUNNELLLLLLLLLLLL<br>SECRET TUNNELLLLLLLLLLLL<br>THROUGH THE MOUNTAINS<br>Secret, Secret, Secret TUNNELLLL",
    "Travelling Nomad, ATLA",
  ][("Where in the world is Carmen<br>Sandiego?", "Unknown")],
  [
    "The three chief virtues of a programmer are: Laziness, Impatience and Hubris.",
    "Larry Wall",
  ],
  [
    "Persistence is very important. You should not give up unless you are forced to give up.",
    "Elon Musk",
  ],
  ["I would like to die on Mars. Just not on impact.", "Elon Musk"],
  [
    "I can&#39;t change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Jimmy Dean",
  ],
  [
    "It is during our darkest moments that we must focus to see the light.",
    "Aristotle Onassis",
  ],
  [
    "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    "Vince Lombardi",
  ],
  [
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "Joseph Campbell",
  ],
  [
    "Don&#39;t judge each day by the harvest you reap but by the seeds that you plant.",
    "Robert Louis Stevenson",
  ],
  ["{Insert Neha Quote}", "Neha Kasoju"],
  ["quote", "Neha Kasoju"],
  [
    "Keep your fears to yourself, but share your courage with others.",
    "Robert Louis Stevenson",
  ],
  [
    "A person who never made a mistake never tried anything new.",
    "Albert Einstein",
  ],
  [
    "I always wanted to be somebody, but now I realize I should have been more specific.",
    "Lily Tomlin",
  ],
  ["Hello", "Your FBI agent"],
  [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "Albert Einstein",
  ],
  [
    "There are no passengers on spaceship earth. We are all crew.",
    "Marshall McLuhan",
  ],
  [
    "When we hit our lowest point, we are open to the greatest change.",
    "Avatar Aang, Legend of Korra",
  ],
  [
    "Land on Mars, a round-trip ticket - half a million dollars. It can be done.",
    "Elon Musk",
  ],
  [
    "The problem with being faster than light is that you can only live in darkness.",
    "Meme, Unknown author",
  ],
  ["If you don&#39;t innovate, you will fall behind.", "Mohammad A."],
  [
    "It is better to remain silent and be thought a fool, than to speak and remove all doubt.",
    "Maurice Switzer (paraphrased)",
  ],
  [
    "When all else is lost, the future still remains.",
    "Christian Nestell Bovee",
  ],
  [
    "There are basically two types of people.<br>People who accomplish things, and people who claim to have accomplished things.<br>The first group is less crowded.",
    "Mark Twain",
  ],
  [
    "I am a servant of the Secret Fire, wielder of the flame of Anwar.<br>YOU SHALL NOT PASS",
    "Mo",
  ],
  ["You must do the things you think you cannot do.", "Eleanor Roosevelt"],
  [
    "Start by doing what&#39;s necessary, then do what&#39;s possible;<br>and suddenly you are doing the impossible.",
    "Francis of Assisi",
  ],
  ["No act of kindness, no matter how small, is ever wasted.", "Aesop"],
  [
    "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
    "Rabindranath Tagore",
  ],
  ["What&#39;s another word for Thesaurus?", "Steven Wright"],
  [
    "I am not afraid of storms, For I am learning how to sail my ship.",
    "Louisa May Alcott",
  ],
  [
    "The rich will do anything for the poor but get off their backs.",
    "Karl Marx",
  ],
  ["It always seems impossible until it&#39;s done.", "Nelson Mandela"],
  ["Money printer go brrrrrrr.", "Unknown Entity"],
  ["You are now hacked", "Hacker"],
  [
    "I&#39;m not sure, I&#39;m getting back into the coding mindset though that&#39;s for sure.",
    "Reese Chong",
  ],
  ["The more you have on your plate, the worse It&#39;be if you drop it."][
    ("Politics can never be conquered, leave them to others.<br>You can win one election, rig the other ones.<br>But some day, your form of government will fall.",
    "Mo")
  ],
  ["Quote printer go brrrr", "Mo"],
  ["The journey of a thousand miles begins with one step.", "Lao Tzu"],
  [
    "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    "Jim Elliot",
  ],
  [
    "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
    "Archimedes",
  ],
  [
    "Wherever there is a human being, there is an opportunity for a kindness.",
    "Lucius Annaeus Seneca",
  ],
  ["Art is the triumph over chaos.", "John Cheever"],
  [
    "There is nothing in a caterpillar that tells you it&#39;s going to be a butterfly.",
    "R. Buckminster Fuller",
  ],
  [
    "You can accomplish anything in life if you are willing to work for it.",
    "Drew Brees",
  ],
  [
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Buddha",
  ],
  ["He who has a why to live can bear almost any how.", "Friedrich Nietzsche"],
  [
    "We must be willing to let go of the life we have planned, so as to have the life that is waiting for us.",
    "E. M. Forster",
  ],
  ["Not me", "Neha"],
  ["Why not do both?", "Reese"],
  ["Fluent, eh?<br>Me, I just dabble in languages.", "Reese"],
  ["Bingo", "Bonk Meowlhead"],
  ["BWAHAHAHA", "Neha"],
  [
    "If you get up in the morning and think the future is going to be better, it is a bright day.<br> Otherwise, it&#39;s not.",
    "Elon Musk",
  ],
  [
    "Some people don&#39;t like change, but you need to embrace change if the alternative is disaster.",
    "Elon Musk",
  ],
  //['If your friend has never agreed with you, <br>never taken your side,<br>always used you, <br>ditch them, they are a bad friend.','Unknown'],
  ["No u", "Mo"],
  [
    "If something&#39;s important enough, you should try.<br>-Even if - the probable outcome is failure.",
    "Elon Musk",
  ],
  [
    "Don&#39;t write thirty quantitative sentences....<br>Only to get the same mark as the friend who wrote one qualitative sentence.",
    "Mohammad A.",
  ],
  [
    "Patience is a virtue, and I&#39;m learning patience. It&#39;s a tough lesson.",
    "Elon Musk",
  ],
  ["Any product that needs a manual to work is broken.", "Elon Musk"],
  ["Life is too short for long-term grudges.", "Elon Musk"],
  ["I think it matters whether someone has a good heart.", "Elon Musk"],
  [
    "If humanity doesn&#39;t land on Mars in my lifetime, I would be very disappointed.",
    "Elon Musk",
  ],
  [
    "A real friend is one who walks in when the rest of the world walks out.",
    "Walter Winchell",
  ],
  ["Never give in and never give up.", "Hubert H. Humphrey"],
  [
    "Life is 10% what happens to you and 90% how you react to it.",
    "Charles R. Swindoll",
  ],
  ["Believe It!", "Naruto"],
  [
    "Those Who Break The Rules Are Scum<br>But, Those Who Abandon Their Friends Are Worse Than Scum.",
    "Obito Uchiha",
  ],
  [
    "Someone who can&#39;t sacrifice anything, can&#39;t ever change anything.",
    "Armin Arlert AOT",
  ],
  ["If you don&#39;t want to die...think", "Levi Ackerman AOT"],
  ["Endure it! Don&#39;t let go yet!-", "Armin Arlert AOT"],
  ["I&#39;m going to keep on making history.", "Amanda Nunes"],
  [
    "I&#39;m just going to have to keep working on what I have to and keep chasing my goals.",
    "Grigor Dimitrov",
  ],
  ["I will always choose quality over quantity.", "Amyra Dastur"],
  [
    "Life is what happens while you are busy making other plans.",
    "John Lennon",
  ],
  ["The only true wisdom is in knowing you know nothing.", "Socrates"],
  ["Every new beginning comes from some other beginning&#39;s end.", "Seneca"],
  [
    "Every day is a new day, and you&#39;ll never be able to find happiness if you don&#39;t move on.",
    "Carrie Underwood",
  ],
  [
    "Don&#39;t write thirty quantitative paragraphs...<br>Only to get the same mark as the friend who wrote one qualitative paragraph.",
    "Mohammad A.",
  ],
  [
    "Some cause happiness wherever they go; others whenever they go.",
    "Oscar Wilde",
  ],
  [
    "It is during our darkest moments that we must focus to see the light.",
    "Aristotle Onassis",
  ],
  ["We know what we are, but know not what we may be.", "William Shakespeare"],
  [
    "We need to innovate, become a multiplanetary species, and survive.",
    "Mohammad A",
  ],
  [
    "When people complain I say: the U.G.C was not built in a day, it took years, hardcoding, programmers, geniuses, and a whole lot more!",
    "Mohammad A.",
  ],
  ["Do not work hard, work smart!", "Mohammad A."],
  ["Teamwork makes the dreams come true!", "Mohammad A."],
  [
    '“Forty-two," said Deep Thought, with infinite majesty and calm.” “The Answer to the Great Question... Of Life, the Universe and Everything...:”',
    "The Hitchhiker&#39;s Guide to the Galaxy",
  ],
  ["Pants are an illusion, and so is death.", "Huu, ATLA"],
  [
    "The man who moves a mountain begins by carrying away small stones.",
    "Confucius",
  ],
  ["The z&#39;s in this font look weird", "zzz"],
  ["Can you please type like a human and not like a monkey?", "Neha"],
  ["An ounce of prevention is worth a pound of cure", "Benjamin Franklin"],
  ["A year from now, you may wish you had started today", "Karen Lamb"],
  ["Buh bye", "Mo, 12:09 AM, 2021/01/27, UGCW"],
  ["woo poggers", "Unknown author (Maybe Archimedes?)"],
  [
    "Eh? Why make an ahen quote chat when we got UGCW. <br> UGCW is THE POG",
    "Mo",
  ],
  ["To get the best people we try to make awesome offices", "Unknown author"],
  [
    "I spent two hours in shopify js, all I needed was 3 lines of CSS",
    "Reese Chong",
  ],
  [
    "If you know the enemy and know yourself, you need not fear the results of a hundred battles.",
    "Sun Tzu",
  ],
  ["Know thyself", "Socrates"][
    ("Never be afraid to sit a while and think.", "Lorraine Hansberry")
  ],
  [
    "Knowledge is of no value unless you put it into practice.",
    "Anton Chekhov",
  ],
  ["Being entirely honest with oneself is a good exercise.", "Sigmund Freud"],
  [
    "We cannot become what we need to be by remaining what we are.",
    "Max de Pree",
  ],
  [
    "Set your course by the stars, not by the lights of every passing ship.",
    "Omar N. Bradley",
  ],
  ["Be happy. It&#39;s one way of being wise.", "Sidonie Gabrielle Colette"],
  [
    "Today&#39;s mighty oak is just yesterday&#39;s nut, that held its ground.",
    "David Icke",
  ],
  [
    "It&#39;s not what you look at that matters, it&#39;s what you see.",
    "Henry David Thoreau",
  ],
  ["Slow and steady wins the race.", "Robert Lloyd"],
  [
    "You always have two choices: your commitment versus your fear.",
    "Sammy Davis, Jr.",
  ],
  ["If the world were perfect, it wouldn&#39;t be.", "Yogi Berra"],
  [
    "Even if you&#39;re on the right track, you&#39;ll get run over if you just sit there.",
    "Will Rogers",
  ],
  [
    "What happens is not as important as how you react to what happens.",
    "Ellen Glasgow",
  ],
  [
    "In order to succeed, we must first believe that we can.",
    "Nikos Kazantzakis",
  ],
  ["Expect problems and eat them for breakfast.", "Alfred A. Montapert"],
  [
    "Shoot for the moon. Even if you miss, you will land among the stars.",
    "Norman Vincent Stone",
  ],
  ["Only I can change my life. No one can do it for me.", "Carol Burnett"],
  ["Quality is not an act, it is a habit.", "Aristotle"],
  ["Set your goals high, and don&#39;t stop till you get there.", "Bo Jackson"],
  ["Every exit is an entry somewhere else.", "Tom Stoppard"],
  ["I can, therefore I am.", "Simone Weil"],
  ["Leap, and the net will appear.", "John Burroughs"],
  [
    "Life is 10% what happens to you and 90% how you react to it.",
    "Charles R. Swindoll",
  ],
  ["If you fell down yesterday, stand up today.", "H. G. Wells"],
  [
    "With the new day comes new strength and new thoughts.",
    "Eleanor Roosevelt",
  ],
  [
    "Perseverance is not a long race; it is many short races one after the other.",
    "Walter Elliot",
  ],
  [
    "Even if you fall on your face, you&#39;re still moving forward.",
    "Victor Kiam",
  ],
  [
    "Never resign in chess, play honourably, you always have a chance to win",
    "Mo",
  ],
  ["Life is like chess, every move affects the next one, play wisely", "Mo"],
  ["Life is like chess, play wisely, and you can win", "Mo"],
  ["Trial by fire, a great way to learn", "Unknown"],
  ["If you can dream it, you can do it.", "Walt Disney"],
  ["Don&#39;t watch the clock; do what it does. Keep going.", "Sam Levenson"],
  ["Be kind whenever possible. It is always possible.", "Dalai Lama"],
  [
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "Samuel Beckett",
  ],
  [
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Franklin D. Roosevelt",
  ],
  ["Problems are not stop signs, they are guidelines.", "Robert H. Schuller"],
  ["Either I will find a way, or I will make one.", "Philip Sidney"],
  ["No bird soars too high if he soars with his own wings.", "William Blake"],
  ["Without hard work, nothing grows but weeds.", "Gordon B. Hinckley"],
  ["I am not afraid... I was born to do this.", "Joan of Arc"],
  ["You just can&#39;t beat the person who never gives up.", "Babe Ruth"],
  [
    "Changes call for innovation, and innovation leads to progress.",
    "Li Keqiang",
  ],
  [
    "There is no innovation and creativity without failure. Period.",
    "Brene Brown",
  ],
  [
    "The heart and soul of the company is creativity and innovation.",
    "Bob Iger",
  ],
  ["Innovation distinguishes between a leader and a follower.", "Steve Jobs"],
  ["Innovation is the calling card of the future.", "Anna Eshoo"],
  ["Innovation requires an experimental mindset.", "Denise Morrison"],
  ["Great companies are built on great products.", "Elon Musk"],
  ["Invest in Yourself and the Union!", "U.G.C"],
  [
    "Once you replace negative thoughts with positive ones, you&#39;ll start having positive results.",
    "Willie Nelson",
  ],
  ["For the Union!", "U.G.C"],
  [
    "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
    "Lyndon B. Johnson",
  ],
  ["A good laugh is sunshine in the house.", "William Makepeace Thackeray"],
  [
    "A strong, positive self-image is the best possible preparation for success.",
    "Joyce Brothers",
  ],
  ["Live life to the fullest, and focus on the positive.", "Matt Cameron"],
  [
    "Always turn a negative situation into a positive situation.",
    "Michael Jordan",
  ],
  ["Every day brings new choices.", "Martha Beck"],
  [
    "Work hard, stay positive, and get up early. It&#39;s the best part of the day.",
    "George Allen, Sr.",
  ],
  [
    "Correction does much, but encouragement does more.",
    "Johann Wolfgang von Goethe",
  ],
  ["All I want to do, ever, is play chess.", "Bobby Fischer"],
  ["In life, as in chess, forethought wins.", "Charles Buxton"],
  [
    "I like the feeling when you don&#39;t have much time and you have to think fast.",
    "Hikaru Nakamura",
  ],
  ["Pride is not the opposite of shame, but its source.", "Uncle Iroh"],
  ["It&#39;s easy to do nothing, it&#39;s hard to forgive.", "Aang"],
  ["My cabbages!!", "The Cabbage Merchant"],
  ["You can&#39;t knock me down!", "Katara"],
  ["{Roar}", "Appa"],
  ["The past can be a great teacher", "Aang"],
  ["Anyone is capable of great good and great evil.", "Aang"],
  ["In the darkness, hope is something you give yourself", "Uncle Iroh"],
  [
    "There are reasons each of us are born. We have to find those reasons.",
    "Uncle Iroh",
  ],
  ["I think you are very wise to choose happiness and love.", "Uncle Iroh"],
  ["Love is brightest in the dark.", "Katara"],
  ["I&#39;m too young to die!", "Sokka"],
  ["Don&#39;t you know that fans only make flames stronger?", "Azula"],
  ["There is no war in Ba Sing Se", "Joo Dee (Not an Agent of the Dai Li)"],
  [
    "You need to find someone who <u>waits</u> and <i>listens</i> before striking.",
    "King Bumi",
  ],
  [
    "Squish, Squash, Sling that slang. I&#39;m always right back atcha, like my... <b>boomerang!",
    "Sokka",
  ],
  [
    "A forgetful man walked into a bar...",
    "I don&#39;t remember what he did next",
  ],
  [
    "Let go of your earthly tether. Enter the void, empty, and become wind",
    "Guru Laghima",
  ],
  ["All roads lead to Rome", "Latin proverb"],
  ["Per aspera, ad astra", "Seneca"],
  ["I&#39;m the avatar, and you&#39;ve got to DEAL with it!", "Korra"],
  [
    "When we reach our lowest point, we are open to the greatest change.",
    "Avatar Aang, LoK",
  ],
  ["Like steel sharpens steel, comrade sharpens comrade", "Mo"],
  ["In the age of information, ignorance is a choice.", "Donald Miller"],
  ["Every ending is a new beginning", "Marianne Williamson"],
  [
    "In order to succeed, we must first believe that we can.",
    "Nikos Kazantzakis",
  ],
  ["Quality is not an act, it is a habit.", "Aristotle"],
  ["#POG", "YIP"],
  ["Every exit is an entry somewhere else.", "Tom Stoppard"],
  ["Set your goals high, and don&#39;t stop till you get there.", "Bo Jackson"],
  ["Leap, and the net will appear.", "John Burroughs"],
  [
    "Perseverance is not a long race; it is many short races one after the other.",
    "Walter Elliot",
  ],
  ["Be kind whenever possible. It is always possible.", "Dalai Lama"],
  ["Problems are not stop signs, they are guidelines.", "Robert H. Schuller"],
  ["No you&#39;re breathtaking", "Keanu Reeves, E3 2020"],
  ["If you fell down yesterday, stand up today.", "H. G. Wells"],
  ["Dream big, to go to stars, miss and you may hit Mars.", "mh-anwar"],
  ["You want to be older? Wait till you are fifty.", "Mme. Cochrane"],
  ["No bird soars too high if he soars with his own wings.", "William Blake"],
  ["You know that helicopter mom? That&#39;s me", "Mme. Labrakos"],
  ["Think like dev! Think like dev!", "Mo"],
  [
    "Programming in class <del>even tho I shouldn&#39;t</del> like I should be",
    "Mo & Reese",
  ],
  ["Easy peasy lemon smokey", "Reese Chong"],
  ["Okie dokie lemon smokey", "Reese Chong"],
  ["As steel sharpens steel, comrade sharpens comrade.", "YIP"],
  ["Think like a proton, always positive.", "Ms. Chan"],
  ["I think, in the end, engineering becomes coding.", "Ms. Chan"],
  [
    "Certificates are great, but investing in ourselves has guaranteed returns.",
    "Reese Chong",
  ],
  ["If you need help, ask!", "Ms. Chan"],
  ["Atom editor POG", "CopyThat extension Developer"],
  ["Spotify rap song overload", "Neha Kasoju"],
  [
    "Ingenuity plus Perseverance equals MARK ROBER",
    "Perseverance Mission 2021",
  ],
  [
    "I want you to remember to always be curious and ask questions.",
    "Mme. Cochrane",
  ],
  ["What would Stockfish do...", "Reese Chong"],
  ["&#127922; Reload UGCW! &#127922;", "Drumroll please"],
  [
    "If you fail, try again, and keep trying until you innovate so much, that you have succeeded.",
    "Mo",
  ],
  ["You are enough.", "Ms. Chan"],
  [
    "Good teachers, are hard to come by, if you find one, treasure every moment with them",
    "Unknown Proverb",
  ],
  ["Only I can change my life. No one can do it for me.", "Carol Burnett"],
  ["Without hard work, nothing grows but weeds.", "Gordon B. Hinckley"],
  ["Either I will find a way, or I will make one.", "Philip Sidney"],
  ["Expect problems and eat them for breakfast.", "Alfred A. Montapert"],
  ["You will never win if you never begin.", "Helen Rowland"],
  ["You just can&#39;t beat the person who never gives up.", "Babe Ruth"],
  [
    "I attribute my success to this. I never gave or took any excuse.",
    "Florence Nightingale",
  ],
  [
    "The ultimate aim of the ego is not to see something, but to be something.",
    "Muhammad Iqbal",
  ],
  [
    "You can never quit. Winners never quit, and quitters never win.",
    "Ted Turner",
  ],
  [
    "Never retreat. Never explain. Get it done and let them howl.",
    "Benjamin Jowett",
  ],
  [
    "Perseverance is failing 19 times and succeeding the 20th.",
    "Julie Andrews",
  ],
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["Well done is better than well said.", "Benjamin Franklin"],
  ["If you&#39;re going through hell, keep going.", "Winston Churchill"],
  [
    "Everyday, seems like D-Day, keep fighting, persevere and you will win",
    "Mo",
  ],
  ["I am not a has-been. I am a will be.", "Lauren Bacall"],
  ["By failing to prepare, you are preparing to fail.", "Benjamin Franklin"],
  [
    "It does not matter how slowly you go as long as you do not stop.",
    "Confucius",
  ],
  ["Keep your eyes on the stars and launch, to Mars", "Unknown Proverb"],
  ["Act as if what you do makes a difference. It does.", "William James"],
  [
    "Go big or go home. Because it&#39;s true. What do you have to lose?",
    "Eliza Dushku",
  ],
  ["A will finds a way.", "Orison Swett Marden"],
  ["The Natural Order Is Disorder.", "Zaheer, LoK"],
  [
    "Accept What Happened To You. Don&#39;t Fear What Might Have Been.",
    "Zaheer, LoK",
  ],
  [
    "When you base your expectations only on what you see<br>you blind yourself to the possibilities of a new reality.</br>",
    "Zaheer, LoK",
  ],
  ["Nature is constantly changing - like the wind.", "Zaheer, LoK"],
  ["Once change begins, it cannot be stopped.", "Zaheer, LoK"],
  [
    "If you have curiosity, perseverance and an idea, fight, and make thine idea a reality",
    "U.G.C Proverb",
  ],
  ["Never complain and never explain.", "Benjamin Disraeli"],
  [
    "One way to keep momentum going is to have constantly greater goals.",
    "Michael Korda",
  ],
  ["If you think you can do it, you can.", "John Burroughs"],
  ["Nothing is easy, thou must keep on going", "U.G.C. Proverb"],
  [
    "Programming is not easy, nothing is, persevere and you will solve your problem",
    "U.G.C. Programmers",
  ],
  ["Life is what you make of it, make the best out of it!", "U.G.C. Proverb"],
  [
    "Setting goals is the first step in turning the invisible into the visible.",
    "Tony Robbins",
  ],
  [
    "You are never too old to set another goal or to dream a new dream.",
    "Les Brown",
  ],
  ["#INVESTING_IN_OURSELVES", "U.G.C"],
  ["Learning, is a life-long journey. Never stop learning!", "U.G.C. Proverb"],
  ["Go for it now. The future is promised to no one.", "Wayne Dyer"],
  [
    "Follow your inner moonlight; don&#39;t hide the madness.",
    "Allen Ginsberg",
  ],
  ["IT&#39;S ALIVE", "Late-Night-Programmer"],
  ["Life is a rocky trail, thou must persevere.", "U.G.C. Proverb"],
  ["I don&#39;t like the U.G.C.", "said No-One-Ever"],
  ["The U.G.C. is a safe haven, for curious minds.", "The YIP"],
  [
    "The U.G.C was not built in a day, it took multiple manifestos, perseverance and a lot more!",
    "Mo",
  ],
  [
    "Accept the challenges so that you can feel the exhilaration of victory.",
    "George S. Patton",
  ],
  ["Don&#39;t think, just do.", "Horace"],
  [
    "Think wisely, think quickly, life is a game of chess. However, lose once and you are out.",
    "U.G.C. Chess-Master",
  ],
  ["They can conquer who believe they can.", "Virgil"],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
  [
    "Always do your best. What you plant now, you will harvest later.",
    "Og Mandino",
  ],
  [
    "Never gonna give you up, Never gonna let you down, Never gonna run around and desert you",
    " Rick Astley",
  ],
  ["Motivation will almost always beat mere talent.", "Norman Ralph Augustine"],
  ["Step by step and the thing is done.", "Charles Atlas"],
  ["Either you run the day or the day runs you.", "Jim Rohn"],
  [
    "Take one step, and suddenly you have accomplished what seemed impossible.",
    "Mo",
  ],
  [
    "It takes an ahen-quote amount of perseverance to be a programmer",
    "U.G.C. Programmers",
  ],
  ["To begin, begin.", "William Wordsworth"],
  ["Never gonna give you up! Never gonna let you down!", "Reese Chong"],
  [
    "The people who influence you are the people who believe in you.",
    "Henry Drummond",
  ],
  ["We believe in you", "U.G.C Members"],
  ["There is always room at the top.", "Daniel Webster"],
  ["The most effective way to do it, is to do it.", "Amelia Earhart"],
  ["Small deeds done are better than great deeds planned.", "Peter Marshall"],
  ["Deserve your dream.", "Octavio Paz"],
  ["Always desire to learn something useful.", "Sophocles"],
  ["Be gentle to all and stern with yourself.", "Saint Teresa of Avila"],
  ["Say it now, and you will not regret it later.", "U.G.C Guru"],
  ["Things do not happen. Things are made to happen.", "John F. Kennedy"],
  ["Coding is for novices, programming is for geniuses", "U.G.C. Programmers"],
  ["It takes multiple geniuses to build a Union.", "U.G.C. Members"],
  [
    "It took laws, late-night programming, and a whole lotta ahen-quote to make the U.G.C. but it is worth it.",
    "U.G.C Founding Members",
  ],
  ["If you don&#39;t ask, you don&#39;t get.", "Stevie Wonder"],
  ["You create your opportunities by asking for them.", "Shakti Gawain"],
  [
    "We may encounter many defeats but we must not be defeated.",
    "Maya Angelou",
  ],
  [
    "If you encounter a defeat, do a tactical retreat, and rebound once again.",
    "U.G.C. War Tactician",
  ],
  ["Work hard, work your butt off", "Ms.Chan"],
  [
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "William Butler Yeats",
  ],
  ["Yee", "Reese Chong"],
  ["Brownie points go BRRRR", "Reese Chong"],
  ["Do not go gentle into that good night", "Dylan Thomas"],
  ["I want quality over quantity", "Ms.Chan"],
  [
    "I can&#39;t change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Jimmy Dean",
  ],
  ["We know what we are, but know not what we may be.", "William Shakespeare"],
  [
    "The best preparation for tomorrow is doing your best today.",
    "H. Jackson Brown, Jr.",
  ],
  [
    "Keep your face always toward the sunshine - and shadows will fall behind you.",
    "Walt Whitman",
  ],
  [
    "If you look for the light, you can often find it.But if you look for the dark that is all you will ever see.",
    "Uncle Iroh",
  ],
  ["If opportunity doesn&#39;t knock, build a door.", "Milton Berle"],
  ["Change your thoughts and you change your world.", "Norman Vincent Peale"],
  ["Innovate and suddenly, everything is within reach.", "U.G.C. Proverb"],
  [
    "No matter what people tell you, words and ideas can change the world.",
    "Robin Williams",
  ],
  ["It is never too late to be what you might have been.", "George Eliot"],
  ["Somewhere, something incredible is waiting to be known.", "Sharon Begley"],
  ["If you do not try, you will not succeed", "U.G.C. Proverb"],
  [
    "If you wish to solve a problem, go to a washroom, sit and think.",
    "U.G.C. Proverb",
  ],
  ["The only journey is the one within.", "Rainer Maria Rilke"],
  ["Try to be a rainbow in someone&#39;s cloud.", "Maya Angelou"],
  [
    "When you have a dream, you&#39;ve got to grab it and never let go.",
    "Carol Burnett",
  ],
  ["Give light and people will find the way.", "Ella Baker"],
  ["Out of difficulties grow miracles.", "Jean de la Bruyere"],
  ["If you want to solve a problem, think, in a washroom.", "Mo"],
  ["A champion is someone who gets up when he can&#39;t.", "Jack Dempsey"],
  ["It is always the simple that produces the marvelous.", "Amelia Barr"],
  [
    "The function of an object is more important than the form it has",
    "U.G.C. Proverb",
  ],
  [
    "Thought is the wind, knowledge the sail, and mankind the vessel.",
    "Augustus Hare",
  ],
  ["I am become meme, destroyer of shorts", "Elon Musk"],
  ["Aim for Mars, miss and you may land on a star.", "U.G.C. Proverb"],
  ["Light tomorrow with today!", "Elizabeth Barrett Browning"],
  [
    "Tomorrow never comes. Start today, right now, and thou shalt not regret later.",
    "U.G.C. Proverb",
  ],
  [
    "Nothing is impossible, the word itself says &#39;I&#39;m possible&#39;!",
    "Audrey Hepburn",
  ],
  [
    "Innovate and the possibilities will pour on you as rain falls to the ground.",
    "U.G.C. Proverb",
  ],
  [
    "The measure of who we are is what we do with what we have.",
    "Vince Lombardi",
  ],
  [
    "The most beautiful thing in the world is, of course, the world itself.",
    "Wallace Stevens",
  ],
  ["The power of imagination makes us infinite.", "John Muir"],
  ["DUMB BEACH", "Neha"],
  [
    "If you&#39;re too lazy to read it and too lazy to mark it, then just gimme a 100% and leave.",
    "Neha",
  ],
  ["Y&#39;ALL...", "Neha"],
  ["smh my head", "Neha"],
  ["I slept so late lol", "Neha"],
  [
    "Let us sacrifice our today so that our children can have a better tomorrow.",
    "A. P. J. Abdul Kalam",
  ],
  ["From a small seed a mighty trunk may grow.", "Aeschylus"],
  [
    "We can&#39;t help everyone, but everyone can help someone.",
    "Ronald Reagan",
  ],
  ["What we achieve inwardly will change outer reality.", "Plutarch"],
  ["If the world seems cold to you, kindle fires to warm it.", "Lucy Larcom"],
  ["If you want something done, then go and do it.", "U.G.C. Proverb"],
  ["Try to be like the turtle - at ease in your own shell.", "Bill Copeland"],
  ["There is nothing impossible to him who will try.", "Alexander the Great"],
  [
    "Tears of joy are like the summer rain drops pierced by sunbeams.",
    "Hosea Ballou",
  ],
  [
    "Without craftsmanship, inspiration is a mere reed shaken in the wind.",
    "Johannes Brahms",
  ],
  [
    "Courage, my friends; &#39;tis not too late to build a better world.",
    "Tommy Douglas",
  ],
  ["Believe you can and you&#39;re halfway there.", "Theodore Roosevelt"],
  ["The best way out is always through.", "Robert Frost"],
  [
    "A place where someone still thinks about you is a place you can call home.",
    "Jiraiya",
  ],
  [
    "Hard work is worthless for those that don&#39;t believe in themselves.",
    "Naruto Uzumaki",
  ],
  [
    "If you don&#39;t like your destiny, don&#39;t accept it. Instead have the courage to change it the way you want it to be.",
    "Naruto Uzumaki",
  ],
  [
    "If you don&#39;t like the hand that fate&#39;s dealt you with, fight for a new one!",
    "Naruto Uzumaki",
  ],
  ["Even the strongest of opponents always has a weakness.", "Itachi Uchiha"],
  [
    "Never interrupt your enemy when he is making a mistake.",
    "Napoleon Bonaparte",
  ],
  ["The only true wisdom is in knowing you know nothing.", "Socrates"],
  [
    "It&#39;s not what happens to you, but how you react to it that matters.",
    "Epictetus",
  ],
  [
    "In every walk with nature one receives far more than he seeks.",
    "John Muir",
  ],
  [
    "The young man knows the rules, but the old man knows the exceptions.",
    "Oliver Wendell Holmes, Sr",
  ],
  [
    "Knowledge is of no value unless you put it into practice.",
    "Anton Chekhov",
  ],
  [
    "Set your course by the stars, not by the lights of every passing ship.",
    "Omar N. Bradley",
  ],
  [
    "It&#39;s better to be a lion for a day than a sheep all your life.",
    "Elizabeth Kenny",
  ],
  ["Being entirely honest with oneself is a good exercise.", "Sigmund Freud"],
  [
    "Your attitude, not your aptitude, will determine your altitude.",
    "Zig Ziglar",
  ],
  ["That which does not kill us makes us stronger.", "Friedrich Nietzsche"],
  ["Great companies are built on great products.", "Elon Musk"],
  ["The roots of education are bitter, but the fruit is sweet.", "Aristotle"],
  [
    "But he that dares not grasp the thorn should never crave the rose.",
    "Anne Bronte",
  ],
  ["Think of all the beauty still left around you and be happy.", "Anne Frank"],
  [
    "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    "Edith Wharton",
  ],
  ["You do not find the happy life. You make it.", "Camilla Eyring Kimball"],
  ["The most wasted of days is one without laughter.", "E.E. Cummings"],
  ["Make each day your masterpiece.", "John Wooden"],
  ["Failure is the condiment that gives success its flavor.", "Truman Capote"],
  ["You must be the change you wish to see in the world.", "Mahatma Gandhi"],
  ["Wherever you go, go with all your heart.", "Confucius"],
  [
    "If you want to solve a problem, think about your place in the universe then, think.",
    "U.G.C. Proverb",
  ],
  ["Dream big and dare to fail.", "Norman Vaughan"],
  ["You are enough just as you are.", "Meghan Markle"],
  [
    "No matter what you&#39;re going through, there&#39;s a light at the end of the tunnel.",
    "Demi Lovato",
  ],
  [
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Albert Einstein",
  ],
  ["Keep going. Be all in.", "Bryan Hutchinson"],
  ["There is light, at the end of the tunnel.", "Justin Trudeau"],
  ["If it matters to you, you&#39sll find a way.", "Charlie Gilkey"],
  ["Tough times never last, but tough people do.", "Dr. Robert Schuller"],
  ["Don&#39;t wait, the time will never be just right.", "Napoleon Hill"],
  [
    "If I cannot do great things, I can do small things in a great way.",
    "Martin Luther King Jr. ",
  ],
  [
    "No one is useless in this world who lightens the burdens of others.",
    "Charles Dickens",
  ],
  [
    "Consider nothing impossible, then treat possibilities as probabilities.",
    "Charles Dickens",
  ],
  [
    "There is a wisdom of the head, and… there is a wisdom of the heart.",
    "Charles Dickens",
  ],
  ["It matters whether or not someone has a good heart", "Elon Musk"],
  ["This may not be fair but life ain&#39;t fair.", "Reese Chong"],
  [
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "Napoleon Hill",
  ],
  [
    "Strive not to be a success, but rather to be of value. ",
    "Albert Einstein",
  ],
  ["You miss 100% of the shots you don&#39;t take.", "Wayne Gretzky"],
  [
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "Amelia Earhart",
  ],
  ["Every strike brings me closer to the next home run.", "Babe Ruth"],
  [
    "Life isn&#39;t about getting and having, it&#39;s about giving and being.",
    "Kevin Kruse",
  ],
  ["We become what we think about. ", "Earl Nightingale"],
  [
    "The most common way people give up their power is by thinking they don&#39;t have any.",
    "Alice Walker",
  ],
  ["The mind is everything. What you think you become. ", "Buddha"],
  ["Eighty percent of success is showing up.", "Woody Allen"],
  [
    "Your time is limited, so don&#39;t waste it living someone else&#39;s life.",
    "Steve Jobs",
  ],
  ["Winning isn&#39;t everything, but wanting to win is.", "Vince Lombardi"],
  ["Either you run the day, or the day runs you.", "Jim Rohn"],
  [
    "Just one small positive thought in the morning can change your whole day.",
    "Dalai Lama",
  ],
  ["Opportunities don&#39;t happen, you create them.", "Chris Grosser"],
  ["Love your family, work super hard, live your passion.", "Gary Vaynerchuk"],
  [
    "Don&#39;t let someone else&#39;s opinion of you become your reality",
    "Les Brown",
  ],
  [
    "If you&#39;re not positive energy, you&#39;re negative energy.",
    "Mark Cuban",
  ],
  ["Inspiration does exist, but it must find you working.", "Pablo Picasso"],
  [
    "Don&#39;t look at your feet to see if you are doing it right. Just dance.",
    "Anne Lamott",
  ],
  ["He that can have patience can have what he will.", "Benjamin Franklin"],
  ["Set your goals high, and don&#39;t stop till you get there.", "Bo Jackson"],
  [
    "I will not lose, for even in defeat, there&#39;s a valuable lesson learned, so it evens up for me.",
    "Jay-Z",
  ],
  [
    "If you change the way you look at things, the things you look at change.",
    "Wayne Dyer",
  ],
  [
    "It&#39;s fine to celebrate success but it is more important to heed the lessons of failure.",
    "Bill Gates",
  ],
  [
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Aristotle",
  ],
  ["Start where you are. Use what you have. Do what you can.", "Arthur Ashe"],
  [
    "Everything you&#39;ve ever wanted is sitting on the other side of fear.",
    "George Addair",
  ],
  [
    "The question isn&#39;t who is going to let me; it&#39;s who is going to stop me.",
    "Ayn Rand",
  ],
  [
    "I have not failed. I&#39;ve just found 10,000 ways that won&#39;t work.",
    "Thomas A. Edison",
  ],
  ["You carry the passport to your own happiness.", "Diane von Furstenberg"],
  [
    "It is a rough road that leads to the heights of greatness.",
    "Lucius Annaeus Seneca",
  ],
  [
    "If we take care of the moments, the years will take care of themselves.",
    "Maria Edgeworth",
  ],
  ["Resilience is when you address uncertainty with flexibility.", "Unknown"],
  [
    "Geniusism is the ultimate economic, social way of living.",
    "U.G.C. Founding Members",
  ],
  [
    "True humility is not thinking less of yourself; it is thinking of yourself less.",
    "C.S. Lewis",
  ],
  [
    "The two most important days in your life are the day you&#39;re born and the day you find out why.",
    "Mark Twain",
  ],
  [
    "Nothing ever goes away until it teaches us what we need to know.",
    "Pema Chodron",
  ],
  [
    "We can see through others only when we can see through ourselves.",
    "Bruce Lee",
  ],
  ["If there is no struggle, there is no progress.", "Frederick Douglass"],
  ["Courage is like a muscle. We strengthen it by use.", "Ruth Gordo"],
  [
    "It takes years, to learn the ways of the #FASTEST_IN_THE_WEST, but one must keep learning.",
    "U.G.C. Challenger",
  ],
  ["More is lost by indecision than wrong decision.", "Marcus Tullius Cicero"],
  ["Much wow.", "Doge"],
  ["In order to be irreplaceable one must always be different.", "Coco Chanel"],
  [
    "Doubt is a killer. You just have to know who you are and what you stand for.",
    "Jennifer Lopez",
  ],
  [
    "Build your own dreams, or someone else will hire you to build theirs.",
    "Farrah Gray",
  ],
  [
    "You can&#39;t use up creativity. The more you use, the more you have.",
    "Maya Angelou",
  ],
  [
    "I have learned over the years that when one&#39;s mind is made up, this diminishes fear",
    "Rosa Parks",
  ],
  [
    "A person who never made a mistake never tried anything new.",
    "Albert Einstein",
  ],
  [
    "Certain things catch your eye, but pursue only those that capture the heart.",
    "Ancient Indian Proverb",
  ],
  [
    "The only person you are destined to become is the person you decide to be. ",
    "Ralph Waldo Emerson",
  ],
  ["Nothing will work unless you do.", "Maya Angelou"],
  [
    "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
    "Mother Teresa",
  ],
  [
    "A strong, positive self-image is the best possible preparation for success.",
    "Joyce Brothers",
  ],
  ["A good laugh is sunshine in the house.", "William Makepeace Thackeray"],
  [
    "Always turn a negative situation into a positive situation.",
    "Michael Jordan",
  ],
  ["Every day brings new choices.", "Martha Beck"],
  [
    "Correction does much, but encouragement does more.",
    "Johann Wolfgang von Goethe",
  ],
  [
    "I often think that the night is more alive and more richly colored than the day.",
    "Vincent Van Gogh",
  ],
  [
    "The person who can bring the spirit of laughter into a room is indeed blessed.",
    "Bennett Cerf",
  ],
  ["MUBB", "YIP"],
  ["Delete the negative; accentuate the positive!", "Donna Karan"],
  ["You cannot have a positive life and a negative mind.", "Joyce Meyer"],
  [
    "Do not take life too seriously. You will never get out of it alive.",
    "Elbert Hubbard",
  ],
  [
    "Age is something that doesn&#39;t matter, unless you are a cheese.",
    "Luis Bunuel",
  ],
  [
    "I always wanted to be somebody, but now I realize I should have been more specific.",
    "Lily Tomlin",
  ],
  ["A day without sunshine is like, you know, night.", "Steve Martin"],
  ["May the YIP be with you.", "YIP"],
  ["Invest in the Union and yourself.", "YIP"],
  [
    "Laugh and the world laughs with you, snore and you sleep alone.",
    "Anthony Burgess",
  ],
  ["Progress is man&#39;s ability to complicate simplicity.", "Thor Heyerdahl"],
  [
    "Expert: a man who makes three correct guesses consecutively.",
    "Laurence J. Peter",
  ],
  [
    "If I had to live my life again, I&#39;d make the same mistakes, only sooner.",
    "Tallulah Bankhead",
  ],
  ["Why can&#39;t I just eat my waffle?", "Barack Obama"],
  ["Beauty is power; a smile is its sword.", "John Ray"],
  [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "Albert Einstein",
  ],
  [
    "I have no special talent. I am only passionately curious.",
    "Albert Einstein",
  ],
  [
    "The true sign of intelligence is not knowledge but imagination.",
    "Albert Einstein",
  ],
  ["Only a life lived for others is a life worthwhile.", "Albert Einstein"],
  ["You can&#39;t blame gravity for falling in love.", "Albert Einstein"],
  ["All that matters on the chessboard is good moves.", "Bobby Fischer"],
  ["I don&#39;t remember one thing I learned in school.", "Bobby Fischer"],
  [
    "Chess and me, it&#39;s hard to take them apart. It&#39;s like my alter ego.",
    "Bobby Fischer",
  ],
  [
    "In poker, you want to play the weaker guys. In chess, it&#39;s the opposite.",
    "Hikaru Nakamura",
  ],
  [
    "Good friends, good books and a sleepy conscience: this is the ideal life.",
    "Mark Twain",
  ],
  [
    "If you tell the truth, you don&#39;t have to remember anything.",
    "Mark Twain",
  ],
  [
    "It&#39;s not the size of the dog in the fight, it&#39;s the size of the fight in the dog.",
    "Mark Twain",
  ],
  [
    "A person who won&#39;t read has no advantage over one who can&#39;t read.",
    "Mark Twain",
  ],
  [
    "The best way to cheer yourself up is to try to cheer somebody else up.",
    "Mark Twain",
  ],
  ["Dare mighty things.", "Theodore Roosevelt"],
  [
    "Do not go where the path may lead, go instead where there is no path, and leave a trail.",
    "Ralph Waldo Emerson",
  ],
  ["This may not be fair but life ain&#39;t fair.", "Reese Chong"],
  [
    "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.",
    "William Shakespeare",
  ],
  ["Just use your imagination and let it go.", "Bob Ross"],
  ["When you are doing a cloud, think like a cloud..", "Steve Ross"],
  ["We don&#39;t make mistakes, just happy accidents.", "Bob Ross"],
  ["Be brave. Be brave.", "Bob Ross"],
  ["Just let your imagination be your guide.", "Bob Ross"],
  ["Ahen quote", "Ahen quote"],
  [
    "Anyone can criticize someone&#39;s work on solving problems, but few can solve the problems that exist.",
    "Mohammad Anwar",
  ],
  [
    "You can only blame others so much, we need to look at the now, and the future.",
    "Reese Chong",
  ],
  ["Don&#39;t regret it, adapt to it, flow with it &#127754.", "YIP"],
  ["All variation stems from design.", "Sandy Munro"],
  [
    "Desperation is the Cruel Father of Twins; Inspiration & Innovation!",
    "Sandy Munro",
  ],
  ["Today&#39;s obsession makes tomorrow&#39;s profession.", "Reese Chong"],
  [
    "The only way to know… is to paste every single Stackoverflow answer until it works..",
    "Reese Chong",
  ],
  ["Who da ahen quote is Sandy Munro", "Mike Rafone"],
  ["Behind each challenge is an equal chance for opportunity", "Shaun Boothe"],
  ["Take each step one by one", "Shaun Boothe"],
  ["Careers is easy, but Civics class is like math class", "Mr. Cook"],
  ["BE the wind", "Meelo, LoK"],
  ["The West wind has returned", "Zephyrus, Anemoi"],
  ["Your turn chess", "ChequeM88"],
  [
    "My overarching goal in life is to make a lot of money and then before I die give it away.",
    "Jimmy Donaldson (Mr. Beast)",
  ],
  [
    "So many people say they want to do what I do, but it&#39;s like.. do you really? &#39;cause I literally gave up my entire teenage years.",
    "Jimmy Donaldson (Mr. Beast)",
  ],
  ["You gotta fail for the most part to learn.", "Jimmy Donaldson (Mr. Beast)"],
  ["Whoops!", "The Coding Train"],
  ["It&#39;sa me-a, Wario", "Elon Musk, SNL 2021/05/08"],
  [
    "I&#39;m not-a evil, I&#39;m just misunderstood",
    "Elon Musk, SNL 2021/05/08",
  ],
  ["I type like an interesting person.", "Neha Kasoju, 2021"],
  [
    "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
    "Lyndon B. Johnson",
  ],
  [
    "The measure of who we are is what we do with what we have.",
    "Vince Lombardi",
  ],
  [
    "Don&#39st cry because it&#39ss over. Smile because it happened.",
    "Dr. Seuss",
  ],
  ["A smile is a curve that sets everything straight.", "Phyllis Diller"],
  ["Dogecoin to the moon!", "Elon Musk, SNL 2021/05/08"],
  ["Live life to the fullest, and focus on the positive.", "Matt Cameron"],
  [
    "A strong, positive self-image is the best possible preparation for success.",
    "Joyce Brothers",
  ],
  ["If opportunity doesn&#39st knock, build a door.", "Milton Berle"],
  ["Change your thoughts and you change your world.", "Norman Vincent Peale"],
  [
    "I am not afraid of tomorrow, for I have seen yesterday and I love today!",
    "William Allen White",
  ],
  [
    "Doth thou prefer to stayeth aliveth or doth thou prefereth stayeth aliveth.",
    "UGC proverb",
  ],
  ["Grades are temporary, learning is forever", "Mike Rafone"],
  ["Better safe than sorry", "Justin Case"],
  ["Be prepared!", "Justin Case"],
  ["Always be careful", "Justin Case"],
  ["Karaoke is good for you", "Mike Rafone"],
  ["Japanese shows are pog", "Annie May"],
  ["Smart work and smart play makes Jack a POG boy", "UGC Proverb"],
  [
    "Learn today so you may live tomorrow.",
    "Masamoto-sama, Way of the Warrior",
  ],
  ["Carpe diem", "Latin proverb"],
  ["CODING GO BRRRRRRRRR", "Mo"],
  ["I dreamed about UGCW all night long, not even joking", "Pogrammer Mo"],
  [
    "80% of your success comes from 20% of your ventures",
    "The Pareto Principle (paraphrased)",
  ],
  [
    "You had a 1 in $x chance of seeing this quote.".replace("$x", quoteNum),
    "UGCW Developers",
  ],
];

var quoteNum = quoteArray.length;

var random_number = Math.floor(Math.random() * quoteNum);

//console.log(quoteArray.length);
document.getElementById("quotes").innerHTML = quoteArray[random_number][0];

document.getElementById("author").innerHTML =
  " - " + quoteArray[random_number][1];

//console.log(quoteArray[random_number][0])
//console.log(quoteArray[random_number][1])
