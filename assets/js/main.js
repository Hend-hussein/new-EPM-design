document.getElementById('gobailRegion').addEventListener("click", (e) =>{
  const mapRegionInfo = document.getElementById('mapRegionInfo');
  mapRegionInfo.classList.toggle('show');
  e.target.classList.toggle('active');
})