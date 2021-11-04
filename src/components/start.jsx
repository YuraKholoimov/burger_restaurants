import React from "react";
import restaurants from '../sample-restaurants'
import '../css/style.css'

console.log(restaurants);

class Start extends React.Component {
    state = {
        display: false,
        title: '',
        url: ''

    };
    
    displayList = () => {
        const {display} = this.state;
        this.setState({display: !display})
    }

    getParam = (restaurant) => {
        const {url, title} = restaurant;
        this.setState({url, title, display: false})
        
    }

    goToRest = () => {
        const {url} = this.state;
        this.props.history.push(`/${url}`)
    }

    render() {

        return (
            <div className='restaurant_select'>
                <div className='restaurant_select_top'>
                    <div 
                        onClick={this.displayList}
                        className='restaurant_select_top-header font-effect-outline'
                        >
                        { this.state.title
                        ? this.state.title
                        : "Выбери ресторан"
                        }
                    </div>
                    <div className='arrow_picker'>
                        <div className='arrow_picker-up'></div>
                        <div className='arrow_picker-down'></div>
                        
                    </div>
                    {this.state.display && <div className='restaurant_select_bottom'>
                        <ul>
                            { restaurants.map(item => <li key={item.id} 
                            onClick={() => this.getParam(item)}
                            >{item.title}</li> )}
                        </ul>
                    </div>}
                    
                </div>
                { this.state.url && !this.state.display && <button onClick={this.goToRest}>Перейти в ресторан</button> }
            </div>
        )
    }
}

export default Start;