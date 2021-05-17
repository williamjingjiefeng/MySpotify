const songs = [
  {
    id: 1,
    title: "Scarborough Fair",
    youtubeId: "oJLNCTdJKu4",
    singerId: 3,
    album: "La Luna"
  },
  {
    id: 2,
    title: "Monsters",
    youtubeId: "xHWIhCUnfOE",
    singerId: 6,
    album: "After Hours"
  },
  {
    id: 3,
    title: " Let Me Down Slowly",
    youtubeId: "50VNCymT-Cs",
    singerId: 5,
    album: "Narrated For You"
  },
  {
    id: 4,
    title: "Where Do I Begin",
    youtubeId: "kUrxm4z9I-c",
    singerId: 4,
    album: "LOVE STORY 1970"
  },
  {
    id: 5,
    title: "You Raise Me Up",
    youtubeId: "aJxrX42WcjQ",
    singerId: 2,
    album: "Closer"
  },
  {
    id: 6,
    title: "Ypu're The Place",
    youtubeId: "vv_bzipW_m0",
    singerId: 2,
    album: "Closer"
  },
  {
    id: 7,
    title: "Señorita",
    youtubeId: "O6gdUM3ffRQ",
    singerId: 7,
    album: "Shawn Mendes"
  },
  {
    id: 8,
    title: "Don't Cry For Me Argentina",
    youtubeId: "KD_1Z8iUDho",
    singerId: 8,
    album: "Evita"
  }
];

const singers = [
  { id: 1, name: "Katy Perry" },
  { id: 2, name: "Josh Groban" },
  { id: 3, name: "Sarah Brigtman" },
  { id: 4, name: "Andy Williams" },
  { id: 5, name: "Alec Benjamin" },
  { id: 6, name: "Katie Sky" },
  { id: 7, name: "Shawn Mendes & Camila Cabello" },
  { id: 8, name: "Madonna " }
];

const newSong = {
  id: null,
  title: "",
  singerId: null,
  youtubeId: "",
  album: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newSong: newSong,
  songs: songs,
  singers: singers
};
