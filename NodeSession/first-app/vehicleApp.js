const fs = require('fs')

const getVehicle = (vehicle) =>{
    // const data = vehicle.map((vehicle)=>{
    //     console.log(vehicle.name,vehicle.language,vehicle.id);
        
    // })
    return 'sample dat..'
}

const addVehicle = () =>{
    const vehicle =loadVehicle();
    console.log('----',typeof vehicle);
    // const vd = JSON.stringify(vehicle);
    // vd.map((i)=>{
    //     console.log(i);
    // })
    console.log(vehicle)
 const duplicateVehicle = vehicle.filter((veh)=>{ 
    console.log(veh.name);
      return true;
  })
 console.log(duplicateVehicle)
 if(duplicateVehicle.length === 0){
    vehicle.push({
        "name": "Reetu",
        "language": "kanada",
        "id": "ENTOCR13RSCLZ6LV",
        "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
        "version": 2.0
    })
    // console.log('----')
    // console.log('updating',vehicle);
    // console.log('----')
    saveData(vehicle);
 }
 else{
 console.log("Duplicates")
 }

    
   
    getVehicle(vehicle);
}


const saveData = (notes) =>{
const saveJson = JSON.stringify(notes);
fs.appendFileSync('1-firstJson.json',saveJson);
// console.log('data saved')
}

const loadVehicle=()=>{
    try{
        const dataBuffer = fs.readFileSync('1-firstJson.json')
        // const dataJSON = dataBuffer.toString();
        //  console.log("loding data..",dataJSON)
        return dataBuffer;
        // JSON.parse(dataJSON)
    }
    catch(e){
        return [];
    }
   
}
module.exports={
    getVehicle,
    loadVehicle,
    addVehicle
}