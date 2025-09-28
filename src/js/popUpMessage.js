export function showMessage() {
    const messages = [
        "learning data analysis just to get better at gambling 🤑",
        "hello there!",
        "did you know? you look great today 😎",
        "here's a tip: stay hydrated!",
        "honey never spoils.",
        "random observation: older generations tend to use emojis more often.",
        "keep going, you're doing great!",
        "dude, knowing your course inside and out really helps.",
        "high school builds the toolbox, and college asks you to build machines with it.",
        "the sum is discrete; the integral is its continuous counterpart.",
        "i guess, limitations lead to creativity",
        "time slips away from my hands... it's no longer free when I sacrifice something else.",
        "{inputs} ⊆ 𝐾 ∧ output ∉ 𝐾 ⇒ 𝐾 := 𝐾 ∪ {output}",
        "philosopher or psych ward patient, 50-50."
    ];

    var popup = document.getElementById("message");

    // Pick a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    popup.innerHTML = `<p>${randomMessage}</p>`;

    popup.style.left = "";
    popup.style.right = "";
    popup.style.transform = "";

    // Toggle the popup visibility
    popup.classList.toggle("show");

    requestAnimationFrame(() => {
        const rect = popup.getBoundingClientRect();
        const vw = window.innerWidth;

        if (rect.left < 0) {
            popup.style.left = "0";
            popup.style.transform = "none";
        } else if (rect.right > vw) {
            popup.style.left = "auto";
            popup.style.right = "0";
            popup.style.transform = "none";
        }
    });
}