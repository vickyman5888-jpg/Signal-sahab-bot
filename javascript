// Live PKT Clock
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" });
  clock.textContent = now;
}
setInterval(updateClock, 1000);
updateClock();

// Login logic
function checkLogin() {
  const code = document.getElementById("accessCode").value;
  if (code === "786786") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("mainApp").classList.remove("hidden");
  } else {
    alert("Wrong Access Code!");
  }
}

// Signal simulation
function getSignal() {
  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");

    // Random signal
    const signal = Math.random() > 0.5 ? "UP" : "DOWN";
    const list = document.getElementById("accuracyList");
    const newItem = document.createElement("li");
    const currency = document.getElementById("currencyPair").value;
    const time = document.getElementById("customTime").value;

    newItem.textContent = `${signal} signal for ${currency} - ${time}s`;
    newItem.style.color = signal === "UP" ? "green" : "red";
    list.prepend(newItem);

    // Highlight signal button
    document.getElementById("upBtn").style.background = signal === "UP" ? "#00ff00" : "green";
    document.getElementById("downBtn").style.background = signal === "DOWN" ? "#ff0000" : "red";
  }, 2000);
}