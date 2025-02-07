import "remixicon/fonts/remixicon.css";

import busRoutes from "../api/bhaktapur.json";
const routes = document.querySelector(".routes-details");
const clone = document.getElementById("clone");

const showRoutes = (busRoutes) => {
  busRoutes.forEach((curElem) => {
    console.log(curElem);
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
        return `${stop} <i class="ri-expand-horizontal-s-line" style="color: red; font-size: 1.5rem; position: relative; bottom: -0.1rem;"></i> `;
      })
      .join("");

    routes.appendChild(routesClone);
  });
};

showRoutes(busRoutes);
