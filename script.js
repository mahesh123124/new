function redirectUser() {

    const input = document.getElementById("urlInput");

    const message = document.getElementById("message");

    let url = input.value.trim();


    if (url === "") {

        message.textContent = "Please enter a URL.";

        return;
    }


    // Add https:// if the user didn't provide it
    if (!url.startsWith("http://") &&
        !url.startsWith("https://")) {

        url = "https://" + url;
    }


    try {

        const validURL = new URL(url);

        message.textContent = "Redirecting...";

        setTimeout(function () {

            window.location.href = validURL.href;

        }, 500);

    } catch (error) {

        message.textContent =
            "Please enter a valid URL.";

    }
}


document
    .getElementById("urlInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            redirectUser();

        }

    });
