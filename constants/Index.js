const navLinks = [
	{
	  id: "cocktails",
	  title: "Tajine",
	},
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "work",
	  title: "Work",
	},
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const cocktailLists = [
	{
		name: "Chicken Tagine with Preserved Lemon",
		country: "MA",
		detail: "Traditional dish",
		price: "45 £",
	},
	{
	  name: "Lamb Tagine with Prunes",
	  country: "MA",
	  detail: "Slow-cooked dish",
	  price: "55 £",
	},
	{
	  name: "Kefta Tagine with Eggs",
	  country: "MA",
	  detail: "Meatball stew",
	  price: "40 £",
	},
	{
	  name: "Fish Tagine with Chermoula",
	  country: "MA",
	  detail: "Seafood specialty",
	  price: "50 £",
	},
  ];
  
  const mockTailLists = [
	{
		name: "Vegetable Tagine",
		country: "MA",
		detail: "Vegetarian dish",
		price: "35 £",
	},
	{
	  name: "Veal Tagine with Artichokes",
	  country: "MA",
	  detail: "Refined preparation",
	  price: "52 £",
	},
	{
	  name: "Chicken Tagine with Almonds",
	  country: "MA",
	  detail: "Sweet and savory dish",
	  price: "48 £",
	},
	{
	  name: "Squid Tagine with Vegetables",
	  country: "MA",
	  detail: "Coastal specialty",
	  price: "53 £",
	},
  ];
  

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
	"Chicken Tajine - Tender chicken with preserved lemons and olives",
	"Lamb Tajine - Slow-cooked lamb with apricots and almonds",
	"Vegetable Tajine - Seasonal vegetables with aromatic spices",
	"Fish Tajine - Fresh fish with chermoula and vegetables",
  ];
  
  const goodLists = [
	"Beef Tajine - Rich beef with prunes and cinnamon",
	"Kefta Tajine - Spiced meatballs with eggs and tomatoes",
	"Seafood Tajine - Mixed seafood with saffron and herbs",
	"Sweet Tajine - Traditional dessert with dates and nuts",
  ];
  

const storeInfo = {
 heading: "ou on ce trouve",
 address: "Casablanca, Maroc",
 contact: {
	phone: "+21206121212",
	email: "Ridanajjari@gmail.com",
 },
};

const openingHours = [
	{ day: "Mon–Thu", time: "11:00am – 12am" },
	{ day: "Fri", time: "11:00am – 2am" },
	{ day: "Sat", time: "9:00am – 2am" },
	{ day: "Sun", time: "9:00am – 1am" },
  ]
  ;

const socials = [
 
 {
	name: "LinkedIn",
	icon: "/images/linkedin.png",
	url: "https://www.linkedin.com/in/rida-najjari/",
 },
];

const allCocktails = [
	{
		id: 1,
		name: "Chicken Tajine",
		image: "/images/drink1.png",
		title: "Warm Spices, Authentic Taste",
		description:
		  "Made with tender chicken, green olives, preserved lemon, and Moroccan spices, this tajine is slow-cooked to bring out deep, comforting flavors in every bite.",
	  }
	  ,
	  {
		id: 2,
		name: "Duck and Apricot Tajine",
		image: "/images/drink2.png",
		title: "Sweet Notes, Rich Moroccan Flavor",
		description:
		  "Slow-cooked duck with dried apricots, warm spices, and a hint of honey — this tajine blends sweet and savory in a perfect balance for a truly comforting Moroccan dish.",
	  }
	  ,
	  {
		id: 3,
		name: "Tajine with Couscous",
		image: "/images/drink3.png",
		title: "Simple Ingredients, Bold Tradition",
		description:
		  "A hearty blend of slow-cooked vegetables, tender meat, and rich spices served over fluffy couscous. This Moroccan classic brings warmth, comfort, and authentic flavor to every plate.",
	  }
	  ,
	  {
		id: 4,
		name: "Meat Tajine",
		image: "/images/drink4.png",
		title: "Slow-Cooked with Care, Served with Love",
		description:
		  "Tender beef or lamb simmered with Moroccan spices, onions, and herbs — this traditional tajine is rich, hearty, and full of flavor in every bite.",
	  }
	  ,
  ];
  
export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};