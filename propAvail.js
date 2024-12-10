// Property data
const properties = [
    {
      id: 2,
      name: "Available",
      new: "",
      address: "1477 East Main Street",
      city: "Brownsburg",
      state: "IN",
      zip: "46112",
      info: "",
      imageUrl: "./assets/propertyimage/1477_main.jpg",
      webPage: "./properties/1477-Main.html",
      lat: 39.83268,
      lng: -86.36995,
    },
    {
      id: 3,
      name: "Bedford Shoppes",
      new: "",
      address: "3302 John A Williams Blvd",
      city: "Bedford",
      state: "IN",
      zip: "47421",
      info: "",
      imageUrl: "./assets/propertyimage/bedfordshoppes.jpg",
      webPage: "./properties/1477-Main.html",
      lat: 38.86727,
      lng: -86.51774,
    },
    {
      id: 1,
      name: "Available",
      new: "",
      address: "17655 Cumberland Road",
      city: "Noblesville",
      state: "IN",
      zip: "46060",
      info: "",
      imageUrl: "./assets/propertyimage/cumberland.jpg",
      webPage: "./properties/17655-Cumberland.html",
      lat: 40.04447,
      lng: -85.99619,
    },
    {
      id: 4,
      name: "For Sale - $645,000",
      new: "",
      address: "5859 West Morris St.",
      city: "Indianapolis",
      state: "IN",
      zip: "46241",
      info: "",
      imageUrl: "./assets/propertyimage/5859-morris.jpg",
      webPage: "./properties/5859-Morris.html",
      lat: 39.75018,
      lng: -86.26150,
    },
  ];
  
  // Initialize the map
  const map = L.map("mapid").setView([39.4977, -86.2097], 9);
  
  // Add the tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  
  // Initialize marker cluster
  const markers = L.markerClusterGroup();
  
  // Add markers to the map and populate the property list
  properties.forEach((property) => {
    // Create a marker and add it to the marker cluster
    const marker = L.marker([property.lat, property.lng]);
    marker.propertyId = property.id;
    markers.addLayer(marker);
  
    // Create a popup for the marker
    const popupContent = `
      <img src="${property.imageUrl}" class="border border-dark border-2 border-solid rounded mx-auto d-block" alt="${property.name}" width="300" height="200" />
      <h4 class="p-0 mx-2 my-0">
        ${property.name}
        <img src="${property.new}" class="new" width="20" height="auto" />
      </h4>
      <p class="p-0 mx-2 my-0">${property.address}</p>
      <p class="p-0 mx-2 my-0">${property.city}, ${property.state} ${property.zip}</p>
      <p class="p-0 mx-2 my-2">${property.info}</p>
      <a href="${property.webPage}" class="btn btn-dark mx-1 my-0" style="color: #fff">Learn More</a>
      
      `;
    marker.bindPopup(popupContent);
  
    // Add property to the property list
    const propertyListItem = `
      <div class="property-item" id="property-${property.id}">
        <img src="${property.imageUrl}" class="border border-dark border-2 border-solid rounded mx-auto d-block" alt="${property.name}" width="300" height="200" />
        <h4 class="p-0 mx-4 my-0">
          ${property.name}
          <img src="${property.new}" class="new" width="20" height="auto" />
        </h4>
        <p class="p-0 mx-4 my-0">${property.address}</p>
        <p class="p-0 mx-4 mb-2">${property.city}, ${property.state} ${property.zip}</p>
        <p class="p-0 mx-4 mb-2">${property.info}</p>
      <div class="property-actions mx-auto">
        <a href="${property.webPage}" target="_blank" class="btn btn-dark my-0" style="color: #fff">Learn More</a>
        <button class="btn btn-dark center-on-map" data-lat="${property.lat}" data-lng="${property.lng}">Center on Map</button>
      </div>
      </div>
    `;
    document.getElementById("property-list").innerHTML += propertyListItem;
  });
  
  // Add marker cluster to the map
  map.addLayer(markers);
  
  // Marker click event to scroll and highlight the property in the list
  markers.on("click", (e) => {
    const propertyId = e.layer.propertyId;
    const propertyElement = document.getElementById(`property-${propertyId}`);
    removeHighlightFromAllProperties();
    propertyElement.scrollIntoView({ behavior: "smooth", block: "center" });
    propertyElement.classList.add("highlighted");
  });
  
  // Marker click event to remove the highlight from the property in the list
  function removeHighlightFromAllProperties() {
    const propertyItems = document.querySelectorAll(".property-item.highlighted");
    propertyItems.forEach((propertyItem) => {
      propertyItem.classList.remove("highlighted");
    });
  }
  
  // Center on map button click event
  document.querySelectorAll(".center-on-map").forEach((button) => {
    button.addEventListener("click", (e) => {
      const lat = parseFloat(e.target.dataset.lat);
      const lng = parseFloat(e.target.dataset.lng);
      map.flyTo([lat, lng], 18);
  
      const propertyElement = e.target.closest(".property-item");
      removeHighlightFromAllProperties();
      propertyElement.classList.add("highlighted");
  
    });
  });
  
  