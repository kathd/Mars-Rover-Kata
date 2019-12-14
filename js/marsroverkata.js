// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    x: 0,
    y: 0,

}

// ======================
function turnLeft(rover){
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            console.log("Rover is now facing West");
            break;
        case "W":
            rover.direction = "S";
            console.log("Rover is now facing South");
            break;
        case "S":
            rover.direction = "E";
            console.log("Rover is now facing East");
            break;
        case "E":
            rover.direction = "N";
            console.log("Rover is now facing North");
            break;
    }
  }
  
  function turnRight(rover){
    console.log("turnRight was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            console.log("Rover is now facing East");
            break;
        case "E":
            rover.direction = "S";
            console.log("Rover is now facing South");
            break;
        case "S":
            rover.direction = "W";
            console.log("Rover is now facing West");
            break;
        case "W":
            rover.direction = "N";
            console.log("Rover is now facing North");
            break;
    }
  }
  
  function moveForward(rover){
    console.log("moveForward was called");

    }
}