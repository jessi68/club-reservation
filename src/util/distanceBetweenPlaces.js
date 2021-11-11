import axios from "axios";
import Geocode from "react-geocode";

var GOOGLE_API_KEY = "AIzaSyAICYHO0YSKGy43LCRInmPoAizzniq91Aw"

Geocode.setApiKey(GOOGLE_API_KEY)
Geocode.setLanguage('en')
Geocode.setRegion('es')
Geocode.enableDebug()

function getDistanceFromCoordinateToKm(startCoordinate ,endCoordinate) { 
  
  console.log(endCoordinate);
  console.log(startCoordinate);

  function degToRad(deg) {
     return deg * (Math.PI/180) 
  } 
  var R = 6371; 
  // Radius of the earth in km 
  var dLat = degToRad(endCoordinate.lat - startCoordinate.lat); 
  // deg2rad below 
  var dLon = degToRad(endCoordinate.lng - endCoordinate.lng); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
   Math.cos(degToRad(startCoordinate.lat)) * Math.cos(degToRad(endCoordinate.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; 
  // Distance in km 
  console.log(d);
  return d; 
}

export const  convertAddressToCoordinate = async (currentAddr) => {
    return Geocode.fromAddress(currentAddr)
      .then( response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat + " " +  lng);
        return {lat, lng};
      })
      .catch(err => console.log(err))
}

export default async function getNearStores(curAddress,  stores = [], distance = 3) {
  
  const curCoordinate = await convertAddressToCoordinate(curAddress);
  console.log(stores);
  await Promise.all(
 stores.map(async (store, index) =>  {
  
    const coordinate = await convertAddressToCoordinate(store.address)
    console.log(coordinate)
    stores[index] = {...store, "coordinate": coordinate};
    return {...store, "coordinate": coordinate}
  })
  )

  return stores.filter(store => {
   
    return getDistanceFromCoordinateToKm(curCoordinate, store.coordinate) <= distance
  })
}