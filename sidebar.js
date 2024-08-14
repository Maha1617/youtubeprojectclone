const left = () => {
    const left= `
        <div class="sidebar">
                    <ul class="homes">
                        <span class="side"><img src="../Picture/icons8-home-48.png"/><li>Home</li></span>
                        <span class="side"><img src="https://img.icons8.com/?size=100&id=ajczeHCWXbyR&format=png&color=1A1A1A"/><li>Shorts</li></span>
                        <span class="side"><img src="../Picture/icons8-video-playlist-50.png"/><li>Subcriptions</li></span>
                        <span class="side"><img src="../Picture/icons8-playlist-16.png"/><li>Playlists</li></span>
                    </ul>
                </div>
                <div class="leftpoints">

                    <ul class="home">
                        <span class="sps"><img src="../Picture/icons8-home-48.png"/><li>Home</li></span>
                        <span class="sps"><img src="https://img.icons8.com/?size=100&id=ajczeHCWXbyR&format=png&color=1A1A1A"/><li>Shorts</li></span>
                        <span class="sps"><img src="../Picture/icons8-video-playlist-50.png"/><li>Subcriptions</li></span>
        <hr>
                        <span class="sym">You ></span>
                        <span class="sps"><img src="../Picture/icons8-name-32.png"/><li>Your Channel</li></span>
                        <span class="sps"><img src="../Picture/icons8-time-machine-50.png"/><li>History</li></span>
                        <span class="sps"><img src="../Picture/icons8-playlist-16.png"/><li>Playlists</li></span>
                        <span class="sps"><img src="../Picture/icons8-youtube-16.png"/><li>Your Videos</li></span>
                        <span class="sps"><img src="../Picture/icons8-clock-24.png"/><li>Watch later</li></span>
                        <span class="sps"><img src="../Picture/icons8-facebook-like-50.png"/><li>Liked videos</li></span>
                        <hr>
                        <span class="sym">Subcription</span>
                        <span class="sps"><img src="../lastimg.jpg"/><li>W3school</li></span>
                        <span class="sps"><img src="../leftimg.jpg"/><li>Cherryvlogs</li></span>
                        <span class="sps"><img src="../rigthimg.jpg"/><li>Gamingpubg</li></span>
                        <span class="sps"><img src="../Responsive class/house5.jpg"/><li>Hackerrank</li></span>
                        <hr>
                        <span class="sym">Explore</span>
                        <span class="sps"><img src="../Picture/icons8-home-48.png"/><li>Trending</li></span>
                        <span class="sps"><img src="../Picture/icons8-youtube-shorts-24.png"/><li>Shopping</li></span>
                        <span class="sps"><img src="../Picture/utubesubscription.png"/><li>Music</li></span>
                        <span class="sps"><img src="../Picture/icons8-browser-history-64.png"/><li>Movies</li></span>
                        <span class="sps"><img src="../Picture/icons8-home-48.png"/><li>Lives</li></span>
                        <span class="sps"><img src="../Picture/icons8-youtube-shorts-24.png"/><li>Gaming</li></span>
                        <span class="sps"><img src="../Picture/utubesubscription.png"/><li>News</li></span>
                        <span class="sps"><img src="../Picture/icons8-browser-history-64.png"/><li>Sports</li></span>
                        <span class="sps"><img src="../Picture/icons8-home-48.png"/><li>Courses</li></span>
                        <span class="sps"><img src="../Picture/icons8-youtube-shorts -24.png"/><li>Fashions & Beauty</li></span>
                        <span class="sps"><img src="../Picture/utubesubscription.png"/><li>Podcasts</li></span>
                        <hr>
                        <span class="sym">More from Youtube</span>
                        <span class="sps"><img src="../Picture/icons8-browser-history-64.png"/><li>Youtube Premium</li></span>
                        <span class="sps"><img src="../Picture/icons8-home-48.png"/><li>Youtube Studio</li></span>
                        <span class="sps"><img src="../Picture/icons8-youtube-shorts-24.png"/><li>Youtube Music</li></span>
                        <span class="sps"><img src="../Picture/utubesubscription.png"/><li>Youtube Kids</li></span>
                        <hr>
                        <span class="sps"><img src="../Picture/icons8-browser-history-64.png"/><li>Setting</li></span>
                        <span class="sps"><img src="../Picture/icons8-home-48.png"/><li>Report history</li></span>
                        <span class="sps"><img src="../Picture/icons8-youtube-shorts-24.png"/><li>Help</li></span>
                        <span class="sps"><img src="../Picture/utubesubscription.png"/><li>Send feedback</li></span>
                    </ul>
                </div>
    `;
    return left; // Return the generated HTML content
}

// Call sidebar() and assign its result to the innerHTML of the first element with class "sidebar"
document.getElementsByClassName("left")[0].innerHTML = left();