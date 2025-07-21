const navLinks = [
	{
	  id: "cocktails",
	  title: "Cocktails",
	},
	{
	  id: "about",
	  title: "À Propos",
	},
	{
	  id: "work",
	  title: "L'Art",
	},
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const cocktailLists = [
	{
	  name: "Château Margaux",
	  country: "FR",
	  detail: "Bouteille",
	  price: "10 £",
	},
	{
	  name: "Domaine de la Romanée-Conti",
	  country: "FR",
	  detail: "Bouteille",
	  price: "49 £",
	},
	{
	  name: "Bière Blonde Artisanale",
	  country: "BE",
	  detail: "750 ml",
	  price: "20 £",
	},
	{
	  name: "Guinness Irlandaise",
	  country: "IE",
	  detail: "600 ml",
	  price: "29 £",
	},
  ];
  
  const mockTailLists = [
	{
	  name: "Éclat Tropical",
	  country: "FR",
	  detail: "Bouteille",
	  price: "10 £",
	},
	{
	  name: "Menthe aux Fruits de la Passion",
	  country: "FR",
	  detail: "Bouteille",
	  price: "49 £",
	},
	{
	  name: "Lueur d’Agrumes",
	  country: "BE",
	  detail: "750 ml",
	  price: "20 £",
	},
	{
	  name: "Fleur de Lavande Pétillante",
	  country: "FR",
	  detail: "600 ml",
	  price: "29 £",
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
	"Mélanges parfaitement équilibrés",
	"Garnis à la perfection",
	"Toujours servis glacés",
	"Secoués et mélangés avec expertise",
  ];
  
  const goodLists = [
	"Ingrédients soigneusement sélectionnés",
	"Techniques signatures",
	"L’art du barman en action",
	"Saveurs fraîchement pilées",
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
 { day: "Lun–Jeu", time: "11:00am – 12am" },
 { day: "Ven", time: "11:00am – 2am" },
 { day: "Sam", time: "9:00am – 2am" },
 { day: "Dim", time: "9:00am – 1am" },
];

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
	  name: "Mojito Classique",
	  image: "/images/drink1.png",
	  title: "Ingrédients Simples, Saveur Audacieuse",
	  description:
		"Préparée avec de la tequila, du jus de citron vert et de la liqueur d’orange, la Margarita est facile à réaliser et pleine de caractère. Ajoutez un rebord salé pour une boisson parfaite lors des soirées d'été.",
	},
	{
	  id: 2,
	  name: "Mojito Framboise",
	  image: "/images/drink2.png",
	  title: "Un Classique Pétillant Qui Ne Déçoit Jamais",
	  description:
		"La Margarita est un classique qui équilibre l’acidité du citron vert, la douceur de la tequila et une touche sucrée. Secouée, glacée ou sur glace — elle est toujours fraîche et désaltérante.",
	},
	{
	  id: 3,
	  name: "Brise Violette",
	  image: "/images/drink3.png",
	  title: "Ingrédients Simples, Saveur Audacieuse",
	  description:
		"Préparée avec de la tequila, du jus de citron vert et de la liqueur d’orange, la Margarita est facile à réaliser et pleine de caractère. Ajoutez un rebord salé pour une boisson parfaite lors des soirées d'été.",
	},
	{
	  id: 4,
	  name: "Mojito Curaçao",
	  image: "/images/drink4.png",
	  title: "Préparé avec Soin, Servi avec Amour",
	  description:
		"Chaque cocktail est préparé avec des ingrédients frais et une passion pour la perfection dans chaque versement, que ce soit pour célébrer ou simplement se détendre.",
	},
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