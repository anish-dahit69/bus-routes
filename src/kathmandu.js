import "remixicon/fonts/remixicon.css";
import busRoutes from "../api/ktm.json";

document.addEventListener("DOMContentLoaded", () => {
  const routes = document.querySelector(".routes-details");
  const clone = document.getElementById("clone");
  const searchButton = document.querySelector("button");

  const showRoutes = (busRoutes) => {
    routes.innerHTML = ""; // Clear previous results

    if (busRoutes.length === 0) {
      routes.innerHTML = "<p>No routes found.</p>";
      return;
    }

    busRoutes.forEach((curElem) => {
      const { route_name, stoppages } = curElem;
      const routesClone = document.importNode(clone.content, true);

      routesClone.querySelector(
        ".route-head"
      ).textContent = `${route_name} bus routes`;
      const busStop = routesClone.querySelector(".list");
      busStop.innerHTML = stoppages
        .map((stop, index) => {
          if (index === stoppages.length - 1) {
            return stop;
          }
          return `${stop} <i class="ri-expand-horizontal-s-line" style="color: red; font-size: 1.5rem; position: relative; bottom: -0.1rem;"></i>`;
        })
        .join("");

      routes.appendChild(routesClone);
    });
  };

  const searchRoutes = () => {
    const origin = document.querySelector(".origin input").value.toLowerCase();
    const destination = document
      .querySelector(".destination input")
      .value.toLowerCase();

    if (!origin || !destination) {
      routes.innerHTML = "<p>Please enter both origin and destination.</p>";
      return;
    }

    const filteredRoutes = busRoutes.filter(
      (route) =>
        route.stoppages.some((stop) => stop.toLowerCase().includes(origin)) &&
        route.stoppages.some((stop) => stop.toLowerCase().includes(destination))
    );

    showRoutes(filteredRoutes);
  };

  searchButton.addEventListener("click", searchRoutes);

  showRoutes(busRoutes);
});
