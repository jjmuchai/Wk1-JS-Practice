// Function to check car speed and assign demerit points
function checkSpeed() {
    let speed = prompt("Enter the car speed:");
    speed = Number(speed);
    
    // Validate input
    if (isNaN(speed) || speed < 0) {
        alert("Invalid input! Please enter a valid speed.");
        return;
    }
    
    const speedLimit = 70; // Speed limit threshold
    const kmPerDemerit = 5; // Every 5 km over the limit earns 1 demerit point
    
    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert("Points: " + demeritPoints);
        }
    }
}

checkSpeed();
