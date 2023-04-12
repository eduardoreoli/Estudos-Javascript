const albunsClassicos = [
    {banda: "Black Sabbath", album: "Black Sabbath", ano: 1969, musicas: "The Wizard, Evil Woman, Behind the Wall of Sleep"},
    {banda: "Iron Maiden", album: "Fear of the Dark", ano: 1992, musicas: "Be Quick or Be Dead, Wasting Love, Fear of The Dark"},
    {banda: "The Doors", album: "Morrison Hotel", ano: 1970, musicas: "Roadhouse Blues, Waiting For The Sun, Indian Summer"},
    {banda: "Marilyn Manson", album: "Antichrist Superstar", ano: 1996, musicas: "Irresponsible Hate Anthem, The Beautiful People, Tourniquet"},
    {banda: "Depeche Mode", album: "Violator", ano: 1990, musicas: "World in My Eyes, Personal Jesus, Enjoy The Silence"},
    {banda: "Raimundos", album: "Lapadas do Povo", ano: 1997, musicas: "Andar na Pedra, Nariz de Doze, Baile Funky"}
];

//albuns anteriores a 1980
const anterioresOitenta = albunsClassicos.filter(album => album.ano < 1980);
console.log(anterioresOitenta);

//nome do album e nome da banda
const albumBanda = albunsClassicos.map(album => `Banda: ${album.banda} -> Album: ${album.album}`);
console.log(albumBanda);


//uma música de cada album
const musica = albunsClassicos.map(album => {
    let explode = album.musicas.split(", ");
    return explode[0];
})

console.log(musica);