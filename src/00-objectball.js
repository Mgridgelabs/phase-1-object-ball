function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black, White'],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 22,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    }
  }
}

function homeTeamName() {
 return gameObject()["home"]["teamName"]
}
debugger;

function numPointsScored(playerName){
  for(let player in gameObject.home.players){
    if(player === playerName)
      return gameObject.home.players[player].points
  }
  for(let player in gameObject.home.players){
    if(player === playerName)
      return gameObject.home.players[player].points
  }
  return "player not found"
}

function shoeSize(playerName){
  for(let player in gameObject.home.players){
    if (player === playerName)
      return gameObject.home.players[player].shoe
  }

  for(let player in gameObject.away.players){
    if (player === playerName)
      return gameObject.away.players[player].shoe
  }
  return "player not found"
}

function teamColors(teamName){
  if(teamName === gameObject.home.teamName){
    return gameObject.home.colors
  } else if (teamName === gameObject.away.teamName){
    return gameObject.away.colors
  }
}

function teamNames(){
  let homeTeam = gameObject.home.teamName
  let awayTeam = gameObject.away.teamName
  return [homeTeam, awayTeam]
}

function playerNumbers(teamName){
  if (teamName === gameObject.home.teamName){
    return Object.values(gameObject.home.players).map(player => player.number)
  } else if (teamName === gameObject.away.teamName){
    return Object.values(gameObject.away.players).map(player => player.number)
  }
}

function playerStats(playerName){
  if (gameObject.home.players[playerName]){
    return gameObject.home.players[playerName];
  }
  if (gameObject.away.players[playerName]){
    return gameObject.away.players[playerName];
  }
}

function bigShoeRebounds(){
  let largestShoe = 20;
  let PlayerWithLargestShoe = "";
  
  const homePlayers = Object.values(gameObject.home.players);
    const awayPlayers = Object.values(gameObject.away.players);

  const allPlayers = [...homePlayers, ...awayPlayers];
  
   for (let i = 0; i < allPlayers.length; i++) {
        if (allPlayers[i].shoe > largestShoe) {
            largestShoe = allPlayers[i].shoe;
            playerWithLargestShoe = allPlayers[i].name;
        }
    }
    return playerWithLargestShoe + "'s rebounds: " + playerStats(playerWithLargestShoe).rebounds;
}
