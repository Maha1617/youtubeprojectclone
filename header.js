const header = () => {
    const headerElement = `
        <div id="menuIcon" class="menu">
            <img src="../Picture/icons8-menu-50.png"/>
        </div>
        <div class="utubelogo">
            <img src="../Picture/icons8-youtube-94.png"/>
        </div>
        <div class="utube">
            <h3>YouTube</h3>
        </div>
        <div class="searching">
            <div class="searchbar">
                <div class="search">
                    <input type="text" name="Search" placeholder="Search" id="searchInput"onkeyup = "betterFunction()"/>
                    <span class="clicksearch" onclick="showSearchResults()"><img src="../Picture/icons8-search-50.png"/></span>
                </div>
            
            </div>

            <div class="suggestions">
            
            </div>
        </div>
        <div class="mic">
            <img src="../Picture/icons8-mic-32.png"/>
        </div>
        <div class="vertical3dot">
            <img src="../Picture/icons8-menu-vertical-24.png"/>
        </div>
        <div class="signinbutton">
            <button><span class="signin"><img src="../Picture/icons8-male-user-32.png"/></span><b>Sign in</b></button>
        </div>
             <div class="points">
                    <ul class="unordered">
                        <li class="opens"><span class="arrow"><img src="../Picture/icons8-back-50.png"/></span></li>
                        <li class="open"><span class="full">All</li></span>
                        <li class="open"><span class="fullli">Music</li></span>
                        <li class="open"><span class="fullli">Gaming</li></span>
                        <li class="open"><span class="fullli">FeaturePhones</li></span>
                        <li class="open"><span class="fullli">HiphopTamizha</li></span>
                        <li class="open"><span class="fullli">TamilCinema</li></span>
                        <li class="open"><span class="fullli">Mixes</li></span>
                        <li class="open"><span class="fullli">Lives</li></span>
                        <li class="open"><span class="fullli">News</li></span>
                        <li class="open"><span class="fullli">Tamilcinema</li></span>
                        <li class="open"><span class="fullli">Test</li></span>
                        <li class="open"><span class="fullli">Computerfiles</li></span>
                        <li class="open"><span class="fullli">Recruitment</li></span>
                        <li class="open"><span class="fullli">Javascript</li></span>
                        <li class="open"><span class="fullli">Skills</li></span>
                        <li class="open"><span class="fullli">Recentlyuploaded</li></span>
                        <li class="open"><span class="fullli">Watched</li></span>
                        <li class="open"><span class="fullli">Newtoyou</li></span>
                        <li class="opens"><span class="arrow"><img src="../Picture/icons8-forward-50.png"/></span></li>
                    </ul>
                </div>
    `;

    document.getElementsByClassName("header")[0].innerHTML = headerElement;
}
header();

const debounce = (fn, d) => {
    let interval;

    return function () {
        clearTimeout(interval);
        interval = setTimeout(() => {
            fn()
        }, d)
    }
}
const listSuggestion = async () => {
    const queryData = document.getElementById("searchInput").value;
    const suggestionURL = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${queryData}`;
    const data = await fetch(suggestionURL);
    const response = await data.json();
    showSuggestions = true;
        loadSuggestions(response);
   
}

const loadSuggestions = (data)=>{
    let suggestionhtml = '';
    console.log(data[1]);
   data.length>0 && data[1]?.forEach((element,index) => {
       suggestionhtml+=`<div id=suggestion_${index} onclick="selectValue(event)"><p>${element}</p></div>` 
    });
    document.getElementsByClassName("suggestions")[0].innerHTML = suggestionhtml;
}
const betterFunction = debounce(listSuggestion, 300);

const showSearchResults = async()=>{
    const queryData = document.getElementById("searchInput").value;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${queryData}&type=video&videoDefinition=high&key=AIzaSyD8yqXGfcpfxCyX-kWWzKa2dXC_jh57Dh8`;

    const searchResults = await fetch(url);
    const data = await searchResults.json();
    if(data.items.length > 0){
        console.log("im in if");
        localStorage.setItem("searchResults",JSON.stringify(data.items));
        window.location.href = "./searchresults.html"
    }else{
         window.location.href = "./searchresults.html"
    }
}

const selectValue = (event)=>{
  const inputValue = event.target.textContent;
  document.getElementById("searchInput").value = inputValue;
  showSearchResults();
  document.getElementById("searchInput").value = " ";
}
