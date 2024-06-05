let userId = document.getElementById("userInput");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");


function sendDeleteRequest() {
    let userValue = userId.value;
    let requestUrl = "https://gorest.co.in/public-api/users/" + userValue;

    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        }
    }

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = JSON.stringify(jsonData);

        })

}

sendDeleteRequestBtnEl.addEventListener("click", sendDeleteRequest);
