// ------------------- DATA -------------------
let vehicles = [
  { plate: "NGX 4853", whereabouts: "Batangas City", history: [] },
  { plate: "NGX 4856", whereabouts: "Batangas City", history: [] },
  { plate: "NFZ 2848", whereabouts: "Batangas City", history: [] },
  { plate: "CBP 5511", whereabouts: "Batangas City", history: [] },
  { plate: "CBP 1336", whereabouts: "Batangas City", history: [] },
  { plate: "ZSG 105", whereabouts: "Batangas City", history: [] },
  { plate: "UOF 225", whereabouts: "Batangas City", history: [] },
  { plate: "NQX 657", whereabouts: "Batangas City", history: [] },
  { plate: "WQT 225", whereabouts: "Batangas City", history: [] },
  { plate: "MAM 7806", whereabouts: "Batangas City", history: [] },
  { plate: "NBO 6586", whereabouts: "Batangas City", history: [] },
  { plate: "EMPTY", whereabouts: "Batangas City", history: [] },
];

const details = {
  "NGX 4853": { model: "Mitsubishi L300", yearBought: "2022", status: "Active" },
  "NGX 4856": { model: "Mitsubishi L300", yearBought: "2021", status: "Active" },
  "NFZ 2848": { model: "Isuzu Traviz", yearBought: "2023", status: "Under Maintenance" },
  "CBP 5511": { model: "Isuzu Elf Truck", yearBought: "2021", status: "Active" },
  "CBP 1336": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" },
  "ZSG 105": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" },
  "UOF 225": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" },
  "NQX 657": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" },
  "WQT 225": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" },
  "MAM 7806": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" },
  "NBO 6586": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance" },
  "EMPTY": { model: "Unknown", yearBought: "N/A", status: "Inactive" },
};

const vehicleImages = {
  "NGX 4853": "https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/cars/l300/2020/L300-FB_1080_FL.png",
  "NGX 4856": "https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/cars/l300/2020/L300-FB_1080_FL.png",
  "NFZ 2848": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg",
  "CBP 5511": "https://carused.jp/images/elf/flatbody.jpg",
  "CBP 1336": "https://carused.jp/images/elf/flatbody.jpg",
  "ZSG 105": "https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/cars/l300/2020/L300-FB_1080_FL.png",
  "UOF 225": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg",
  "NQX 657": "https://www.carmag.co.za/wp-content/uploads/2023/10/Isuzu-D-Max-edit-2-800x480.png",
  "WQT 225": "https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/cars/l300/2020/L300-FB_1080_FL.png",
  "MAM 7806": "https://carused.jp/images/elf/flatbody.jpg",
  "NBO 6586": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg",
  "EMPTY": "https://via.placeholder.com/200x120?text=No+Vehicle"
};

const app = document.getElementById("app");

// ------------------- CLOCK -------------------
function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000); updateClock();

// ------------------- RENDER -------------------
function renderList() {
  app.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "grid";

  vehicles.forEach(v => {
    const card = document.createElement("div");
    card.className = "card";
    const imgUrl = vehicleImages[v.plate] || "https://via.placeholder.com/200x120?text=Vehicle";
    card.innerHTML = `
      <img src="${imgUrl}" alt="${v.plate}" />
      <h2>${v.plate}</h2>
      <p>Whereabouts: ${v.whereabouts}</p>
    `;
    grid.appendChild(card);
  });

  app.appendChild(grid);
}

// ------------------- INIT -------------------
renderList();
