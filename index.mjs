// importálás command.js fájlból az ÁLTALÁNOSÍTÁS II után jön
import {
  getAlbumWithMostOfGenres,
  getAlbumWithMostOfSales,
  getAlbumWithFewestgenre,
  getAlbumWithYearOF,
  getAlbumWithArtistName,
  getAlbumByGenre,
} from "./commands.mjs";

// legelső lépés index.js-t létrehozni

// got this from an api
const bestSellingAlbums = [
  {
    artist: "Michael Jackson",
    title: "Thriller",
    year: 1982,
    genres: ["pop", "post-disco", "funk", "rock"],
    sale: 70000000,
  },
  {
    artist: "AC/DC",
    title: "Back in Black",
    year: 1980,
    genres: ["hard rock"],
    sale: 50000000,
  },
  {
    artist: "Whitney Houston",
    title: "The Bodyguard",
    year: 1992,
    genres: ["r&b", "soul", "pop", "soundtrack"],
    sale: 45000000,
  },
  {
    artist: "Pink Floyd",
    title: "The Dark Side of the Moon",
    year: 1973,
    genres: ["progressive rock"],
    sale: 45000000,
  },
  {
    artist: "Eagles",
    title: "Their Greatest Hits (1971 - 1975)",
    year: 1976,
    genres: ["country rock", "soft rock", "folk rock"],
    sale: 44000000,
  },
  {
    artist: "Eagles",
    title: "Hotel California",
    year: 1976,
    genres: ["soft rock"],
    sale: 42000000,
  },
  {
    artist: "Shania Twain",
    title: "Come On Over",
    year: 1997,
    genres: ["country", "pop"],
    sale: 40000000,
  },
  {
    artist: "Fleetwood Mac",
    title: "Rumours",
    year: 1977,
    genres: ["soft rock"],
    sale: 40000000,
  },
];

// EZEKET KELL ÁLTALÁNOSÍTANI

//maximum search
// get the album with most of GENRES
let mostOfGenres = bestSellingAlbums[0];
for (let i = 0; i < bestSellingAlbums.length; i++) {
  if (bestSellingAlbums[i].genres.length > mostOfGenres.genres.length) {
    mostOfGenres = bestSellingAlbums[i];
  }
}
console.log("Most of genre", mostOfGenres.title);

// get the album with most of SALE
let mostOfSale = bestSellingAlbums[0];
for (let i = 0; i < bestSellingAlbums.length; i++) {
  if (bestSellingAlbums[i].sale > mostOfSale.sale) {
    mostOfSale = bestSellingAlbums[i];
  }
}
console.log("Most of sale", mostOfSale.title);

//minimum search
// get the album with the fewest GENRE

let minOfGenres = bestSellingAlbums[0];
for (let i = 0; i < bestSellingAlbums.length; i++) {
  if (bestSellingAlbums[i].genres.length < minOfGenres.genres.length) {
    minOfGenres = bestSellingAlbums[i];
  }
}
console.log("Fewest genre", minOfGenres.title);

//ÁLTALÁNOSÍTÁS I belepakoljuk a korábbi függvényt egy function-ba
// mjs.-é alakítás után már összeakad, át kellett tennem megjegyzésbe

// MAX GENRE
/* function getAlbumWithMostOfGenres() {
  let mostOfGenres = bestSellingAlbums[0];
  for (let i = 0; i < bestSellingAlbums.length; i++) {
    if (bestSellingAlbums[i].genres.length > mostOfGenres.genres.length) {
      mostOfGenres = bestSellingAlbums[i];
    }
  }
  console.log("Most of genre II", mostOfGenres.title);
}

//MOST OF SALE
function getAlbumWithMostOfSales() {
  let mostOfSale = bestSellingAlbums[0];
  for (let i = 0; i < bestSellingAlbums.length; i++) {
    if (bestSellingAlbums[i].sale > mostOfSale.sale) {
      mostOfSale = bestSellingAlbums[i];
    }
  }
  console.log("Most of sale II", mostOfSale.title);
}

//MIN GENRE
function getAlbumWithFewestgenre() {
  let minOfGenres = bestSellingAlbums[0];
  for (let i = 0; i < bestSellingAlbums.length; i++) {
    if (bestSellingAlbums[i].genres.length < minOfGenres.genres.length) {
      minOfGenres = bestSellingAlbums[i];
    }
  }
  console.log("Fewest genre II", minOfGenres.title);
}
 */
//GET THE COMMAND LINE COMMAND

// ezt csak node-os környezetben lehet használni
// a function utáni zárójel pl getAlbumWithMostOfGenres ( ) itt még üres!!!
const command = process.argv[2];
if (command === 'most-genre') {
  getAlbumWithMostOfGenres(bestSellingAlbums);
} else if (command === 'fewest-genre') {
  getAlbumWithFewestgenre(bestSellingAlbums);
} else if (command === 'most-sale') {
  getAlbumWithMostOfSales(bestSellingAlbums);
} else if (command === 'year'){
  const year = Number(process.argv[3]);
  getAlbumWithYearOF(bestSellingAlbums,year);
} else if (command === 'artist'){
  const artist = process.argv[3];
  getAlbumWithArtistName(bestSellingAlbums, artist);
} else if (command === 'genre') {
  const genre = process.argv[3];
  getAlbumByGenre(bestSellingAlbums, genre)
}
else {
  console.log(" i do not understand", command);
}
/* a command.js-ben lett létrehozva a geAlbumWithYearOf functipn, utána kap commandot,
hibára fut átnevezni a fájlokat .mjs - re, pop up: Update imports for 'commands.mjs ==> YES!  */

// Number ==> számmá alakítás

// ÁLTALÁNOSÍTÁS II ÁTTETÜK A command.JS-be eredetileg törlés
// MAX GENRE
/* function getAlbumWithMostOfGenres(albums) {
    let mostOfGenres = albums[0];
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].genres.length > mostOfGenres.genres.length) {
        mostOfGenres = albums[i];
      }
    }
    console.log("Most of genre III", mostOfGenres.title);
  }
// MOST SALE
  function getAlbumWithMostOfSales(albums) {
    let mostOfSale = albums[0];
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].sale > mostOfSale.sale) {
        mostOfSale = albums[i];
      }
    }
    console.log("Most of sale III", mostOfSale.title);
  }
 
//MIN GEBRE
function getAlbumWithFewestgenre(albums) {
    let minOfGenres = albums[0];
    for (let i = 0; i < albums.length; i++) {
      if (albums[i].genres.length < minOfGenres.genres.length) {
        minOfGenres = albums[i];
      }
    }
    console.log("Fewest genre III", minOfGenres.title);
  } */
