import busRoutes from "../api/ktm.json";
const routes = document.querySelector(".routes-details");
const clone = document.getElementById("clone");

const showRoutes = (busRoutes) => {
  busRoutes.forEach((curElem) => {
    console.log(curElem);
    const { route_name, stoppages } = curElem;

    const routesClone = document.importNode(clone.content, true);

    routesClone.querySelector(".route-head").textContent = route_name;
    routesClone.querySelector(".bus-stop").textContent = stoppages;

    routes.appendChild(routesClone);
  });
};

showRoutes(busRoutes);
