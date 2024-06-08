// axios.get("https://swapi.dev/api/people/1/").then ((res) =>{
//     console.log("response", res.data)
// })
// .catch((e) => {
//     console.log("Error", e)
// })

// using async 

// const getStarwars = async () => {
//    const res = await axios.get("https://swapi.dev/api/people/4/");
//    console.log(res.data)
// }
// getStarwars();


// refactoring to pass in an id 

// const getStarwars = async (id) => {
//    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//    console.log(res.data)
// }
// getStarwars(7);
// getStarwars(10);

// const getCatFacts = async () => {
//     const res = await axios.get("https://catfact.ninja/breeds")
//     console.log(res.data);
//     console.log(res.data.data[1]);
// }
// getCatFacts();

// using get
// axios.get('https://catfact.ninja/facts').then((res) => {
//     console.log(res.data.data);
// })


// // setting headers
// const getDadjokes = async () => {
//     const config = { headers: { Accept: 'application/json' }}
//     const res = await axios.get("https://icanhazdadjoke.com/",config);
//     console.log(res.data);
//     console.log(res.data.joke);
// }


const jokes = document.querySelector('#jokes');
const clickBtn = document.querySelector('#click');



const newJoke = () => {
    console.log('click');
    const getDadjokes = async () => {
        const config = { headers: { Accept: 'application/json' }}
        const res = await axios.get("https://icanhazdadjoke.com/",config);
        console.log(res.data);
        console.log(res.data.joke);
        const newJokeLi = document.createElement('LI');       
        newJokeLi.innerHTML = res.data.joke;
        jokes.appendChild(newJokeLi);  
    }   
    getDadjokes();
   
}
clickBtn.addEventListener('click', newJoke);
