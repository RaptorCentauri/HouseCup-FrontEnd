console.log('running script js');

// console.log(axios);
// const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
// const houseCupAPI = 

// axios.get(`${corsAnywhere}https://nu-chi-house-cup.herokuapp.com/api/students/`).then(resp=>{
//     console.log(resp);
// })


console.log(axios);
const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
const houseCupAPI = `https://nu-chi-house-cup.herokuapp.com/api/students/`
// const localAPI = `http://localhost:7500/api/students`
// const houseCupAPI = `http://dave.leo.shilander/api/projects`


// axios.get(`${localAPI}`).then(resp => {
    axios.get(`${corsAnywhere}${houseCupAPI}`).then(resp => {

    console.log(resp.data);
    let students = resp.data;

    let teams={};

    teams.aol = students.filter(student => student.teamName === 'aol' )
    teams.napster = students.filter(student => student.teamName === 'napster');
    teams.netscape = students.filter(student => student.teamName === 'netscape');
    teams.winamp = students.filter(student => student.teamName === 'winamp');
    teams.xanga = students.filter(student => student.teamName === 'xanga'); 

    // console.log('teamAOL', teamAOL);
    // console.log('teamNapster', teamNapster);
    // console.log('teamNetscape', teamNetscape);
    // console.log('teamWinamp', teamWinamp);
    // console.log('teamXanga', teamXanga);

    console.log(teams.aol);

    // const reducer = () => {

    // }

    // let aolScore = teams.aol.reduce()

    for (const member of teams.aol) {
        console.log(member);
    }






})

