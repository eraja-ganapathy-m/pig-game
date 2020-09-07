/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlaye,gamePlaying,winningScore,lastDice;
 
init();

// roll button
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        // 1. random Number
    var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;
    // 2. display result
    document.querySelector('#dice-1').style.display='block';
    document.querySelector('#dice-2').style.display='block';
    
    document.querySelector('#dice-1').src='dice-'+dice1+'.png';
    document.querySelector('#dice-2').src='dice-'+dice2+'.png';
        
    // 3. update the result
        if(dice1!==1 || dice2!==1)
            {
                
                roundScore=dice1+dice2;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
            }
    
       
    else{
            nextPlayer();        
    }
       
}
    
});

// hold button
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
         // add current score to global score
    scores[activePlayer]+=roundScore;
    // update the ui
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        var input=document.querySelector('.final-score').value;
        var winningScore;
        if(input){
             winningScore=input;
        } else{
            winningScore=100;
        }
    // check if won
    if(scores[activePlayer]>=winningScore){
        document.querySelector('#dice-1').style.display='none';
        document.querySelector('#dice-2').style.display='none';
        document.querySelector('#name-'+activePlayer).textContent="Winner!"; document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
       gamePlaying=false;
    }
    else{
        // nextplayer   
             nextPlayer();
    }
    }
});
function nextPlayer(){
    activePlayer===0? activePlayer=1: activePlayer=0;
        roundScore=0;
    document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';
         document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
document.querySelector('.dice-1').style.display='none';
        document.querySelector('.dice-2').style.display='none';
}
 // new game button
document.querySelector('.btn-new').addEventListener('click', init);


function init(){
  
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying=true; 



document.querySelector('#dice-1').style.display='none';
document.querySelector('#dice-2').style.display='none';
    
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}