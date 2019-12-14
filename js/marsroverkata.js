// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
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
    };
}
  
function turnRight(rover) {
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
    };
}
  
function moveForward(rover) {
    console.log("moveForward was called");
    switch (rover.direction) {
        case "N":
            rover.y--;
            rover.travelLog.push(`(${rover.x},${rover.y})`);
            console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
            break;
        case "E":
            rover.x++;
            rover.travelLog.push(`(${rover.x},${rover.y})`);
            console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
            break;
        case "S":
            rover.y++;
            rover.travelLog.push(`(${rover.x},${rover.y})`);
            console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
            break;
        case "W":
            rover.x--;
            rover.travelLog.push(`(${rover.x},${rover.y})`);
            console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
            break;
    }
}

function commandRover(commandList) {
    let commandArr = commandList.split("");
    commandArr.forEach( eachCommand => {
        if (eachCommand === "f") {
            moveForward(rover);
        } else if (eachCommand === "r") {
            turnRight(rover);
        } else if (eachCommand === "l") {
            turnLeft(rover);
        } else {
            console.log("Not a valid command");
        };
    });
    console.log(`The Rover has traveled to: ${rover.travelLog}`)
}

commandRover("rffrfflfrff");
console.log(rover.travelLog);