import L from 'leaflet';
import greenIcon_img from './images/map-marker-green.png';
import redIcon_img from './images/map-marker-red.png';
import switchIcon_img from './images/switch-icon.svg';



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

var switch_icon = L.icon({
    iconUrl: switchIcon_img,
    iconSize:     [20, 20], // size of the icon
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});


var icons ={greenIcon:green_icon,redIcon:red_icon, switchIcon:switch_icon};

export default icons;
