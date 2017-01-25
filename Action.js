//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Tue Jan 24 14:10:23 2017
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	web.setSocketsOption('SSL_VERSION', '2&3');

//	web.url(
//		{
//			name : 'l', 
//			url : 'https://translate.googleapis.com/translate_a/l?client=chrome&hl=en&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&alpha=1', 
//			resource : 1, 
//			recContentType : 'application/json', 
//			referer : '', 
//			snapshot : 't1.inf'
//		}
//	);

//	web.url(
//		{
//			name : 'seed', 
//			url : 'https://clients4.google.com/chrome-variations/seed?osname=win', 
//			resource : 0, 
//			referer : '', 
//			snapshot : 't2.inf', 
//			mode : 'HTML'
//		}
//	);

	//web.addCookie('_ga=GA1.2.1494250174.1485227156; DOMAIN=fae-uom.symplectic.org');

//	web.addCookie('_gat=1; DOMAIN=fae-uom.symplectic.org');

	web.url(
		{
			name : 'vivo', 
			url : 'http://fae-uom.symplectic.org/vivo/', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't3.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'},
				{url : 'https://fonts.gstatic.com/s/roboto/v15/CWB0XYA8bzo0kSThX0UTuA.woff2', referer : 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'},
				{url : 'https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfVtXRa8TVwTICgirnJhmVJw.woff2', referer : 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'},
				{url : 'https://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2', referer : 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'},
				{url : 'themes/melbourne-bootstrap/images/homehero.jpg', referer : 'http://fae-uom.symplectic.org/vivo/themes/melbourne-bootstrap/css/homepage.css'},
				{url : 'themes/melbourne-bootstrap/images/bizeco.jpg', referer : 'http://fae-uom.symplectic.org/vivo/themes/melbourne-bootstrap/css/homepage.css'},
				{url : 'themes/melbourne-bootstrap/images/arts.jpg', referer : 'http://fae-uom.symplectic.org/vivo/themes/melbourne-bootstrap/css/homepage.css'},
				{url : 'https://www.google-analytics.com/analytics.js'},
				{url : 'themes/melbourne-bootstrap/images/law.jpg', referer : 'http://fae-uom.symplectic.org/vivo/themes/melbourne-bootstrap/css/homepage.css'},
				{url : 'themes/melbourne-bootstrap/images/medicine.png', referer : 'http://fae-uom.symplectic.org/vivo/themes/melbourne-bootstrap/css/homepage.css'},
				{url : 'dataservice?getRandomSearchIndividualsByVClass=1&vclassId=http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2FPerson&page=130677&pageSize=8'},
				{url : 'https://www.google-analytics.com/r/collect?v=1&_v=j47&a=140234453&t=pageview&_s=1&dl=http%3A%2F%2Ffae-uom.symplectic.org%2Fvivo%2F&ul=en-gb&de=UTF-8&dt=VIVO&sd=24-bit&sr=1366x768&vp=1349x645&je=0&fl=24.0%20r0&_u=AEAAAMABI~&jid=1094016181&cid=1494250174.1485227156&tid=UA-294324-15&_r=1&z=883702369'},
				{url : 'images/placeholders/person.bordered.thumbnail.jpg'}
			]
		}
	);

	web.url(
		{
			name : 'glyphicons-halflings-regular.woff2', 
			url : 'http://fae-uom.symplectic.org/vivo/themes/melbourne-bootstrap/fonts/glyphicons-halflings-regular.woff2', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : 'http://fae-uom.symplectic.org/vivo/themes/melbourne-bootstrap/css/bootstrap.min.css', 
			snapshot : 't4.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : 'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOFtXRa8TVwTICgirnJhmVJw.woff2', referer : 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'},
				{url : 'https://ssl.gstatic.com/safebrowsing/csd/client_model_v5_variation_0.pb', referer : ''},
				{url : 'https://ssl.gstatic.com/safebrowsing/csd/client_model_v5_ext_variation_0.pb', referer : ''},
				{url : 'https://www.gstatic.com/chrome/config/plugins_2/plugins_win.json', referer : ''}
			]
		}
	);

	lr.logMessage();

	
	
	// Add some comments

//	web.addCookie('NID=84=FxUjolKyya0hjt-ekJrso3_t08Ugur94qSVci1Tf8bxfBwPPhcWxziIYKTnkou-WAH7_nELUK1GXEiSB79gPtUKmsoni2eT-fgjDeJahVwNCpKxBHUkxgvgQD-8BG20N; DOMAIN=safebrowsing.google.com');

//	web.addCookie('NID=84=FxUjolKyya0hjt-ekJrso3_t08Ugur94qSVci1Tf8bxfBwPPhcWxziIYKTnkou-WAH7_nELUK1GXEiSB79gPtUKmsoni2eT-fgjDeJahVwNCpKxBHUkxgvgQD-8BG20N; DOMAIN=safebrowsing-cache.google.com');

	lr.thinkTime(6);
//	web.customRequest(
//		{
//			name : 'downloads', 
//			url : 'https://safebrowsing.google.com/safebrowsing/downloads?client=googlechrome&appver=55.0.2883.87&pver=3.0&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&ext=0', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/vnd.google.safebrowsing-update', 
//			referer : '', 
//			snapshot : 't5.inf', 
//			mode : 'HTML', 
//			encType : 'text/plain', 
//			body : 'goog-malware-shavar;a:246150-257231:s:241567-241689,241691-252523\ngoog-phish-shavar;a:459234-469395:s:287488-294932,294934-294947,294949-294957,294959-294987,294989-295162,295164-295889,295891-296936,296938-297065,297067-297562,297564-297568,297570-297572,297574-297575,297577-297578,297582-297586,297588-297593,297595-297665,297667-297672,297674-297844,297846-297918,297920-298481,298483-303049\ngoog-badbinurl-shavar;a:118600-119687:s:121378-121384,121386-121407,121409-121418,121420-121508' + 
//		',121510-121518,121520-121605,121607,121609-121776,121778,121780-121781,121783-121921,121923-122466\ngoog-csdwhite-sha256;a:3-85:s:1-5\ngoog-downloadwhite-digest256;a:5-84:s:2-7,10-58\ngoog-badcrxids-digestvar;a:2-1414:s:1,3-135\ngoog-badip-digest256;a:2834-2835\ngoog-unwanted-shavar;a:63817-85468:s:57339-57341,57344-57350,57352-57355,57358-57369,57371-57377,57379-57386,57388-57392,57395-57396,57398-57399,57401-57402,57404,57406-57415,57417-57422,57424-57429,57431-57432,57434-57435,57437-57442,' + 
//		'57444-57446,57448-57449,57451-57454,57456-57462,57464-57469,57471,57474-57482,57484-57489,57491-57502,57504-57506,57508-57510,57512,57514-57516,57519-57522,57524-57526,57528-57531,57533-57537,57539-57541,57543,57545-57555,57557-57562,57564-57570,57572-57577,57579-57580,57582-57587,57589-57591,57594-57597,57599-57602,57604-57616,57619-57621,57623-57624,57627-57645,57647-57655,57657,57660-57662,57664-57668,57670-57677,57679-57680,57684-57685,57688-57695,57698-57699,57701,57703,57705-57706,57708,' + 
//		'57710,57712,57716-57717,57723-57725,57727,57729-57730,57732,57736,57740-57741,57744-57746,57750-57751,57754-57755,57757-57764,57766-57772,57775,57777-57778,57781,57783,57785-57786,57789-57794,57796-57797,57801,57806,57809-57820,57822-57824,57827,57832,57836,57838,57840-57841,57843,57845-57847,57849-57850,57852-57853,57857-57861,57863-57866,57870,57873,57875-57878,57880-57884,57886-57887,57890-57891,57893-57901,57903-57909,57911,57915-57916,57918,57920-57922,57924-57926,57929-57937,57940-57948,' + 
//		'57950,57952-57955,57960,57966-57976,57978,57980-57989,57991-57995,57997-58001,58003-58004,58008-58009,58013,58015-58033,58035-58038,58040-58043,58045-58046,58048-58050,58052-58054,58056-58059,58061-58064,58066-58070,58072-58079,58082-58085,58087-58114,58116-58118,58120-58123,58126,58128-58155,58157-58166,58168-58180,58182-58184,58187-58201,58203-58206,58208-58219,58221-58223,58226-58231,58233-58235,58237-58243,58245-58247,58249-58252,58256,58258-58261,58264-58268,58270-58274,58276-58302,' + 
//		'58304-58310,58312-58330,58333-58335,58337,58339-58343,58345-58347,58349,58351,58353-58354,58356,58358-58359,58361-58362,58364-58366,58368,58370-58372,58374-58378,58380-58383,58386-58391,58393-58397,58399-58408,58410-58424,58426-58447,58449-58450,58452-58470,58472-58474,58478,58480-58481,58483,58485-58489,58491-58500,58503,58505-58507,58509-58512,58514,58516-58519,58523,58525-58531,58533-58534,58536-58555,58557-58560,58563-58568,58570-58575,58577-58579,58582-58588,58590-58604,58606-58607,' + 
//		'58611-58613,58616-58626,58628-58630,58632-58633,58635-58638,58640-58642,58645-58646,58648-58667,58669-58680,58682-58691,58693-58698,58700-58701,58703-58704,58706-58708,58713,58717,58719-58720,58722-58727,58729-58733,58735-58739,58741-58759,58761-58775,58778-58784,58786-58788,58790-58796,58798-58809,58811-58812,58814-58820,58822-58824,58828-58829,58831-58844,58846-58848,58850-58857,58859-58862,58864-58867,58869-58876,58878-58879,58881-58903,58905-58908,58911-58915,58917-58919,58922,58925-58955,' + 
//		'58957-58978,58981-58991,58994-59009,59011-59016,59018-59028,59031-59044,59046-59048,59051-59056,59058-59062,59064-59073,59075-59103,59105-59136,59138-59146,59148-59149,59151-59152,59154-59162,59164,59167-59170,59173,59175,59177,59179,59181,59183-59187,59189-59210,59212-59215,59217-59229,59231-59237,59239-59240,59242,59244-59263,59265-59267,59269,59271-59272,59274,59276-59279,59281-59286,59288-59290,59292-59295,59297,59299-59311,59313-59314,59316,59318-59328,59330-59331,59334-59338,59340-59343,' + 
//		'59346-59355,59357-59358,59360-59362,59364-59366,59368-59378,59380-59382,59384-59387,59389-59391,59393-59394,59396,59398,59400-59402,59404-59412,59414-59416,59418-59420,59422-59433,59435,59437-59438,59440-59449,59451-59462,59464-59475,59477-59479,59481,59484-59486,59488-59489,59491-59519,59521-59526,59528-59530,59532-59539,59541-59564,59566-59568,59570-59575,59577-59580,59582-59598,59600-59605,59607-59634,59636-59641,59643-59645,59647-59650,59652-59655,59657-59659,59661,59663-59669,59671-59684,' + 
//		'59686-59689,59691-59701,59703-59719,59721-59722,59725-59727,59729-59742,59744-59759,59761-59764,59766-59773,59775,59777-59788,59790-59796,59798-59817,59820-59821,59823-59829,59831-59834,59836-59840,59842,59845,59847,59851-59856,59858-59865,59867-59874,59876-59884,59886,59888-59905,59907-59919,59923-59925,59927-59929,59931,59933-59952,59954-59958,59960-59969,59971-59984,59986-59995,59997-60007,60009-60034,60036-60037,60040-60043,60045,60047-60048,60050,60052-60062,60064-60068,60070-60072,' + 
//		'60074-60080,60083-60105,60107-60128,60130-60131,60133-60144,60147-60155,60158-60168,60171-60177,60179-60191,60193-60198,60200-60207,60209,60211-60222,60224-60238,60240-60244,60246,60248-60254,60256-60263,60265-60268,60270-60274,60278,60281,60284-60299,60302-60303,60305,60308-60309,60312-60313,60315,60317-60324,60326-60348,60351-60352,60354-60359,60361-60362,60364-60365,60367-60369,60371-60380,60382-60391,60393-60404,60406-60413,60415-60424,60426-60428,60431-60437,60439-60455,60457-60458,60460,' + 
//		'60462-60492,60494-60497,60499-60546,60548-60566,60568-60579,60581-60585,60587-60594,60596-60602,60604-60608,60610-60630,60632-60664,60666-60671,60673-60681,60683-60684,60686-60687,60690-60692,60694-60695,60697-60704,60707-60709,60711-60713,60715-60718,60721-60723,60725-60743,60745-60775,60777-60790,60792-60800,60802,60804-60813,60815-60817,60822,60824,60827,60829-60832,60834-60836,60838-60845,60847,60849-60858,60860-60874,60876,60878-60890,60892-60894,60896-60897,60899,60904,60906,60908,' + 
//		'60910-60911,60913-60914,60920,60922-60928,60931-60935,60938-60945,60947-60951,60953-60959,60961-60963,60966-60968,60970-60971,60974,60976-60977,60979-60982,60984-60985,60987-60991,60993-60998,61000-61001,61004-61006,61008,61010-61023,61025-61033,61035,61037-61046,61048-61050,61054-61064,61066,61068-61096,61098-61100,61102-61111,61113-61137,61139-61144,61146-61148,61150-61154,61156,61158-61159,61161-61174,61176-61182,61185-61187,61190,61193-61201,61203-61206,61208-61214,61216-61221,61225-61243,' + 
//		'61245-61260,61262-61275,61278-61281,61283-61293,61295-61298,61300-61306,61308-61322,61324-61359,61361-61388,61390-61405,61407-61425,61427-61479,61481-61488,61490-61495,61497-61512,61514-61516,61518-61520,61522-61538,61540-61552,61554-61602,61604-61609,61611-61612,61614-61671,61673-61677,61679-61767,61769,61771-61775,61777-61817,61819-61841,61843,61845-61852,61854-61861,61863-61930,61932-61944,61946-61950,61952-61967,61969-61993,61996-62043,62045-62102,62105-62112,62114-62130,62132-62154,' + 
//		'62156-62162,62164-62179,62181-62183,62185-62189,62191-62226,62228-62237,62239-62254,62256-62259,62261-62264,62266-62284,62286,62288-62291,62294-62301,62303,62305-62354,62356,62358-62375,62377-62382,62384-62393,62395-62400,62402,62404-62422,62424-62427,62429-62478,62480-62507,62510-62519,62521-62530,62532-62559,62561-62607,62609-62610,62612-62638,62640-62672,62674-62688,62691-62696,62698-62709,62711-62740,62742-62753,62755,62757-62758,62760-62769,62771-62773,62775-62809,62811-62851,62853-62855,' + 
//		'62857-62871,62873-62907,62909-62937,62939-62954,62956-62960,62962,62964-62999,63001-63009,63011-63019,63021-63035,63037-63042,63044-63049,63051,63053-63057,63059-63117,63119-63133,63135,63137-63177,63179-63180,63182-63183,63185-63194,63196-63233,63235-63252,63254-63311,63313-63320,63322-63332,63335-63336,63338-63345,63347-63357,63359-63405,63407-63429,63431-63434,63437-63455,63457-63489,63491-63604,63606-63650,63652-63666,63668-63673,63676-63689,63691-63752,63754-63776,63778-63779,63781-63785,' + 
//		'63787-63817,63819,63821-63826,63828-63829,63831-63870,63872-63886,63889-63898,63901-63904,63906-63923,63925-63965,63967-64007,64010,64012-64017,64019-64083,64085-64122,64124,64126-64130,64132-64134,64136-64142,64144-64158,64160-64166,64168-64185,64187-64208,64210-64215,64217-64239,64241-64266,64268-64296,64298-64372,64374-64377,64379-64380,64382,64384-64394,64396-64412,64414-64438,64440-64499,64501-64527,64529-64541,64543-64572,64574-64609,64613-64630,64632,64635-64657,64659-64666,64668-64686,' + 
//		'64688,64690-64694,64696-64698,64700-64704,64706-64717,64719-64742,64744-64760,64762-64776,64778-64791,64793-64834,64837-64843,64845-64846,64848-64923,64925-65061,65063-65073,65075-65183,65185-65192,65194-65282,65284-65339,65341-65433,65435-65487,65489-65502,65504-65534,65537-65550,65552-65562,65564-65601,65603-65617,65619-65646,65648-65684,65686-65774,65776-65881,65883-65937,65940-65957,65959-65965,65967-65975,65977-65979,65981-65985,65987-66009,66011-66014,66016,66018-66021,66023-66039,' + 
//		'66041-66092,66094-66125,66127-66133,66135-66188,66190-66305,66307-66336,66338-66389,66391-66399,66401-66696,66698-66824,66826-66832,66834-66852,66854-66939,66941-67016,67018-67042,67044-67066,67068-67070,67072-67091,67093-67153,67155-67177,67179-67289,67291-67419,67421-67448,67450-67520,67522-67568,67570-67574,67576-67577,67579-67581,67583-67650,67652-67709,67711-67734,67736-67751,67753-67775,67777-67955,67957-68015,68017-68038,68040-68110,68112-68219,68221-68390,68392-68461,68463-68522,' + 
//		'68524-68574,68576-68788,68790-68797,68799-68978,68980-68984,68986-69001,69003-69007,69009-69787,69789-70032,70034-70236,70238-70535,70537-70597,70599-70640,70642-70696,70698-70856,70858-71095,71097-71366,71368-71420,71422-71485,71487-71608,71610-71666,71668-72405,72407-72494,72496-72512,72514-73064,73066-78783,78785-78827,78829-79218,79220-79222,79224-79258,79260-79274,79276-79308,79310-79312,79314-79547,79549-79616,79618-79683,79685-79863,79865-80004,80006-80077,80079-80082,80084-80110,' + 
//		'80112-80304,80306-80333,80335-80342,80344-80362,80365-80633,80635-80640,80642-80645,80647-81018,81020-81351,81353-82257\ngoog-whitemodule-digest256;a:1-63\ngoog-badresource-shavar;a:1-10\n', 
//			extraRes :  [
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChVnb29nLWJhZGJpbnVybC1zaGF2YXI4AUACSgwIARCnvQcY7sEHIAFKDAgBEOO8BxilvQcgAUojCAAQiKcHGMGsByABKhVHjwL8ApsDrAO1A_wDgASTBJ8E-wQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/Chhnb29nLWJhZGNyeGlkcy1kaWdlc3R2YXI4AUACSgoIARCIARiIASABSgoIABCHCxicCyAB', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChNnb29nLW1hbHdhcmUtc2hhdmFyOAFAAkoMCAEQ7LQPGIu3DyAB', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChNnb29nLW1hbHdhcmUtc2hhdmFyOAFAAkoMCAEQ-rgPGM-6DyABSgwIARCMtw8Y-LgPIAFKDAgAENDZDxiw2w8gAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChNnb29nLW1hbHdhcmUtc2hhdmFyOAFAAkolCAAQsdsPGMXfDyABKhdhqQGuAbEB6gHxAfQBywLNAqQDrwOyAw', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgBENXIEhjIyxIgAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgBEOvFEhjUyBIgAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgBELnDEhjqxRIgAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgBEKvAEhi4wxIgAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgBEMq_EhiqwBIgAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgBEMnLEhiAzBIgAUoMCAAQlNMcGMLUHCAB', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgAEIPYHBjN2RwgAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKDAgAELvWHBiC2BwgAQ', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChFnb29nLXBoaXNoLXNoYXZhcjgBQAJKFAgAEMPUHBi61hwgASoGywHMAc0B', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/ChRnb29nLXVud2FudGVkLXNoYXZhcjgBQAJKDAgBEKqHBRiViAUgAUoMCAEQjocFGKiHBSABSgwIARC5hQUYjIcFIAFKDAgBELyEBRi3hQUgAUoMCAEQmoQFGLqEBSABSgwIARC2gwUYmIQFIAFKDAgBENKCBRi0gwUgAUorCAAQ3ZsFGJahBSABKh1ec3h8fZwBsAG-AcQB0wHUAY8CqgL7Ao8DlAPABA', referer : ''},
//				{url : 'https://safebrowsing-cache.google.com/safebrowsing/rd/Chpnb29nLXdoaXRlbW9kdWxlLWRpZ2VzdDI1NjgBQAJKCAgAEEAYQSAB', referer : ''}
//			]
//		}
//	);
//
	lr.thinkTime(5);
	web.customRequest(
		{
			name : 'experimentstatus', 
			url : 'https://clients4.google.com/chrome-sync/experimentstatus', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'application/vnd.google.octet-stream-compressible', 
			referer : '', 
			snapshot : 't6.inf', 
			mode : 'HTML', 
			encType : 'application/octet-stream', 
			bodyBinary : '\n\\x0Bgcm_channel'
		}
	);

	//  Find an expert page fully loaded 
	return 0;
}

