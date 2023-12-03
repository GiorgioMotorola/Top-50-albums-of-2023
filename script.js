const container = document.getElementById("container");

fetch("albums.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const listItem = document.createElement("div");
      listItem.className = "section";
      listItem.innerHTML = `
      <div id="number-artist-album" style="color: #000000; margin-top: 50px;">${item.id}. ${item.name} &#183; ${item.album}</div>
      <div id="genre">${item.genre}</div>
      <img style="margin-bottom:50px"; src="${item.img}">
      <div id="divide"></div>
      <div id="sounds-like">SOUNDS LIKE: ${item.sounds}</div>
      <div id=pairs-with>PAIRS WELL WITH: ${item.pairs}</div>
      <div id="favorite-track">FAVORITE TRACK: "${item.track}"</div>
      <div id="divide"></div>

      
      <iframe id="spotify-iframe" style="border-radius:12px" src="${item.spotify}"frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      
  `;
      container.appendChild(listItem);
    });
  });
