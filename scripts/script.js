


const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
const houseCupAPI = `https://nu-chi-house-cup.herokuapp.com/api/students/`


axios.get(`${corsAnywhere}${houseCupAPI}`).then(resp => {

    console.log(resp.data);
    let students = resp.data;

    let teams={};

    teams.aol = students.filter(student => student.teamName === 'aol' )
    teams.napster = students.filter(student => student.teamName === 'napster');
    teams.netscape = students.filter(student => student.teamName === 'netscape');
    teams.winamp = students.filter(student => student.teamName === 'winamp');
    teams.xanga = students.filter(student => student.teamName === 'xanga'); 


    console.log(teams.aol);


    for (const member of teams.aol) {
        console.log(member);
    }






})

