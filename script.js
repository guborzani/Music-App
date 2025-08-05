document.addEventListener('DOMContentLoaded', () => {
    
    const artistsData = [
        { name:'Addison Rae', image: './img/addisonrae.jpeg' },
        { name:'Charli XCX', image: './img/charlixcx.jpg' },
        { name:'aespa', image: './img/aespa.jpg' },
        { name:'Zayn', image: './img/zayn.jpg' },
        { name:'G-eazy', image: './img/g-eazy.jpg' },
    
];

const albumsdata = [
{name: 'Addison', image: './img/addisonalbum.jpg'},
{name: 'Brat', image: './img/brat.jpeg'},
{name: 'When It’s Dark Out', image: './img/g-eazy-album.jpg'},
{name: 'Nobody is Listening', image: './img/nil.jpg'},
{name: 'Whiplash - The 5th Mini Album', image: './img/whiplash.jpg'},
{name: 'Brat', image: './img/brat.jpeg'}

];
    
const artistsGrid = document.querySelector ('.artists-grid')
const albumsGrid =  document.querySelector ('.albums-grid')

artistsData.forEach(artist => {
    const artistCard = document.createElement ('div')
    artistCard.classList.add('artist-card')
    
    artistCard.innerHTML = `
     <img src="${artist.image}" alt="imagem do ${artist.name}">
     <h3>${artist.name}</h3>
     <p>Artista</p> 
    `
        artistsGrid.appendChild(artistCard)

})

albumsdata.forEach(album => {
    const albumCard = document.createElement ('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
     <img src="${album.image}" alt="imagem do ${album.name}">   
     <h3>${album.name}</h3>   
    `
    
    albumsGrid.appendChild(albumCard)
}
)


} )

