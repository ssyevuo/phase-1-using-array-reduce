const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((sum, number) => sum + number, 0);
//0 works as the initial value for the sum to know where to start from before looping through the batteryBatches.
//number represents each value in the batteryBatches array that is added tothe sum to get the total

console.log(totalBatteries)


