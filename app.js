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
  "NGX 4853": { model: "Mitsubishi L300", yearBought: "2022", status: "Active", lastTrip: "2025-09-10", lastMaintenance: "2025-09-12" },
  "NGX 4856": { model: "Mitsubishi L300", yearBought: "2021", status: "Active", lastTrip: "2025-09-05", lastMaintenance: "2025-09-15" },
  "NFZ 2848": { model: "Isuzu Traviz", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "CBP 5511": { model: "Isuzu Elf Truck", yearBought: "2021", status: "Active", lastTrip: "2025-09-05", lastMaintenance: "2025-09-15" },
  "CBP 1336": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "ZSG 105": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "UOF 225": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "NQX 657": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "WQT 225": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "MAM 7806": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "NBO 6586": { model: "Isuzu Elf Truck", yearBought: "2023", status: "Under Maintenance", lastTrip: "2025-09-08", lastMaintenance: "2025-09-16" },
  "EMPTY": { model: "Unknown", yearBought: "N/A", status: "Inactive", lastTrip: "N/A", lastMaintenance: "N/A" },
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
let selectedVehicle = null;
let activeTab = "Details";

// ------------------- CLOCK -------------------
function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

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
    card.onclick = () => { selectedVehicle = v.plate; activeTab = "Details"; renderDetails(); };
    grid.appendChild(card);
  });

  app.appendChild(grid);
}

function renderDetails() {
  const v = vehicles.find(x => x.plate === selectedVehicle);
  const d = details[selectedVehicle] || {};
  app.innerHTML = `
    <button onclick="backToList()">← Back</button>
    <h1>${v.plate}</h1>
    <div class="tab-buttons">
      ${["Details","Maintenance","Vehicle Request","Whereabouts","Fuel","Reports","History"]
        .map(tab => `<button onclick="setTab('${tab}')" class="${activeTab===tab?'active':''}">${tab}</button>`).join("")}
    </div>
    <div id="tabContent"></div>
  `;
  renderTab(v,d);
}

function renderTab(v,d) {
  const tabContent = document.getElementById("tabContent");

  if (activeTab === "Details") {
    tabContent.innerHTML = `
      <p><b>Model:</b> ${d.model||"N/A"}</p>
      <p><b>Year Bought:</b> ${d.yearBought||"N/A"}</p>
      <p><b>Status:</b> ${d.status||"N/A"}</p>
      <p><b>Last Trip:</b> ${d.lastTrip||"N/A"}</p>
      <p><b>Last Maintenance:</b> ${d.lastMaintenance||"N/A"}</p>
      <p><b>Whereabouts:</b> ${v.whereabouts}</p>
    `;
  } else if (activeTab === "Maintenance") {
    tabContent.innerHTML = `
      <form onsubmit="submitMaintenance(event)">
        <input type="date" name="date" required />
        <input type="text" name="cv" placeholder="CV Number" required />
        <input type="text" name="reason" placeholder="Reason" required />
        <input type="number" name="cost" placeholder="Cost" required />
        <button type="submit">Submit</button>
      </form>
    `;
  } else if (activeTab === "Vehicle Request") {
    tabContent.innerHTML = `
      <form onsubmit="submitVehicleRequest(event)">
        <input type="date" name="date" required />
        <input type="text" name="project" placeholder="Project" required />
        <input type="text" name="from" placeholder="Job Order #" required />
        <input type="text" name="to" placeholder="Location" required />
        <input type="text" name="driver" placeholder="Driver" required />
        <input type="text" name="purpose" placeholder="Purpose" required />
        <input type="text" name="request" placeholder="Requested By" required />
        <button type="submit">Submit</button>
      </form>
    `;
  } else if (activeTab === "Whereabouts") {
    tabContent.innerHTML = `
      <form onsubmit="submitWhereabouts(event)">
        <select name="place" required>
          <option value="">Select</option>
          <option>Batangas City</option>
          <option>Makati</option>
          <option>Company Use</option>
          <option>Repair Shop</option>
        </select>
        <input type="text" name="company" placeholder="Destination (if Company Use)" />
        <button type="submit">Update</button>
      </form>
    `;
  } else if (activeTab === "Fuel") {
    tabContent.innerHTML = `
      <form onsubmit="submitFuel(event)">
        <input type="date" name="date" required />
        <input type="text" name="bearer" placeholder="Bearer" required />
        <input type="text" name="order" placeholder="PO #" required />
        <select name="gas" required>
          <option value="">Fuel Type</option>
          <option>Diesel</option>
          <option>Gasoline</option>
        </select>
        <input type="number" name="amount" placeholder="Amount" required />
        <button type="submit">Submit</button>
      </form>
    `;
  } else if (activeTab === "Reports") {
    tabContent.innerHTML = `
      <form onsubmit="submitReport(event)">
        <input type="file" name="report" required />
        <button type="submit">Upload</button>
      </form>
    `;
  } else if (activeTab === "History") {
    renderHistory(v, tabContent);
  }
}

// ------------------- HISTORY -------------------
function renderHistory(v, tabContent) {
  if (!v.history.length) {
    tabContent.innerHTML = "<p>No history yet.</p>";
    return;
  }
  tabContent.innerHTML = `<pre>${JSON.stringify(v.history,null,2)}</pre>`;
}

// ------------------- HELPERS -------------------
function backToList(){selectedVehicle=null;renderList();}
function setTab(tab){activeTab=tab;renderDetails();}
function addHistory(type,data){const v=vehicles.find(x=>x.plate===selectedVehicle);v.history.push({type,...data});activeTab="History";renderDetails();}

// ------------------- FORMS -------------------
function submitMaintenance(e){e.preventDefault();addHistory("Maintenance",Object.fromEntries(new FormData(e.target)));}
function submitVehicleRequest(e){e.preventDefault();addHistory("Vehicle",Object.fromEntries(new FormData(e.target)));}
function submitWhereabouts(e){e.preventDefault();const fd=new FormData(e.target);let place=fd.get("place");if(place==="Company Use")place+=" - "+fd.get("company");const v=vehicles.find(x=>x.plate===selectedVehicle);v.whereabouts=place;addHistory("Whereabouts",{place,date:new Date().toISOString().split("T")[0]});}
function submitFuel(e){e.preventDefault();addHistory("Fuel",Object.fromEntries(new FormData(e.target)));}
function submitReport(e){e.preventDefault();addHistory("Report",{file:e.target.report.value,date:new Date().toISOString().split("T")[0]});}

// ------------------- INIT -------------------
renderList();
