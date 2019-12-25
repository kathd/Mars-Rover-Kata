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
    rover.travelLog.push(`(${rover.x},${rover.y})`); // push starting coordinates to travel log
    switch (rover.direction) {
        case "N":
            if (rover.y===0) {
                console.log(`Rover can't roam off the map`);
                break;
            } else {
                rover.y--;
                rover.travelLog.push(`(${rover.x},${rover.y})`);
                console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
                break;
            }
        case "E":
            if (rover.x===9) {
                console.log(`Rover can't roam off the map`);
                break;
            } else {
                rover.x++;
                rover.travelLog.push(`(${rover.x},${rover.y})`);
                console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
                break;
            }
        case "S":
            if (rover.y===9) {
                console.log(`Rover can't roam off the map`);
                break;
            } else {    
                rover.y++;
                rover.travelLog.push(`(${rover.x},${rover.y})`);
                console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
                break;
            }
        case "W":
            if (rover.x===0) {
                console.log(`Rover can't roam off the map`);
                break;
            } else {
                rover.x--;
                rover.travelLog.push(`(${rover.x},${rover.y})`);
                console.log(`Rover's coordinates are (${rover.x},${rover.y})`);
                break;
            }
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

//commandRover("f")
commandRover("rffrfflfrff");
//console.log(rover.travelLog);