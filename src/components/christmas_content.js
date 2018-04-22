
import React, { Component } from 'react';

class ChristmasContent extends Component {
    render () {
        this.count = 1
        const data = this.props.data;
    
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>

                <div className="content-wrapper">
                    Dear Santa, <br />this is your favorite {this.renderLabel(data.personalAdjective)} kid, {this.renderLabel(data.name)}.  How are you?  This is a letter to inform you that I've been very {this.renderLabel(data.yearAdjective)} this year. Therefore I have a list of items I would hope to find on Christmas morning. <br /> Quantity {this.renderLabel(data.quantityOne)} Item {this.renderLabel(data.itemOne)} <br /> Quantity {this.renderLabel(data.quantityTwo)}  Item {this.renderLabel(data.itemTwo)} <br /> Quantity {this.renderLabel(data.quantityThree)} Item {this.renderLabel(data.itemThree)} <br /> Quantity {this.renderLabel(data.quantityFour)} Item {this.renderLabel(data.itemFour)} <br />  Quantity {this.renderLabel(data.quantityFive)} Item {this.renderLabel(data.itemFive)} <br /> As you can see, I have very {this.renderLabel(data.tasteAdjective)} taste in Christmas gifts.  I would feel {this.renderLabel(data.emotion)} to find these things under the tree on Christmas morning! <br />  Your favorite kid, <br /> Name {this.renderLabel(data.name)}
                </div>
             </div>
            
        )
    }

    renderLabel = function(state) {
        return (
            <span>
                <label className="black-label">{this.count++}</label><b className="bold-text">{state}</b> 
            </span>
        )
    }.bind(this);
}

export default ChristmasContent;