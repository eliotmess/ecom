const products = [
    {
        "title": "Dawn of the Dead",
        "cover": "41VS2CWzOmL.jpg",
        "desc": "1983, the year that started it all. Thorn/EMI Video released Dawn of the Dead on VHS for the very first time. Presented in Pan and Scan and with a length of 126 minutes this version is the version that George envisioned during the production of the film. This is what George calls the final version. In my opinion this is the best version of the film ever released.",
        "genre": "horror",
        "price": 14.99,
        "year": 1994,
        "badge": "cult classic",
        "id": "91e9c921-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Scanners",
        "cover": "41MDA4CS3VL.jpg",
        "desc": "Best movie ever, I've never heard or seen it but I said hey the cover looks good and you know what i was right this time lmao",
        "genre": "horror",
        "price": 19.99,
        "year": 2000,
        "badge": "cult classic",
        "id": "91e9f030-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Godzilla 1985",
        "cover": "51RWVHB5ERL.jpg",
        "desc": "After 15 films, Toho Pictures decided to put Godzilla to rest in 1975. Then nearly a decade later, he returned in 'The Return of Godzilla', renamed 'Godzilla 1985' for its American release. This is a direct sequel to the original film, ignoring all of the other sequels, rebooting the franchise. Godzilla returns as the terrifying evil monster that he was in the original film, and apart from a small appearance by a mutant sea louse, Godzilla is the only monster in the film just like he was in the original. And like the American release of the original Godzilla movie, 'Godzilla 1985' was heavily re-edited and included newly added material featuring actor Raymond Burr, who reprises the role of reporter Steve Martin.",
        "genre": "sci-fi",
        "price": 80.99,
        "year": 1993,
        "badge": "rare",
        "id": "91ea1740-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Psycho IV - The Beginning",
        "cover": "71SM5TP4TGL.gif",
        "desc": "Not as good as Hitchcock's original of course, but certainly better than II or III. Anthony Perkin's still gives a great performance.",
        "genre": "horror",
        "price": 24.99,
        "year": 1998,
        "badge": "forgotten",
        "id": "91ea3e50-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Escapes",
        "cover": "51SQSX321EL.jpg",
        "desc": "This video is a hoot! I only rented it once, years ago, when I was pretty young, but I remember it still. It's pretty surreal...the end of the film (don't worry, I won't give anything good away) features someone who received 'Escapes' through the mail. Very, very campy. Those who enjoy B-movies will love this one. BY THE WAY: the first story is based on an old EC Comics story called 'Gone...Fishing!'",
        "genre": "horror",
        "price": 49.99,
        "year": 1999,
        "badge": "rare",
        "id": "91ea6560-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Fear in the Dark",
        "cover": "510jtndUBcL.jpg",
        "desc": "Actors: Dario Argento, Clive Barker, Saul Bass, Robert Bloch, John Carpenter",
        "genre": "documentary",
        "price": 22.99,
        "year": 1995,
        "badge": "rare",
        "id": "91ea8c70-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Invasion of the Saucer Men",
        "cover": "71MYwncT6hL._SL1500_.jpg",
        "desc": "Invasion of the Saucer Men (also known as Invasion of the Hell Creatures, working title - Spacemen Saturday Night) is a 1957 sci-fi comedy film starring Steven Terrell and Gloria Castillo and produced by American International Pictures (AIP). The screenplay by Robert J Gurney Jr and Al Martin was based on the short story 'The Cosmic Frame' by Paul W Fairman.",
        "genre": "sci-fi",
        "price": 29.99,
        "year": 1997,
        "badge": "forgotten",
        "id": "91ea8c71-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Wheels of Terror",
        "cover": "410NESCQRFL.jpg",
        "desc": "Laura MacKenzie, a school bus driver, and her 12-year-old daughter Stephanie have moved to Copper Valley, Arizona, to escape the pressures of city life. But bad luck follows in the form of a mysterious black sedan that stalks Laura and terrorizes the local schoolchildren.",
        "genre": "horror",
        "price": 119.99,
        "year": 1991,
        "badge": "rare",
        "id": "91eab380-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Goodbye 20th Century",
        "cover": "51E2R6CF61L.jpg",
        "desc": "'GOODBYE 20th CENTURY' unfolds during three periods of time - it begins in post-apocalyptic 2019, continues 100 years earlier, and ends on December 31st, 1999, the last night of our time... It is 2019, after global destruction and descent into savagery. The immortal Kuzman, overburdened by the sins of incestuous love, tries to discover his destiny in order to learn how to die. As he enters the whirling cycles of time, we discover the blasphemy of our century - and how it is to close its' circle... The merry Santa Claus 2000, whose rage destroys our world, who condemns those still alive to immortal life, will engulf us all into oblivion. This is a film of a generation which has grown up and lives at the threshold of a war that neither begins nor ends... Directed by Aleksander Popovski and Darko Mitrevski from their own compilation of childhood myths, and set amidst the confusing background of time turmoil, mixed styles, opulent imagery and deliberate quotations, 'GOODBYE 20th CENTURY' is a visionary tale which condemns the decayed century to a very scary death.",
        "genre": "horror",
        "price": 199.99,
        "year": 2000,
        "badge": "rare",
        "id": "91eab381-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Psycho Cop",
        "cover": "psychocop.jpg",
        "desc": "Psycho Cop has wallowed in relative obscurity for far too long. This classic, low-budget 80s slasher has it all: a crazy, relentless killer with more cheesy, clichéd one-liners than Freddy Krueger; a trio of vintage 1980's hotties; numerous 'drinking game' references to a minor character; a respectable body count; and ye olde unquantifiable 'fun factor' that so many films in this genre are sadly lacking. Yes, the basic plot is fashioned from the most generic of cinematic molds, but it somehow manages to rise above the majority of its more forgettable slasher cousins. For one thing, the kids in this film can actually act, but what truly makes Psycho Cop more than worthy of a cult following is the unadulterated fun one has watching all of the predictable action play out to the story's forgone conclusion. This film is just loads of fun to watch - and more than worthy of multiple viewings.",
        "genre": "horror",
        "price": 49.99,
        "year": 1997,
        "badge": "cult classic",
        "id": "91eada90-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Rio Bravo",
        "cover": "5127ECYB5EL.jpg",
        "desc": "When it comes down to naming the best Western of all time, the list usually narrows to three completely different pictures: John Ford's The Searchers, Howard Hawks's Red River, and Hawks's Rio Bravo. About the only thing they all have in common is that they all star John Wayne. But while The Searchers is an epic quest for revenge and Red River is a sweeping cattle-drive drama ('Take 'em to Missouri! Yeeee-hah!'), Rio Bravo is on a much more modest scale. Basically, it comes down to Sheriff John T. Chance (Wayne), his sobering-up alcoholic friend Dude (Dean Martin), the hotshot new kid Colorado (Ricky Nelson), and deputy-sidekick Stumpy (Walter Brennan), sittin' around in the town jail, drinkin' black cofee, shootin' the breeze, and occasionally, singin' a song. Hawks--who, like his pal Ernest Hemingway, lived by the code of 'grace under pressure'--said he made Rio Bravo as a rebuke to High Noon, in which sheriff Gary Cooper begged for townspeople to help him. So, Hawks made Wayne's Sheriff Chance a consummate professional--he may be getting old and fat, but he knows how to do his job, and he doesn't want amateurs getting mixed up in his business; they could get hurt. This most entertaining of movies also achieved some notoriety in the '90s when Quentin Tarantino (director of Pulp Fiction, Reservoir Dogs, and Jackie Brown) revealed that he uses it as a litmus test for prospective girlfriends. Oh, and if the configuration of characters sounds familiar, it should: Hawks remade Rio Bravo two more times--as El Dorado in 1967, with Wayne, Robert Mitchum, and James Caan; and as Rio Lobo in 1970, with Wayne, Jack Elam, and Christopher Mitchum. --Jim Emerson",
        "genre": "drama",
        "price": 99.99,
        "year": 1990,
        "badge": "cult classic",
        "id": "91eada91-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Screamer",
        "cover": "91ev2GhyH9L._SL1500_.jpg",
        "desc": "This is NOT a movie. It's a one-hour episode from the 1970s British TV series, Thriller. Pamela Franklin plays a woman who's been raped, and now sees the rapist everywhere. Is it him -- or is 'he' all in her mind?",
        "genre": "drama",
        "price": 99.99,
        "year": 1991,
        "badge": "rare",
        "id": "91eb01a0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Toy Story",
        "cover": "51RC8ZR6KBL.jpg",
        "desc": "Growing up in the 90's and now having 4 kids of my own I have wanted to show them the wonderfully ancient world on the VHS. No movie was better to start with then Toy Story. I expected a grimy old vhs the may not work but boy I was so wrong!! The movie was still in its original case and in the original plastic! It played like a dream and everything was just how I remembered. My children watch it on a regular basis now and I love getting to share my old memories with them! This movie was a super great way for a blast to the past. The friendships created and the adventure in itself just makes Toy Story a forever favorite in my home!",
        "genre": "children",
        "price": 9.99,
        "year": 2001,
        "badge": "cult classic",
        "id": "91eb28b0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Benny Hill Video Sideshow",
        "cover": "benny.jpg",
        "desc": "Here are the funniest moments and naughtiest antics of British comic Benny Hill! Each volume features hilarious sketches, ridiculous slapstick, zany spoofs, and Benny's buxom and beautiful Hill's Angels. Skits include Friday Night Fever, Holiday Time featuring Dimton on the Sea, Bionic Baby, Hill's Angels Saloon Show, and more.",
        "genre": "comedy",
        "price": 1.99,
        "year": 1997,
        "badge": "90s nostalgia",
        "id": "91eb4fc0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Better Golf With Gary Player",
        "cover": "51G8GNH8BEL.jpg",
        "desc": "Studio: Buena Vista Home Ent",
        "genre": "sport",
        "price": 9.99,
        "year": 1996,
        "badge": "90s nostalgia",
        "id": "91eb4fc1-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Balanced Fitness Workout Program",
        "cover": "balance.jpg",
        "desc": "Delivery was prompt, tape was new as promised and works fine. This is a very old tape, so I was relieved that it works. The tape itself is a wonderful workout for women. No problems!",
        "genre": "sport",
        "price": 1.99,
        "year": 1990,
        "badge": "90s nostalgia",
        "id": "91ebec00-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "The Final Solution V. 1 - The Seeds of Hatred 1918-1939",
        "cover": "51J0HEN63EL.jpg",
        "desc": "This well-produced British documentary, one of four videos that make up The Final Solution set, begins by tracing the roots of Nazism in Germany's humiliating defeat in World War I. The ravaged society of postwar Germany, saddled with severe economic problems and vicious political infighting, was a fertile breeding ground for a small political party that few took seriously. Early Nazi publications show racist caricatures of the Jews as wily enemies of the German people. The hatred promulgated by Hitler and his followers began to be taken seriously as Germany suffered during the Great Depression, and before long Nazi racial theories were being published in schoolbooks. Well-chosen archival films document the rise of the SS, a small group of Hitler's personal bodyguards, which grew to include thousands of highly trained and fanatical racists. The SS leader, Heinrich Himmler, is seen promoting his racial theories in visits to German children and at athletic events staged by the SS, and the gradual implementation of Nazi doctrine into German law is documented. Throughout the film participants, including former SS officers, are interviewed, and a fairly comprehensive view of the earliest years of the Nazi Reich emerges. This is a solid introduction to the horrors of Nazism. --Robert J. McNamara",
        "genre": "documentary",
        "price": 9.99,
        "year": 2001,
        "badge": "forgotten",
        "id": "91ebec01-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Tougher Than Leather",
        "cover": "51XY3TWFSDL.jpg",
        "desc": "After their roadie is murdered when he witnesses a crime, rappers Run-DMC search for the killer.",
        "genre": "action",
        "price": 19.99,
        "year": 1997,
        "badge": "forgotten",
        "id": "91e81b70-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "AM/PM Yoga for Beginners",
        "cover": "41B0520SDWL.jpg",
        "desc": "VHS format. Gaiam, stereo, digitially mastered, 40 minutes in all. Item no. LA-1070. 2-VHS Tape set, offering yoga for the mind, body and health. Your AM yoga is presented by Rodney Yee. You begin with conscious relaxation then we move to the AM workout itself, which exercises the body, followed by guided meditation, which centers the body and mind. Recommended props: mat, strap, blanket. 20-minute work out. Your PM Yoga tape is presented by Patricia Walden. It begins by centering poses, which quiet the mind and body. Followed by a PM workout, with stretches, soothing the body. Followed by guided relaxation, which revitalizes the mind. Props recommended: mat, brick, blanket. This is a 20-minute yoga workout.",
        "genre": "sport",
        "price": 2.45,
        "year": 2000,
        "badge": "90s nostalgia",
        "id": "91e86990-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Bill Cosby - 49",
        "cover": "51WG6DBSMYL.jpg",
        "desc": "Cosby is the master humorist. Taking life and showcasing it in all its foolishness, flavored with his dry wit and observations, his shows are a continuous belly laugh.",
        "genre": "comedy",
        "price": 0.49,
        "year": 2002,
        "badge": "90s nostalgia",
        "id": "91e890a0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Meatballs 3",
        "cover": "A18P06ohtrL._SL1500_.jpg",
        "desc": "If you havent got all the meatballs movies then this is a must see it follows a character from the first movie. You will love this it is a grwat comedy for your collection as you laugh through out the quest of the characters that you will fall in love with",
        "genre": "action",
        "price": 24.95,
        "year": 1991,
        "badge": "forgotten",
        "id": "91e890a0-48bc-11e9-993e-35556f3de7fb"
    },
    {
        "title": "Winnie the Pooh: Growing Up",
        "cover": "51RYY7K0RXL.jpg",
        "desc": "Two episodes of the Disney series featuring two friendly and valuable lessons for young children: Grown But Not Forgotten in which Christopher Robin tries to learn manners and Home Is Where the Home Is, in which Christopher runs away from home.",
        "genre": "children",
        "price": 4.99,
        "year": 1995,
        "badge": "90s nostalgia",
        "id": "91e8b7b0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Uncle Tom's Cabin",
        "cover": "514MPXTGHDL._SY445_.jpg",
        "desc": "An important historical depiction of a gone by era, reminding humanity of the atrocities of slavery and human suffering; the result of ignorance and hate. A wonderfully made film.",
        "genre": "drama",
        "price": 1.99,
        "year": 1997,
        "badge": "forgotten",
        "id": "91e8dec0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "The Adventures of Mary-Kate & Ashley: The Case of the Sea World Adventure",
        "cover": "51SXN5RP7ML.jpg",
        "desc": "This is great for the little ones. Our 5 year old loves the songs and story line. Has watched it repeatedly. If you still have a VCR, this is good, clean entertainment. If you have amazon instant video, these are available there, too. You can purchase one episode, or the entire season. Found the older kids will watch this with the 5 year old. Being enjoyed by a new generation!",
        "genre": "children",
        "price": 3.99,
        "year": 1997,
        "badge": "90s nostalgia",
        "id": "91e92ce0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "WWF: Survivor Series 1996",
        "cover": "91jSk+8E3SL._SL1500_.jpg",
        "desc": "Owen Hart, British Bulldog, and New Rockers VS Doug Furnas, Phil Lafon, and The Godwinns: Phil Lafon puts on a helluva show in his first WWF outing alongside Doug Furnas. Lafon hits an awesome move from the top rope on Cassidy and the annoucers have no idea what it was. I dont know why they didn't push these guys harder. LaFon and Furnas are the sole survivors in there debut in a great opening match, Undertaker VS Mankind with Paul Bearer suspended in a cage over the ring: Undertaker dominates the first half of this brutal match, stomping on Mankind's fingers so he cannot use the mandible claw but Mankind comes back. A very good, brutal match as Executioner saves Bearer from getting a beating. Anybody remember Executioner?",
        "genre": "sport",
        "price": 109.99,
        "year": 1996,
        "badge": "90s nostalgia",
        "id": "91e953f0-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "The Adventures of Mary-Kate & Ashley - The Case of Thorn Mansion",
        "cover": "51MXXXKV2WL.jpg",
        "desc": "The Olsen & Olsen Mystery Agency promises to 'Solve any crime by dinner time.' This musical mystery tour takes place in a haunted house and includes such songs as 'That Funky Musicology' and 'Give Us a Mystery.'",
        "genre": "children",
        "price": 8.99,
        "year": 1995,
        "badge": "90s nostalgia",
        "id": "91e97b00-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Winnie the Pooh and Christmas Too",
        "cover": "51MHE83J4ZL.jpg",
        "desc": "A great story: Pooh is so busy gathering up his friends' wish lists for Santa that he forgets to include his own. After retrieving the list and adding his own desires, he realizes he's late getting it where it needs to go. Off he goes to the North Pole on Christmas Eve, with pals Eeyore, Tigger, Piglet, Rabbit, and Christopher Robin missing him. --Tom Keogh",
        "genre": "children",
        "price": 13.99,
        "year": 1996,
        "badge": "90s nostalgia",
        "id": "91e97b01-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Best Of The Muppet Show featuring Alice Cooper, Vincent Price and Marty Feldman",
        "cover": "31LkLOnW30L.jpg",
        "desc": "Alice Cooper performs Welcome To My Nightmare and School's Out * Muppet(TM) Labs' Dr. Bunsen Honeydew(TM) invents a germ enlarger * Vincent Price sings You've Got A Friend * A visit to a house of horror * Marty Feldman sings Sinbad The Surfer /Episodes - Alice Cooper, Vincent Price, Marty Feldman UK Skits - Once a Year Day, I'm Looking Through You, Girlfriend of the Whirling Dervish Muppetism - Animal (the percussionist) Movie Mania - Kerminator Archives - Uncle Deadly sketch Did you know? - The Alice Cooper episode of The Muppet Show was Muppet Performer Steve Whitmire's very first show. Steve originated the character of Rizzo Rat on The Muppet Show and has performed Kermit the Frog since Jim Henson's death in 1990",
        "genre": "comedy",
        "price": 3.99,
        "year": 2000,
        "badge": "rare",
        "id": "91e9a210-48bc-11e9-993e-35cb6f3de7fb"
    },
    {
        "title": "Son of Dracula",
        "cover": "5115GVGB01L.jpg",
        "desc": "It was perhaps inevitable that, after playing the Wolf Man, Frankenstein's monster, and the Mummy, Lon Chaney Jr. would round out his horror resumé with a turn at the great bloodsucker himself (not, as the title would suggest, his son). Looking dapper and dignified under the cape, if not exactly threatening, Chaney plays Count Alucard (that's Dracula spelled backwards), a mysterious Carpathian summoned to America by a morbid heiress (Louise Allbritton). Eric Taylor's script is rather clunky, but the story (by horror specialist Curt The Wolfman Siodmak) is often quite clever, playing like a supernatural twist on a psycho-thriller. Allbritton's frustrated fiancé Robert Page accidentally kills her while trying to shoot Alucard (who imperiously stands up to the hail of bullets) and then goes stark raving mad as he watches the dead rise to life and the living disappear in wisps of smoke and morph into creaky stage bats.",
        "genre": "horror",
        "price": 13.99,
        "year": 2001,
        "badge": "rare",
        "id": "91e9c920-48bc-11e9-993e-35cb6f3de7fb"
    }
];

export default products;
