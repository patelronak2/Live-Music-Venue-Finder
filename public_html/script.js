/* 
 Author: Ronak Patel
 
 */
var lmvlist = [{"name":"The Staircase", "address":"27 Dundurn Street North", "city":"Hamilton", "phone":"905-529-3000", "website":"http:\/\/staircase.org", "latitude":"43.26329", "longtitude":"-79.88786"},
        {"name":"The Studio at Hamilton Place", "address":"1 Summers Lane", "city":"Hamilton", "phone":"905-546-3100", "website":"http:\/\/www.coreentertainment.ca\/events\/venue\/molson-canadian-studio", "latitude":"43.25679", "longtitude":"-79.87194"},
        {"name":"The Underground (Babylon)", "address":"41 Catherine Street North", "city":"Hamilton", "phone":"905-527-7488", "website":"https:\/\/www.facebook.com\/theundergroundsound\/?rf=273447632757582", "latitude":"43.4015272", "longtitude":"-80.0398802"},
        {"name":"Thirsty Cactus", "address":"2 King Street East", "city":"Dundas", "phone":"905-627-8488", "website":"http:\/\/www.thirstycactus.ca\/", "latitude":"43.26592", "longtitude":"-79.95353"},
        {"name":"This Ain't Hollywood", "address":"345 James Street North", "city":"Hamilton", "phone":"289-396-3911", "website":"http:\/\/www.thisainthollywood.ca\/", "latitude":"43.26503", "longtitude":"-79.86572"}, {"name":"Tracie's Place Resto & Karaoke", "address":"592 Upper James Street", "city":"Hamilton", "phone":"905-538-0795", "website":"https:\/\/traciesplacehamilton.wordpress.com\/2012\/11\/27\/hello-world\/", "latitude":"43.23934", "longtitude":"-79.87732"}, {"name":"Undermount Bar & Grill", "address":"10 Young Street", "city":"Hamilton", "phone":"905-525-0019", "website":"http:\/\/undermountbarandgrill.com\/", "latitude":"43.25101", "longtitude":"-79.87072"}, {"name":"University Lanes", "address":"101 Osler Drive, Suite 114", "city":"Dundas", "phone":"905-627-0711", "website":"http:\/\/www.universitylanes.ca\/", "latitude":"43.25951", "longtitude":"-79.94338"}, {"name":"Vicar's Vice", "address":"2251 Rymal Road East", "city":"Stoney Creek", "phone":"905-560-1586", "website":"http:\/\/vicarsvice.ca\/", "latitude":"43.17414", "longtitude":"-79.7796"}, {"name":"ViSo Hess Village", "address":"11 Hess Street", "city":"Hamilton", "phone":"905-777-8476", "website":"https:\/\/www.facebook.com\/pages\/ViSo-Hess-Village\/120512017994685", "latitude":"43.2586", "longtitude":"-79.87724"}, {"name":"Viva Nightclub", "address":"115 George Street", "city":"Hamilton", "phone":"289-396-7718", "website":"https:\/\/twitter.com\/vivahamilton", "latitude":"43.2583", "longtitude":"-79.87884"}, {"name":"Wellington Tavern", "address":"222 Cannon Street East", "city":"Hamilton", "phone":"905-528-1000", "website":"", "latitude":"43.2583116", "longtitude":"-79.8576722"}, {"name":"West Town", "address":"214 Locke Street South", "city":"Hamilton", "phone":"905-570-1412", "website":"http:\/\/www.thewesttown.ca\/", "latitude":"43.25456", "longtitude":"-79.88633"}, {"name":"Where Heads Meet", "address":"162 Ottawa Street North", "city":"Hamilton", "phone":"905-548-6338", "website":"http:\/\/whereheadsmeet.ca\/", "latitude":"43.24706", "longtitude":"-79.81758"}, {"name":"Whistling Walrus", "address":"1508 Upper James Street", "city":"Hamilton", "phone":"905-383-9934", "website":"https:\/\/twitter.com\/walrushamilton", "latitude":"43.20608", "longtitude":"-79.89215"}, {"name":"Winchester Arms", "address":"120 King Street West", "city":"Hamilton", "phone":"905-627-8016", "website":"http:\/\/winchesterarmsdundas.com\/", "latitude":"43.25815", "longtitude":"-79.87304"}, {"name":"Winking Judge", "address":"25 AuguStreeta Street", "city":"Hamilton", "phone":"905-524-5626", "website":"http:\/\/www.winkingjudge.com\/", "latitude":"43.25213", "longtitude":"-79.86992"}, {"name":"Wobbley Scotsman", "address":"309 Crockett Street", "city":"Hamilton", "phone":"905-389-8224", "website":"http:\/\/www.yellowpages.ca\/bus\/Ontario\/Hamilton\/Wobbly-Scotsman\/3601486.html", "latitude":"43.2361634", "longtitude":"-79.8410158"}, {"name":"Ye Olde Squire", "address":"1508 Upper James Street", "city":"Hamilton", "phone":"905-575-7821", "website":"http:\/\/www.yeoldesquire.ca\/venue-upperjames", "latitude":"43.20608", "longtitude":"-79.89215"}, {"name":"Zoetic Theatre (films with orchestral accompaniment)", "address":"526 Concession Street South", "city":"Hamilton", "phone":"905-902-5683", "website":"http:\/\/www.thezoetic.ca\/", "latitude":"43.2412", "longtitude":"-79.85374"}, {"name":"447 Wing", "address":"3210 Homestead Drive", "city":"Mount Hope", "phone":"289-280-0157", "website":"http:\/\/www.447wing.com\/", "latitude":"43.156", "longtitude":"-79.91509"}, {"name":"Absinthe", "address":"38 King William Street", "city":"Hamilton", "phone":"905-529-0349", "website":"www.clubabsinthe.ca", "latitude":"43.25676", "longtitude":"-79.86779"}, {"name":"Acoustic Blend Caf\u00e9 (Melrose United Church)", "address":"86 Homewood Avenue", "city":"Hamilton", "phone":"905-522-1323", "website":"http:\/\/www.melroseunited.ca\/events\/concerts.php", "latitude":"43.25093", "longtitude":"-79.88692"}, {"name":"Ale House", "address":"902 Upper Gage Avenue", "city":"Hamilton", "phone":"289-755-0518", "website":"https:\/\/www.facebook.com\/pages\/Ale-House\/396754787089906", "latitude":"43.2172123", "longtitude":"-79.843876"}, {"name":"American House", "address":"324 Dundas Street East", "city":"Waterdown", "phone":"905-690-1058", "website":"http:\/\/www.millstreetand5.ca\/", "latitude":"43.33395", "longtitude":"-79.89157"}, {"name":"Artword Artbar", "address":"15 Colbourne Street", "city":"Hamilton", "phone":"905-543-8512", "website":"http:\/\/www.artword.net\/artbar\/", "latitude":"43.2634", "longtitude":"-79.8668"}, {"name":"Augusta House", "address":"17 Augusta Street", "city":"Hamilton", "phone":"905- 522-5111", "website":"http:\/\/www.theaugustahouse.com\/", "latitude":"43.2522", "longtitude":"-79.87025"}, {"name":"Barangas (on the Beach)", "address":"380 Van Wagner's Beach Road", "city":"Hamilton", "phone":"905-544-7122", "website":"http:\/\/www.barangas.ca\/", "latitude":"43.25557", "longtitude":"-79.76154"}, {"name":"Bay City Music Hall", "address":"50 Leander Road", "city":"Hamilton", "phone":"289-389-9900", "website":"http:\/\/www.baycitymusichall.com\/", "latitude":"43.27354", "longtitude":"-79.86639"}, {"name":"Beaver & Bulldog", "address":"1400 Upper James", "city":"Hamilton", "phone":"905-385-9998", "website":"http:\/\/www.beaverandbulldog.com\/home\/http:\/\/beaverandbulldoghamilton.com\/", "latitude":"43.21003", "longtitude":"-79.89139"}, {"name":"Boon's House", "address":"1523 Barton Street East", "city":"Hamilton", "phone":"289-389-4242", "website":"https:\/\/www.facebook.com\/BoonsHouseWillBeBack?ref=stream", "latitude":"43.2475", "longtitude":"-79.79803"}, {"name":"Brown Barrel - The 1515 Tap and Grill", "address":"1515 Upper Ottawa", "city":"Hamilton", "phone":"905-575-4606", "website":"http:\/\/brownbarrel.ca", "latitude":"43.19429", "longtitude":"-79.84202"}, {"name":"Buddy's Roadhouse", "address":"1360 King Street East", "city":"Hamilton", "phone":"905-545-1456", "website":"http:\/\/www.buddysroadhouse.com\/", "latitude":"43.2412473", "longtitude":"-79.8223699"}, {"name":"Cat 'N' Fiddle", "address":"174 John Street South", "city":"Hamilton", "phone":"905-525-3855", "website":"http:\/\/www.catnfiddlepub.com\/", "latitude":"43.25145", "longtitude":"-79.86857"}, {"name":"Cavallo Nero", "address":"370 Wilson Street East", "city":"Ancaster", "phone":"905-648-8888", "website":"http:\/\/cavallo-nero.ca\/#live-music", "latitude":"43.22725", "longtitude":"-79.97533"}, {"name":"Ceilidh House Irish Pub", "address":"107 George Street", "city":"Hamilton", "phone":"905-528-5256", "website":"https:\/\/www.facebook.com\/ceilihousehess", "latitude":"43.25821", "longtitude":"-79.87853"}, {"name":"Club 77", "address":"77 King William Street", "city":"Hamilton", "phone":"905-527-7488", "website":"http:\/\/www.seventyseven.ca\/", "latitude":"43.25665", "longtitude":"-79.86518"}, {"name":"Coach & Lantern", "address":"384 Wilson Street East", "city":"Ancaster", "phone":"905-304-7822", "website":"http:\/\/www.coachandlantern.ca\/", "latitude":"43.2279055", "longtitude":"-79.9755349"}, {"name":"Collective Arts\/Arts & Science", "address":"207 Burlington Street East", "city":"Hamilton", "phone":"N\/A", "website":"http:\/\/collectiveartsbrewing.com\/welcome-to-our-new-digs\/", "latitude":"43.27093", "longtitude":"-79.85289"}, {"name":"Come By Chance", "address":"78 Melvin Avenue", "city":"Hamilton", "phone":"905-545-6120", "website":"https:\/\/www.facebook.com\/comebychancehamilton", "latitude":"43.24419", "longtitude":"-79.79355"}, {"name":"Corktown Tavern", "address":"175 Young Street", "city":"Hamilton", "phone":"905-572-9242", "website":"http:\/\/www.corktownpub.ca\/", "latitude":"43.2498", "longtitude":"-79.86433"}, {"name":"Dirty Dog Saloon", "address":"41 Catherine Street North", "city":"Hamilton", "phone":"905-527-7488", "website":"http:\/\/www.dirtydogsaloon.ca\/", "latitude":"43.4015272", "longtitude":"-80.0398802"}, {"name":"Doors Pub", "address":"56 Hess Street South", "city":"Hamilton", "phone":"905-540-8888", "website":"https:\/\/www.facebook.com\/pages\/The-Doors-Pub\/234950883187399", "latitude":"43.2572122", "longtitude":"-79.8783449"}, {"name":"Dr. Disc", "address":"20 Wilson Street", "city":"Hamilton", "phone":"905-523-1010", "website":"http:\/\/www.drdisc.ca\/links\/", "latitude":"43.25901", "longtitude":"-79.86718"}, {"name":"Embassy", "address":"54 King Street East", "city":"Hamilton", "phone":"905-522-1100", "website":"https:\/\/www.facebook.com\/pages\/Embassy-Nite-Club\/153027054741019?rf=194729890569612", "latitude":"43.25561", "longtitude":"-79.86765"}, {"name":"Emerson 109 Pub", "address":"109 Emerson Street", "city":"Hamilton", "phone":"289-426-2005", "website":"https:\/\/www.facebook.com\/Emerson109", "latitude":"43.25438", "longtitude":"-79.92084"}, {"name":"First Ontario Place", "address":"101 York Boulevard", "city":"Hamilton", "phone":"905-546-4040", "website":"http:\/\/www.coreentertainment.ca\/events\/venue\/firstontario-centre", "latitude":"43.25938", "longtitude":"-79.87189"}, {"name":"Fool & Flagon", "address":"2255 Barton Street East", "city":"Hamilton", "phone":"905-573-7430", "website":"http:\/\/www.foolandflagon.com\/", "latitude":"43.23971", "longtitude":"-79.77096"}, {"name":"Gallagher's Bar", "address":"69 Augusta Street", "city":"Hamilton", "phone":"905-577-6900", "website":"http:\/\/www.gallaghersbar.ca\/", "latitude":"43.25162", "longtitude":"-79.86798"}, {"name":"George Hamilton Bar Restaurant", "address":"1115 Fennell Avenue East", "city":"Hamilton", "phone":"905-381-9820", "website":"www.thegeorgehamilton.com", "latitude":"43.22641", "longtitude":"-79.83026"}, {"name":"Hamilton Conservatory for the Arts", "address":"126 James Street South", "city":"Hamilton", "phone":"905-528-4020", "website":"http:\/\/www.hcarts.ca\/", "latitude":"43.25304", "longtitude":"-79.87108"}, {"name":"Hamilton Place", "address":"10 MacNab Street South", "city":"Hamilton", "phone":"905-546-3100", "website":"http:\/\/www.coreentertainment.ca\/events\/venue\/hamilton-place", "latitude":"43.25646", "longtitude":"-79.87121"}, {"name":"Happy Hourz Pub", "address":"94 MacNab Street North", "city":"Hamilton", "phone":"905-777-7839", "website":"http:\/\/www.happyhourz.ca\/", "latitude":"43.25995", "longtitude":"-79.86903"}, {"name":"Homegrown Hamilton", "address":"27 King William Street", "city":"Hamilton", "phone":"905-777-8102", "website":"http:\/\/www.homegrownhamilton.com\/", "latitude":"43.25749", "longtitude":"-79.86777"}, {"name":"Lazy Flamingo", "address":"19 Hess Street South", "city":"Hamilton", "phone":"905-527-0567", "website":"https:\/\/www.facebook.com\/thelazyflamingo", "latitude":"43.25834", "longtitude":"-79.87729"}, {"name":"Liquid Kitty Martini Bar", "address":"69 John Street South", "city":"Hamilton", "phone":"905-526-6666", "website":"http:\/\/www.liquidkitty.ca\/Home.html", "latitude":"43.25393", "longtitude":"-79.86715"}, {"name":"Lou Dawgs Southern Barbecue", "address":"116 George Street", "city":"Hamilton", "phone":"289-389-3227", "website":"http:\/\/www.loudawgs.com\/", "latitude":"43.25856", "longtitude":"-79.87878"}, {"name":"Lyric Theatre", "address":"434 King Street West", "city":"Hamilton", "phone":"905-527-6135", "website":"https:\/\/www.facebook.com\/LyricTheatreHamilton", "latitude":"43.26062", "longtitude":"-79.88226"}, {"name":"Mill St & 5: American House", "address":"324 Dundas Street East", "city":"Hamilton", "phone":"905-690-1058", "website":"http:\/\/www.millstreetand5.ca\/", "latitude":"43.33395", "longtitude":"-79.89157"}, {"name":"Mills Hardware", "address":"95 King Street East", "city":"Hamilton", "phone":"905-777-1223", "website":"http:\/\/millshardware.ca\/", "latitude":"43.25586", "longtitude":"-79.86603"}, {"name":"Mohawk College, McIntyre Performing Arts Centre", "address":"Fennell Avenue. East", "city":"Hamilton", "phone":"905-575-2122", "website":"http:\/\/www.mohawkcollege.ca\/community\/mcintyre-performing-arts-centre", "latitude":"43.22916", "longtitude":"-79.84358"}, {"name":"Mulberry Street Coffeehouse", "address":"193 James Street North", "city":"Hamilton", "phone":"905-963-1365", "website":"https:\/\/www.facebook.com\/Mulberrycoffee", "latitude":"43.26183", "longtitude":"-79.86699"}, {"name":"My Dog Joe", "address":"1020 King Street West", "city":"Hamilton", "phone":"905-777-8100", "website":"https:\/\/www.facebook.com\/mydogjoe", "latitude":"43.26222", "longtitude":"-79.90588"}, {"name":"Nuance Bistro", "address":"1085 Barton Street East", "city":"Hamilton", "phone":"905-549-1111", "website":"https:\/\/www.facebook.com\/pages\/Nuance-Bistro\/203677649667719", "latitude":"43.25173", "longtitude":"-79.81627"}, {"name":"O Ultra Lounge", "address":"612 Upper James Street", "city":"Hamilton", "phone":"905-383-1494", "website":"http:\/\/www.olounge.ca\/", "latitude":"43.23851", "longtitude":"-79.87773"}, {"name":"One Duke Restaurant & Oyster Lounge", "address":"1 Duke Street", "city":"Hamilton", "phone":"905-540-3853", "website":"http:\/\/www.oneduke.ca\/", "latitude":"43.25152", "longtitude":"-79.87206"}, {"name":"Our Dog House", "address":"399 Greenhill Avenue", "city":"Hamilton", "phone":"905-538-1689", "website":"https:\/\/www.facebook.com\/ourdoghousebarandgrill", "latitude":"43.21652", "longtitude":"-79.79596"}, {"name":"Pheasant Plucker", "address":"20 Augusta Street", "city":"Hamilton", "phone":"905-529-9000", "website":"http:\/\/www.pheasantplucker.ca\/", "latitude":"43.25178", "longtitude":"-79.8703"}, {"name":"Prince Edward Tavern", "address":"737 Barton Street East", "city":"Hamilton", "phone":"905-545-6063", "website":"http:\/\/www.petavern.com\/", "latitude":"43.25596", "longtitude":"-79.83297"}, {"name":"Pub Fiction", "address":"1242 Garner Road West", "city":"Ancaster", "phone":"905-304-9990", "website":"http:\/\/www.pubfiction.ca\/", "latitude":"43.19447", "longtitude":"-80.02262"}, {"name":"Radius Restaurant", "address":"151 James Street South", "city":"Hamilton", "phone":"905-393-1658", "website":"http:\/\/radius.ca\/", "latitude":"43.25231", "longtitude":"-79.87065"}, {"name":"Rankin's Grill", "address":"1342 Main Street East", "city":"Hamilton", "phone":"905-545-1579", "website":"http:\/\/rankinsrestaurant.ca\/", "latitude":"43.24067", "longtitude":"-79.81236"}, {"name":"Ray's Place", "address":"303 Dundurn Street South", "city":"Hamilton", "phone":"905-522-4800", "website":"https:\/\/www.facebook.com\/raysplaceboathouse", "latitude":"43.25255", "longtitude":"-79.89187"}, {"name":"Rebels Rock Irish Pub", "address":"537 King Street East", "city":"Hamilton", "phone":"905-777-1771", "website":"http:\/\/www.rebelsrock.com\/", "latitude":"43.25279", "longtitude":"-79.85264"}, {"name":"Rolly Rocket's", "address":"470 King Street West", "city":"Hamilton", "phone":"905-393-3555", "website":"http:\/\/www.rollyrocketsbbq.com\/index.php?pg=home", "latitude":"43.2608625", "longtitude":"-79.8829866"}, {"name":"Rosedale Sports Bar", "address":"876 Lawrence Road", "city":"Hamilton", "phone":"289-396-0417", "website":"", "latitude":"43.2288", "longtitude":"-79.80326"}, {"name":"Route 66 Oldies Cafe", "address":"468 James Street North", "city":"Hamilton", "phone":"905-529-8555", "website":"", "latitude":"43.26894", "longtitude":"-79.86351"}, {"name":"Rumak Eatery & Bar", "address":"570 Upper Wentworth", "city":"Hamilton", "phone":"905-385-6199", "website":"http:\/\/www.rumakeatery.com\/", "latitude":"43.2341705", "longtitude":"-79.8575137"}, {"name":"Sam's Tavern", "address":"632 Barton Street East", "city":"Hamilton", "phone":"905-544-5846", "website":"https:\/\/www.facebook.com\/SamsRestaurantHamilton", "latitude":"43.2568", "longtitude":"-79.83819"}, {"name":"Sarcoa", "address":"57 Discovery Drive", "city":"Hamilton", "phone":"905-528-5757", "website":"http:\/\/www.sarcoa.ca\/", "latitude":"43.27755", "longtitude":"-79.861"}, {"name":"Snooty Fox", "address":"1011 King Street West", "city":"Hamilton", "phone":"905-546-0000", "website":"http:\/\/www.snootyfox.ca\/", "latitude":"43.26172", "longtitude":"-79.90518"}, {"name":"Spice Factory", "address":"121 Hughson Street North", "city":"Hamilton", "phone":"905-522-1112", "website":"http:\/\/www.spicefactory.ca\/", "latitude":"43.25993", "longtitude":"-79.86653"}, {"name":"Steel House Grill", "address":"24 King Street East", "city":"Hamilton", "phone":"905-818-4507", "website":"https:\/\/www.facebook.com\/pages\/Steel-House-Grill-Hamilton\/201586343242111", "latitude":"43.25584", "longtitude":"-79.8686"}, {"name":"Stonewalls", "address":"339 York Boulevard", "city":"Hamilton", "phone":"905-577-0808", "website":"http:\/\/stonewallshamilton.com\/", "latitude":"43.26317", "longtitude":"-79.87869"}, {"name":"Tailgate Charlies", "address":"69 John Street South", "city":"Hamilton", "phone":"905-526-6666", "website":"http:\/\/www.tailgatecharlies.ca\/", "latitude":"43.25393", "longtitude":"-79.86715"}, {"name":"Tartan Toorie", "address":"989 Fennell Avenue East", "city":"Hamilton", "phone":"905-388-0234", "website":"http:\/\/www.tartantoorie.ca\/", "latitude":"43.22768", "longtitude":"-79.83639"}, {"name":"The Baltimore House", "address":"43 King William Street", "city":"Hamilton", "phone":"289-396-4830", "website":"http:\/\/www.baltimorehouse.ca\/", "latitude":"43.25725", "longtitude":"-79.86708"}, {"name":"The Brain", "address":"199 James Street North", "city":"Hamilton", "phone":"289-396-8508", "website":"https:\/\/www.facebook.com\/The-Brain-318287314767\/", "latitude":"43.26193", "longtitude":"-79.86695"}, {"name":"The Brassie", "address":"73 Wilson Street West", "city":"Hamilton", "phone":"905-304-8935", "website":"http:\/\/www.brassiepub.com\/", "latitude":"43.21652", "longtitude":"-79.99037"}, {"name":"The Caf\u00e9", "address":"1365 Main Street East", "city":"Hamilton", "phone":"N\/A", "website":"https:\/\/www.facebook.com\/TheCafeHamilton\/videos\/1598853130431146", "latitude":"43.24093", "longtitude":"-79.81141"}, {"name":"The Casbah", "address":"306 King Street West", "city":"Hamilton", "phone":"905-521-4441", "website":"http:\/\/casbahlounge.ca\/", "latitude":"43.26975", "longtitude":"-79.96807"}, {"name":"The Galley Pump", "address":"365 Wentworth Street North", "city":"Hamilton", "phone":"905-529-0271", "website":"https:\/\/www.facebook.com\/thegalleypumptavern\/", "latitude":"43.26293", "longtitude":"-79.84464"}, {"name":"The Gasworks\/Park St. Gasworks", "address":"141 Park Street North", "city":"Hamilton", "phone":"613-583-7140", "website":"http:\/\/parkstgasworks.com\/", "latitude":"43.26226", "longtitude":"-79.87065"}, {"name":"The Gladstone Tavern", "address":"1385 Main Street East", "city":"Hamilton", "phone":"905-393-9842", "website":"https:\/\/www.facebook.com\/thegladstonehamilton\/?fref=ts", "latitude":"43.24072", "longtitude":"-79.81049"}, {"name":"The Innsville", "address":"1143 Highway 8", "city":"Stoney Creek", "phone":"905-643-1244", "website":"http:\/\/innsville.ca\/", "latitude":"43.209682", "longtitude":"-79.6616007"}, {"name":"The Landing Restaurant", "address":"1479 Baseline Road", "city":"Hamilton", "phone":"905-525-2187", "website":"http:\/\/www.thelandingrestaurant-banquets.ca\/", "latitude":"43.21686", "longtitude":"-79.62827"}, {"name":"The Lionshead Pub", "address":"137 John Street South", "city":"Hamilton", "phone":"905-522-7090", "website":"https:\/\/www.facebook.com\/pages\/The-Lionshead-Pub\/132769103423482", "latitude":"43.25217", "longtitude":"-79.86785"}, {"name":"The Oakwood Place", "address":"1067 Barton Street East", "city":"Hamilton", "phone":"905-547-4540", "website":"https:\/\/www.facebook.com\/pages\/The-Oakwood-Place\/136303316327", "latitude":"43.2517265", "longtitude":"-79.816692"}, {"name":"The Pearl Company", "address":"16 Steven Street", "city":"Hamilton", "phone":"905-524-0606", "website":"http:\/\/thepearlcompany.ca\/", "latitude":"43.25299", "longtitude":"-79.85149"}, {"name":"The Powerhouse", "address":"21 Jones Street", "city":"Stoney Creek", "phone":"905-930-7381", "website":"http:\/\/thepowerhouse.ca\/", "latitude":"43.21718", "longtitude":"-79.7542"}];
        $(document).ready(function () {
if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
$("#identifyMobile").html("Live Music Finder - Mobile");
        }
//------------------------------------------------------------------------------
//This function is written by using refrence from W3School.com
$("a").on('click', function(event) {
if (this.hash !== "") {
// Prevent default anchor click behavior
event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
scrollTop: $(hash).offset().top
        }, 800, function(){
// Add hash (#) to URL when done scrolling (default click behavior)
window.location.hash = hash;
        });
        } // End if
});
        //---------------------------------------------------------------------------
        //JSON Data
        var jsonData = JSON.stringify(lmvlist, null, '\t');
        $('#data').html(jsonData);
});
//------------------------------------------------------------------------------
//Location.html
        