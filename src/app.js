//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
 {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon]
  return Manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){

  if(formation.length==0){
    return null;
  }
  var play ={
    defender:formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return play;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var data = players.filter(player => player.debut == year);
  return data;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter((player)=>{
    return player.position == position
  })
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let array = []
  if (!awardName){
    return array
  }else{
    return players.filter((player)=>{
      return player.awards.some((award)=>{
        return award.name == awardName
      })
    })
  }
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  if (!awardName){
    return []
  }else{
    return players.filter((player)=>{
      const awardArray = player.awards.filter((award)=>{
        return award.name == awardName
      })
      return awardArray.length == noOfTimes
    })
  }
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var data = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return data;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  return players.sort((player1,player2)=>{
    return player2.age - player1.age
  })
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  const x = players.filter((player)=>{
    return player.team == team
  })
  return x.sort((player1,player2)=>{
    return player2.awards.length - player1.awards.length
  })
}


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  }
  else if (a.name < b.name) { value = -1; }
  else { value = 0; }
}
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  var dataOne = filterByAwardxTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter(player => player.country == country);
  return dataTwo.sort(compare);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var data = players.filter(player => player.age > age);
  return data;
}
