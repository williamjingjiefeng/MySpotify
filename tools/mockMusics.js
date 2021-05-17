const songs = [
  {
    id: 1,
    title: "Scarborough Fair",
    youtubeId: "oJLNCTdJKu4",
    singerId: 3,
    albumId: 1,
  },
  {
    id: 2,
    title: "Monsters",
    youtubeId: "xHWIhCUnfOE",
    singerId: 6,
    albumId: 2,
  },
  {
    id: 3,
    title: " Let Me Down Slowly",
    youtubeId: "50VNCymT-Cs",
    singerId: 5,
    albumId: 3,
  },
  {
    id: 4,
    title: "Where Do I Begin",
    youtubeId: "kUrxm4z9I-c",
    singerId: 4,
    albumId: 4,
  },
  {
    id: 5,
    title: "You Raise Me Up",
    youtubeId: "aJxrX42WcjQ",
    singerId: 2,
    albumId: 5,
  },
  {
    id: 6,
    title: "Ypu're The Place",
    youtubeId: "vv_bzipW_m0",
    singerId: 2,
    albumId: 5,
  },
  {
    id: 7,
    title: "Señorita",
    youtubeId: "O6gdUM3ffRQ",
    singerId: 7,
    albumId: 6,
  },
  {
    id: 8,
    title: "Don't Cry For Me Argentina",
    youtubeId: "KD_1Z8iUDho",
    singerId: 8,
    albumId: 7,
  },
];

const singers = [
  { id: 1, name: "Katy Perry" },
  { id: 2, name: "Josh Groban" },
  { id: 3, name: "Sarah Brigtman" },
  { id: 4, name: "Andy Williams" },
  { id: 5, name: "Alec Benjamin" },
  { id: 6, name: "Katie Sky" },
  { id: 7, name: "Shawn Mendes & Camila Cabello" },
  { id: 8, name: "Madonna" },
];

const albums = [
  { id: 1, singerId: 3, name: "La Luna" },
  { id: 2, singerId: 6, name: "After Hours" },
  { id: 3, singerId: 5, name: "Narrated For You" },
  { id: 4, singerId: 4, name: "LOVE STORY 1970" },
  { id: 5, singerId: 2, name: "Closer" },
  { id: 6, singerId: 7, name: "Shawn Mendes" },
  { id: 7, singerId: 8, name: "Evita" },
];

const newSong = {
  id: null,
  title: "",
  singerId: null,
  youtubeId: "",
  albumId: null,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newSong: newSong,
  songs: songs,
  singers: singers,
  albums: albums,
};
