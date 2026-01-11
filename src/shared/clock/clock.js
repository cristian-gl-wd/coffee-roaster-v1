function updateClock() {
  // elements
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");
  const loaderElement = document.getElementById("loader");
  const contentElement = document.getElementById("clock-content");

  const now = new Date();

  if (dateElement && timeElement) {
    const dateOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    dateElement.innerText = now.toLocaleDateString("es-ES", dateOptions);
    timeElement.innerText = now.toLocaleTimeString("es-ES", timeOptions);
  }

  if (loaderElement && contentElement) {
    loaderElement.style.display = "none";
    contentElement.style.display = "block";
  }
}

updateClock();
setInterval(updateClock, 1000);
