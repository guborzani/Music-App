document.addEventListener('DOMContentLoaded', () => {
    
    const artistsData = [
        { name:'Addison Rae', image: './media/addison-rae.jpeg' },
        { name:'Charli XCX', image: './media/charli-xcx.jpg' },
        { name:'aespa', image: './media/aespa.jpg' },
        { name:'Zayn', image: './media/zayn.jpg' },
        { name:'G-eazy', image: './media/g-eazy.jpg' },
    
];

const albumsdata = [
{name: 'Addison', image: './media/addison-album.jpg'},
{name: 'Brat', image: './media/brat.jpeg'},
{name: 'When It’s Dark Out', image: './media/g-eazy-album.jpg'},
{name: 'Nobody is Listening', image: './media/nil.jpg'},
{name: 'Whiplash - The 5th Mini Album', image: './media/whiplash.jpg'},
{name: 'Brat', image: './media/brat.jpeg'}

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

