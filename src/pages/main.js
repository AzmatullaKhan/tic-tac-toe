import './allPages.css'
import { Welcome } from './welcome'

export const Main=()=>{

    let player1Click=true
    let player2Click=false
    let firstClick=false
    let playArea=[
        [false, false, false],
        [false, false, false],
        [false, false, false],]

    const handleStartGame=()=>{
        document.getElementById('fake_game').className='hidden'
        document.getElementById('real_game').className='game-space-real'
        document.getElementById('span-1').innerText=''
        document.getElementById('span-2').innerText='Player 1 Turn'
        document.getElementById('startButton').innerHTML='Retry'

        if(document.getElementById('startButton').innerHTML==='Retry' && firstClick){

            firstClick=false;
            
            document.getElementById('oneOne11').src=require('../images/b.png')
            document.getElementById('oneTwo12').src=require('../images/b.png')
            document.getElementById('oneThree13').src=require('../images/b.png')
            document.getElementById('twoOne21').src=require('../images/b.png')
            document.getElementById('twoTwo22').src=require('../images/b.png')
            document.getElementById('twoThree23').src=require('../images/b.png')
            document.getElementById('threeOne31').src=require('../images/b.png')
            document.getElementById('threeTwo32').src=require('../images/b.png')
            document.getElementById('threeThree33').src=require('../images/b.png')

            player1Click=true
            player2Click=false

            playArea=[
                [false, false, false],
                [false, false, false],
                [false, false, false],]
        }
        
    }

    function winnerFunction(player){
        setTimeout(()=>{
            alert("🎉🎉🎉 "+player.slice(0, player.length-1)+" "+player[player.length-1]+" won the game 🎉🎉🎉")
            handleStartGame()
        },100)
    }

    const handleXOClick=(e)=>{
        let index=String(e.target.id)
        index=index.slice(index.length-2)
        
        let row_index=index[0]
        let col_index=index[1]

        if(player1Click && !playArea[row_index-1][col_index-1]){
            document.getElementById(e.target.id).src=require('../images/x.png')
            player1Click=false
            player2Click=true
            firstClick=true
            document.getElementById('span-2').innerText="Player 2's Turn"
            playArea[row_index-1][col_index-1]='Player1'
        }
        else if(player2Click && !playArea[row_index-1][col_index-1]){
            document.getElementById(e.target.id).src=require('../images/o.png')
            player1Click=true
            player2Click=false
            document.getElementById('span-2').innerText="Player 1's Turn"
            playArea[row_index-1][col_index-1]='Player2'
        }

        if(firstClick){
            // console.log((playArea[0][0]==='Player1' && playArea[0][1]==='Player1' && playArea[0][2]==='Player1') || (playArea[0][0]==='Player2' && playArea[0][1]==='Player2' && playArea[0][2]==='Player2'))
            if( (playArea[0][0]==='Player1' && playArea[0][1]==='Player1' && playArea[0][2]==='Player1') || 
                (playArea[0][0]==='Player2' && playArea[0][1]==='Player2' && playArea[0][2]==='Player2'))
                winnerFunction(playArea[0][0])

            else if((playArea[1][0]==="Player1" && playArea[1][1]==='Player1' && playArea[1][2]==='Player1') || 
                    (playArea[1][0]==="Player2" && playArea[1][1]==='Player2' && playArea[1][2]==='Player2'))
                winnerFunction(playArea[1][0])
            
            else if((playArea[2][0]==="Player1" && playArea[2][1]==='Player1' && playArea[2][2]==='Player1') || 
                    (playArea[2][0]==="Player2" && playArea[2][1]==='Player2' && playArea[2][2]==='Player2'))
                winnerFunction(playArea[2][0])
            
            else if((playArea[0][0]==="Player1" && playArea[1][1]==='Player1' && playArea[2][2]==='Player1') || 
                    (playArea[0][0]==="Player2" && playArea[1][1]==='Player2' && playArea[2][2]==='Player2'))
                winnerFunction(playArea[0][0])
            
            else if((playArea[2][0]==="Player1" && playArea[1][1]==='Player1' && playArea[0][2]==='Player1') || 
                    (playArea[2][0]==="Player2" && playArea[1][1]==='Player2' && playArea[0][2]==='Player2'))
                winnerFunction(playArea[2][0])
            
            else if((playArea[0][0]==="Player1" && playArea[1][0]==='Player1' && playArea[2][0]==='Player1') || 
                    (playArea[0][0]==="Player2" && playArea[1][0]==='Player2' && playArea[2][0]==='Player2'))
                winnerFunction(playArea[0][0])
            
            else if((playArea[0][1]==="Player1" && playArea[1][1]==='Player1' && playArea[2][1]==='Player1') || 
                    (playArea[0][1]==="Player2" && playArea[1][1]==='Player2' && playArea[2][1]==='Player2'))
                winnerFunction(playArea[0][1])
            
            else if((playArea[0][2]==="Player1" && playArea[1][2]==='Player1' && playArea[2][2]==='Player1') || 
                    (playArea[0][2]==="Player2" && playArea[1][2]==='Player2' && playArea[2][2]==='Player2'))
                winnerFunction(playArea[0][2])
        }
    }

    return(
        <div className='main-background'>

            <Welcome />

            <div className='game-section'>
                <div className='game-turns'>
                    <span id='span-1' style={{textDecoration:"none"}}>1. Ensure to have two players before start.</span>
                    <span id='span-2' style={{textDecoration:"none"}}>2. Make sure to get each player one turn at one time.</span>
                    <button id='startButton' onClick={handleStartGame}>Start Game</button>
                </div>
                <div className='game-space-fake' id='fake_game'></div>
                <div className='hidden' id='real_game'>
                    <img src={require('../images/b.png')} className='each-img' id='oneOne11' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='oneTwo12' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='oneThree13' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='twoOne21' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='twoTwo22' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='twoThree23' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='threeOne31' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='threeTwo32' onClick={handleXOClick} alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' id='threeThree33' onClick={handleXOClick} alt='b-img'/>
                </div>
            </div>
        
        </div>
    )
}



// 145*140