// ÁLTALÁNOSÍTÁS II ELVÁLASZTÁS AZ ADDATTÓL
// bemásolás és export parancs beírása a function elé
// MAX GENRE
export function getAlbumWithMostOfGenres(albums) {
  let mostOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length > mostOfGenres.genres.length) {
      mostOfGenres = albums[i];
    }
  }
  console.log("Most of genre III", mostOfGenres.title);
}
// MOST SALE
export function getAlbumWithMostOfSales(albums) {
  let mostOfSale = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].sale > mostOfSale.sale) {
      mostOfSale = albums[i];
    }
  }
  console.log("Most of sale III", mostOfSale.title);
}

//MIN GENRE
export function getAlbumWithFewestgenre(albums) {
  let minOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length < minOfGenres.genres.length) {
      minOfGenres = albums[i];
    }
  }
  console.log("Fewest genre III", minOfGenres.title);
}

// ÁLTALÁNOSÍTÁS III a for ciklusokat általánosítjuk, hogy ne kelljen konkrét kulcs érték párt összehhasonlítani

function getByKeyValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
      // itt lehetne dinamikus szöveg: console.log(`By ${key}`,arr[i]); DE EBBEN AZ EETBEN CSAK KIIRATNI TUDOM? MÁST NEM ==> KORLÁTOZ
    }
  }
}

// search album by year, ÁLTALÁNOSÍTÁS II UTÁN
// node index.mjs year 1992
/*export function getAlbumWithYearOF(albums, year) {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].year === year) {
      console.log("By year", albums[i].title);
      break; // exit the for loop
    }
  }
}*/

// search album by year ÁLTALÁNOSÍTÁS III UTÁN
export function getAlbumWithYearOF(albums, year) {
  const album = getByKeyValue(albums, "year", year);
  console.log("By year", album.title);
}

// serch album by artist
// node index.mjs artist "Michael Jackson"
/*export function getAlbumWithArtistName(albums, artist) {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].artist === artist) {
      console.log("This album is", albums[i].title);
      break; // exit the for loop
    }
  }
} */

// search album by artist ÁLTALÁNOSÍTÁS III UTÁN
export function getAlbumWithArtistName(albums, artist) {
  const album = getByKeyValue(albums, 'artist', artist);
  console.log("By artist", album.title);
}

// search album by title
//node index.mjs title "Hotel California"
/*export function getAlbumByTitle(albums, title) {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].title === title) {
      console.log("By title", albums[i].title);
      break;
    }
  }
} */

// search album by title ÁLTALÁNOSÍTÁS III UTÁN
export function getAlbumByTitle(albums, title) {
  const album = getByKeyValue(albums, 'title', title);
  console.log("By title", album.title);
}

// search album by byGenre
// node index.mjs genre "hard rock"

/* Itt a brake miatt csak a második for ciklusból lép ki az elsőn úrja iterál

export function getAlbumByGenre(albums, genre) {
  for (let i= 0; i < albums.length; i++){
    for (let j = 0; j < albums[i].genres.length; j++){
      if (albums[i].genres[j] === genre){
        console.log("By genre", albums[i].title);
        break;
      }
    }
  }
}  */

export function getAlbumByGenre(albums, byGenre) {
  let found = false;
  for (let i = 0; i < albums.length; i++) {
    for (let j = 0; j < albums[i].genres.length; j++) {
      if (albums[i].genres[j] === byGenre) {
        console.log("By genre", albums[i].title);
        found = true;
        break;
      }
    }
    if (found === true) {
      break;
    }
  }
}

/*ugayanez for..of ciklussal

export function getAlbumByGenre(albums, byGenre) {
  for (const album of albums) {
    for (const genre of album.genres) {
      if ((genre === byGenre)) {
        console.log(album.title);
        return;
      }
    }
  }
} */
