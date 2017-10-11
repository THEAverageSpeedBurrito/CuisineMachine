import React, {Component} from 'react'

import Script from 'react-load-script'
var API_KEY = 'AIzaSyBtX72OJO43Slc-cAULw5w8FGYM8KKzxDg'
var mapsUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`

var GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = API_KEY

var style = {
  mapBox: {
    height: 250,
    borderRadius: '3px'
  }
}

class DisplayMap extends Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    let lat = parseInt(this.props.lat)
    let lng = parseInt(this.props.lng)

    let el = document.getElementById('map')
    let options = {
      center: {lat: lat, lng: lng},
      zoom: 4,
      disableDefaultUI: true
    }

    GoogleMapsLoader.load(function(google) {
      new google.maps.Map(el, options);
    });
  }

  render() {
    return (
      <div>
        <div id="map" style={style.mapBox}></div>
      </div>
    )
  }
}

export default DisplayMap
