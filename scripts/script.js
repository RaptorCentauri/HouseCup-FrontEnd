


const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
const houseCupAPI = `https://nu-chi-house-cup.herokuapp.com/api/students/`;

const scoresContainer = document.getElementById('scores-container');

let displayScore = (name='Team Name', score = 0) => {
    let teamLogo = document.createElement(`img`);
    teamLogo.setAttribute('src',`./assets/${name}.png`)
    teamLogo.setAttribute('class', 'team-logo');


    let teamElement = document.createElement(`h3`)
    teamElement.textContent = `${score}`
    scoresContainer.append(teamLogo)
    scoresContainer.append(teamElement);
}

let getTeams = async () => {

    let response = await axios.get(`${corsAnywhere}${houseCupAPI}`);
    console.log(response);
    let students = response.data
    let teams = {};

    teams.aol = students.filter(student => student.teamName === 'aol')
    teams.napster = students.filter(student => student.teamName === 'napster');
    teams.netscape = students.filter(student => student.teamName === 'netscape');
    teams.winamp = students.filter(student => student.teamName === 'winamp');
    teams.xanga = students.filter(student => student.teamName === 'xanga'); 

    return teams

}






getTeams().then((teams)=>{
    let teamScores = {}

    function getScores(teamName) {
        teamScores[teamName] = teams[teamName].reduce((a, c) => a + c.pointsEarned, 0)
    }


    for (const team in teams) {
        getScores(team)
    }

    for (team in teamScores) {
        console.log(teamScores[team]);
        let score = teamScores[team]
        displayScore(team, score );
    }

    
    // console.log(scores);
});



 

  