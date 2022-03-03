var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
   
  window.alert("Welcome to Robot Gladiators!");  // Alert players that they are starting the round

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue.");

  if (promptFight === "fight" || promptFight === "FIGHT") {
    
    enemyHealth = enemyHealth - playerAttack; //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." // Log a resulting message to the console so we know that it worked.
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!"); // check enemy health
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."  // Log a resulting message to the console so we know that it worked.
    );

    if (playerHealth <=0) {
        window.alert(playerName + " has died!"); // check our robots health
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
  }

  else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      console.log(playerMoney = playerMoney - 2);
    }
    else {
      fight();
    }
  }
  else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

fight();