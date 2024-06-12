import './allPages.css'
import { Welcome } from './welcome'

export const Main=()=>{
    return(
        <div className='main-background'>

            <Welcome />

            <div className='game-section'>
                <div className='game-turns'>
                    <span>1. Ensure to have two players before start</span>
                    <span>2. Make sure to get each player one turn at one time</span>
                </div>
                <div className='game-space'>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                    <img src={require('../images/b.png')} className='each-img' alt='b-img'/>
                </div>
            </div>
        
        </div>
    )
}