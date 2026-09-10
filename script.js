// ==========================================
// START WEBSITE
// ==========================================

function startWebsite() {

    console.log("Start button clicked");

    const popup = document.getElementById("privatePopup");
    const main = document.getElementById("main");

    if (popup) {
        popup.classList.add("hidden");
    }

    if (main) {
        main.classList.remove("hidden");
    }

}


// ==========================================
// GENDER QUESTION
// ==========================================

function genderAnswer(answer) {

    // Correct answer
    if (answer === "male-lesbian") {

        document.getElementById("q1").classList.add("hidden");

        document.getElementById("q2").classList.remove("hidden");

    }

    // Wrong answer
    else {

        const popup = document.getElementById("wrongPopup");

        document.getElementById("wrongMessage").innerText =
            "Firse sooch";

        popup.classList.remove("hidden");

    }

}


// ==========================================
// CLOSE WRONG ANSWER POPUP
// ==========================================

function closeWrongPopup() {

    document
        .getElementById("wrongPopup")
        .classList.add("hidden");

}


// ==========================================
// MIDFIELDER QUESTION
// ==========================================

function midfielder(choice) {

    const result =
        document.getElementById("midfielderResult");

    const next =
        document.getElementById("nextBtn");


    // ======================================
    // PEDRI
    // ======================================

    if (choice === "pedri") {

        result.innerHTML = `
            <h3>✅ Correct Answer!</h3>

            <p>
                Finally, you got something right. 😌
            </p>

            <img
                src="img/Screenshot 2026-09-10 192817.png"
                alt="Pedri"
            >
        `;

        next.classList.remove("hidden");

    }


    // ======================================
    // BELLINGHAM
    // ======================================

    else {

        document
            .getElementById("duckPopup")
            .classList.remove("hidden");

        next.classList.remove("hidden");

    }

}


// ==========================================
// CLOSE DUCK POPUP
// ==========================================

function closeDuckPopup() {

    document
        .getElementById("duckPopup")
        .classList.add("hidden");

}


// ==========================================
// SHOW APOLOGY
// ==========================================

function showApology() {

    document
        .getElementById("q2")
        .classList.add("hidden");

    document
        .getElementById("apology")
        .classList.remove("hidden");

}


// ==========================================
// YES ENDING
// ==========================================

function happyEnding() {

    document
        .getElementById("apology")
        .classList.add("hidden");

    document
        .getElementById("yesEnding")
        .classList.remove("hidden");

    createHearts();

}


// ==========================================
// NO ENDING
// ==========================================

function kasamEnding() {

    document
        .getElementById("apology")
        .classList.add("hidden");

    document
        .getElementById("noEnding")
        .classList.remove("hidden");

}


// ==========================================
// HEART ANIMATION
// ==========================================

function createHearts() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";

        heart.style.transition =
            "transform 3s linear, opacity 3s";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.style.transform =
                `translateY(110vh) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 3200);

    }

}