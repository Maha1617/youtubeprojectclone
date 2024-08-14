// script.js
document.addEventListener("DOMContentLoaded", () => {
    const popup = () => {
        const popupElement = `
        <!-- Popup structure -->
        <div id="popup" class="popup">
            <div class="popup-content">
                <span class="close-btn">&times;</span>
                <div class="detailss">
                    <h2>Share in a post</h2>
                    <button>Create post</button>
                    <h2>No Subscribers</h2>
                </div>
                <hr>
                <div class="sharee">
                    <h2>Share</h2>
                    <ul class="listapp">
                        <li class="changeimage"><img src="../Picture/greasterless.jpeg" alt="Greasterless"/></li>
                        <li class="changeimage"><img src="../Picture/whatapp.jpeg" alt="WhatsApp"/></li>
                        <li class="changeimage"><img src="../Picture/download.png" alt="Download"/></li>
                        <li class="changeimage"><img src="../Picture/Mail.png" alt="Mail"/></li>
                        <li class="changeimage"><img src="../Picture/outlook.jpeg" alt="Outlook"/></li>
                        <li class="changeimage"><img src="../Picture/Shareme.png" alt="Shareme"/></li>
                    </ul>
                </div>
                <div class="copy">
                    <p>https://youtu.be/-IJwMoGL1d8?si=pvu5XcCDTkWRw2vx <button class="opened"> Copy</button></p>
                </div>
                <hr>
                <label><input type="checkbox"> Start at 2:01</label>
                <button id="closePopupBtn">Close</button>
            </div>
        </div>
        `;

        // Append popup to the body
        document.body.insertAdjacentHTML('beforeend', popupElement);

        // Event listeners
        const openPopupSpan = document.getElementById("openPopupSpan");
        const popupDiv = document.getElementById("popup");
        const closePopupBtn = document.getElementById("closePopupBtn");
        const closeBtn = document.querySelector(".close-btn");

        const openPopup = () => {
            popupDiv.style.display = "flex"; // Use 'flex' to center the popup
        };

        const closePopup = () => {
            popupDiv.style.display = "none";
        };

        openPopupSpan.addEventListener("click", openPopup);
        closePopupBtn.addEventListener("click", closePopup);
        closeBtn.addEventListener("click", closePopup);

        window.addEventListener("click", (event) => {
            if (event.target === popupDiv) {
                closePopup();
            }
        });
    }

    popup(); // Initialize the popup
});
