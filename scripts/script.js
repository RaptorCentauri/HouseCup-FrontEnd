


const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
const houseCupAPI = `https://nu-chi-house-cup.herokuapp.com/api/students/`


axios.get(`${corsAnywhere}${houseCupAPI}`).then(response => {

    let students = response.data;

    let teams  = {};
    let scores = {}

    teams.aol = students.filter(student => student.teamName === 'aol' )
    teams.napster = students.filter(student => student.teamName === 'napster');
    teams.netscape = students.filter(student => student.teamName === 'netscape');
    teams.winamp = students.filter(student => student.teamName === 'winamp');
    teams.xanga = students.filter(student => student.teamName === 'xanga'); 



    function getScores(teamName) {
        scores[teamName] = teams[teamName].reduce((a, c) => a + c.pointsEarned, 0)
    }

    for (const team in teams) {
        getScores(team)
    }


    console.log(scores);

 

})

  