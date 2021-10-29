function addPlayers() {    
             player1 = document.getElementById("player1_input").value;
             player2 = document.getElementById("player2_input").value;   
        localStorage.setItem("Player 1's username:",player1);
        localStorage.setItem("Player 2's username:",player2);
      window.location = "game_page.html";
  
}