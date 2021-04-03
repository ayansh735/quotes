/// select dom
const textEl = document.querySelector("#text");
const authorEl = document.querySelector("#author");
const btn = document.querySelector("#btn");
const btnTwitter = document.querySelector("#twitterBtn");

const API = `https://type.fit/api/quotes`;
const getApi = async () => {
    const resp = await fetch(API);
    const respData = await resp.json();
    showData(respData);
}
getApi();
let text = "";
let author = "";
const showData = (data) => {
    const rnum = Math.floor(Math.random() * 1000);
    text = data[rnum].text;
    author = data[rnum].author;
    textEl.innerHTML = text;
    if(author === null){
        author = "Unknown ";
        authorEl.innerHTML = "Unknown ";
    } else{
        authorEl.innerHTML = `--  ${author}`;
    }
}
const twittNow = () => {
    let twitterUrl = `https://twitter.com/intent/tweet/?text=${text + "          " + ' By ' + author}`;
    window.open(twitterUrl);
}
btnTwitter.addEventListener("click", twittNow);
btn.addEventListener("click", getApi);