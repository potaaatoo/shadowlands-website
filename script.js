fetch("http://89.213.131.23:26479/api/server/players/online")
.then(response => response.json())
.then(data => {
    const players = data.players.map(player => player.name);
    document.getElementById("player-list").innerText = `Joueurs connectés : ${players.join(", ")}`;
})
.catch(error => console.error("Erreur :", error));
