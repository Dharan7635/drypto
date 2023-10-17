const url = 'https://coingecko.p.rapidapi.com/simple/supported_vs_currencies';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7e1375911fmshb63c3444137d769p18eed1jsn6fa713ac6a80',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
};
async function apiRequest() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// apiRequest();

const url1 = 'https://coingecko.p.rapidapi.com/coins/list';
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e1375911fmshb63c3444137d769p18eed1jsn6fa713ac6a80',
		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
	}
};
async function apiRequest2(){
    try {
        const response = await fetch(url1, options1);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
// apiRequest2();

const hamburger = document.getElementsByClassName("toggle-button")[0];
const navlist = document.querySelector(".navlist");
const xbutton = document.querySelector(".x-button");
console.log(navlist);
console.log(hamburger);
hamburger.addEventListener("click",toggle);
xbutton.addEventListener("click",toggle);
function toggle(){
    navlist.classList.toggle("active");
    hamburger.classList.toggle("deactive");
    xbutton.classList.toggle("active");
}