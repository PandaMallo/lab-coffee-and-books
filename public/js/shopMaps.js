function initMap() {

    const map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 8,
            center: directions.ironhackMAD.coords,
            styles: mapStyles.retro
        }
    )

    getShops(map)
}

function getShops(map) {

    axios
        .get('/api/places')
        .then(response => printShops(response.data, map))
        .catch(err => console.log(err))
}

function printShops(places, map) {

    console.log(places)

    places.forEach(elm => {

        let position = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({ map, position, title: elm.name })
    })
}