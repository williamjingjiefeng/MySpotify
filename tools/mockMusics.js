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
        title: "You're The Place",
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
    { id: 1, name: "Katy Perry", youtubeId: "UCYvmuw-JtVrTZQ-7Y4kd63Q" },
    { id: 2, name: "Josh Groban", youtubeId: "UCIzJyWKY_d3540fhUa2eJUA" },
    { id: 3, name: "Sarah Brigtman", youtubeId: "UCriL6-sBup_Tis7trjOALnw" },
    { id: 4, name: "Andy Williams", youtubeId: "UCFhZg4_QmTTNs5ohg-8RENQ" },
    { id: 5, name: "Alec Benjamin", youtubeId: "UCtWBCzqucZXq0M8jsqunM0g" },
    { id: 6, name: "Katie Sky", youtubeId: "UCBLbC1QiA3y0fMhTgeOWXpw" },
    { id: 7, name: "Shawn Mendes & Camila Cabello", youtubeId: "UCAvCL8hyXjSUHKEGuUPr1BA" },
    { id: 8, name: "Madonna", youtubeId: "UC81VD6eeuLLSfyY_D-N8sVw" },
];

const albums = [
    { id: 1, singerId: 3, name: "La Luna", youtubeId: "" },
    { id: 2, singerId: 6, name: "After Hours", youtubeId: "" },
    { id: 3, singerId: 5, name: "Narrated For You", youtubeId: "" },
    { id: 4, singerId: 4, name: "LOVE STORY 1970", youtubeId: "" },
    { id: 5, singerId: 2, name: "Closer", youtubeId: "" },
    { id: 6, singerId: 7, name: "Shawn Mendes", youtubeId: "" },
    { id: 7, singerId: 8, name: "Evita", youtubeId: "" },
    { id: 8, singerId: 1, name: "Prisms", youtubeId: "" },
    { id: 9, singerId: 1, name: "Witness", youtubeId: "zpcgL7DaTI0" },
    { id: 10, singerId: 1, name: "Smile", youtubeId: "" },
];

const newSong = {
    id: 0,
    title: "",
    singerId: 0,
    youtubeId: "",
    albumId: 0
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
    newSong: newSong,
    songs: songs,
    singers: singers,
    albums: albums
};
