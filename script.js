 result = '';

    let scores = JSON.parse(localStorage.getItem('score')) || {
        Wins: 0,
        Losses: 0,
        Ties: 0
      };

    function updateScore(){document.querySelector('.js-score').innerHTML = `Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;}

    function updateresult(result = ''){
      document.querySelector('.js-result').innerHTML = result;
    }

    function updateMoves(playerMove = '', computerMove = ''){
      document.querySelector('.js-moves').innerHTML = `you <img src="../images/${playerMove.toLowerCase()}-emoji.png" class="move-icon"> Computer <img src="../images/${computerMove.toLowerCase()}-emoji.png" class="move-icon">`;
    }

    function computerChoice(){
      const randomNo = Math.random();

      if(randomNo >= 0 && randomNo < (1/3)){
        return 'Rock';
      }
      else if(randomNo >= (1/3) && randomNo < (2/3)){
        return 'Paper';
      }
      else{
        return 'Scissor';
      }
    }

    function playGame(playerMove, computerMove){
      if(playerMove === computerMove){
        result = 'Its a Tie!';
        scores.Ties += 1;
      }
      
      if(playerMove === 'Rock'){
        if(computerMove === 'Paper'){
          result = 'You Lose!';
          scores.Losses += 1;
        }
        else if(computerMove === 'Scissor'){
          result = 'You Win!';
          scores.Wins += 1;
        }
      }

      if(playerMove === 'Paper'){
        if(computerMove === 'Scissor'){
          result = 'You Lose!';
          scores.Losses += 1;
        }
        else if(computerMove === 'Rock'){
          result = 'You Win!';
          scores.Wins += 1;
        }
      }

      if(playerMove === 'Scissor'){
        if(computerMove === 'Rock'){
          result = 'You Lose!';
          scores.Losses += 1;
        }
        else if(computerMove === 'Paper'){
          result = 'You Win!';
          scores.Wins += 1;
        }
      }
      localStorage.setItem('score', JSON.stringify(scores));

      
    }

      updateScore('rock','rock');
      updateMoves();
      updateresult();
      
