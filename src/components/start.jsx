import React from "react";
import restaurants from '../sample-restaurants'
import '../css/style.css'

console.log(restaurants);

class Start extends React.Component {

    
    render() {

        return (
            <div className='restaurant_select'>
                <div className='restaurant_select_top'>
                    <div className='restaurant_select_top-header'>выбери ресторан</div>
                    <div className='arrow_picker'>
                        <div className='arrow_picker_up'></div>
                        <div className='arrow_picker_down'></div>
                        
                    </div>
                    <div className='restaurant_select_bottom'>
                        <ul>
                            { restaurants.map(item => <li>{item.title}</li> )}
                        </ul>
                    </div>
                </div>
                <button>Выбери ресторан</button>
            </div>
        )
    }
}

export default Start;