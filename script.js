
function handleKey(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("userInput");
    const reply = input.value.trim();
    if (!reply) return;

    const clerkLine = document.getElementById("clerkLine");
    clerkLine.innerHTML += "<br><span class='user'>YOU:</span> " + reply;
    clerkLine.innerHTML += "<br><span class='system'>CLERK:</span> That is... sufficient.";

    input.style.display = "none";
    document.getElementById("enterButton").style.display = "inline-block";
    document.getElementById("keyIcon").style.display = "block";
  }
}

function enterCastle() {
  alert("You may proceed. Your evaluation begins now...");
  // Redirect or game launch logic can go here
}
