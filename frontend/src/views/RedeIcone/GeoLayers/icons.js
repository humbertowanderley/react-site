import L from 'leaflet';
import greenIcon_img from './images/map-marker-green.png';
import redIcon_img from './images/map-marker-red.png';



var green_icon = L.icon({
    iconUrl: greenIcon_img,
    iconSize:     [64, 64], // size of the icon
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var red_icon = L.icon({
    iconUrl: redIcon_img,
    iconSize:     [64, 64], // size of the icon
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var icons ={greenIcon:green_icon,redIcon:red_icon};

export default icons;
