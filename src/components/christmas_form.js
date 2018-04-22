import React, { Component } from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

import ChristmasContent from './christmas_content';

function ChristmasInput(props) {
    return (
        <Col md="6" className="input-wrapper">
            <Row>
                <Col md="3">
                    <label className="green-label">{props.index}</label>
                </Col>
                <Col md="9">
                    <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange} />
                </Col>
            </Row>
            <Row>
                <Col md="3"></Col>
                <Col md="9">
                    <div className="input-description">{props.placeholder}</div>
                </Col>
            </Row>
        </Col>
    );
}

class ChristmasForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            completedForm: false,
            personalAdjective: '',
            name: '',
            yearAdjective: '',
            quantityOne: '',
            itemOne: '',
            quantityTwo: '',
            itemTwo: '',
            quantityThree: '',
            itemThree: '',
            quantityFour: '',
            itemFour: '',
            quantityFive: '',
            itemFive: '',
            tasteAdjective: '',
            emotion: '',
           
        }

    }

    handleChange = function(props) {
        return function(event) {
            // console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
    }

    handleSubmit = function(event) {
        this.setState({completedForm: true});
        event.preventDefault();
    }.bind(this);

    handleClick = function() {
        this.setState({
            completedForm: false,
            personalAdjective: '',
            name: '',
            yearAdjective: '',
            quantityOne: '',
            itemOne: '',
            quantityTwo: '',
            itemTwo: '',
            quantityThree: '',
            itemThree: '',
            quantityFour: '',
            itemFour: '',
            quantityFive: '',
            itemFive: '',
            tasteAdjective: '',
            emotion: '',
     
        });
    }.bind(this)

    renderButton = function() {
        if(this.state.completedForm) {
            return <a className="clear-button" onClick={this.handleClick}>Clear Letter</a>
        }
        return <input type="submit" className="generate-button" value="Generate Letter" /> 
    }

    render() {

        this.inputData = [
            {placeholder: 'Personal Adjective', prop: 'personalAdjective', state: this.state.personalAdjective},
            {placeholder: 'Name', prop: 'name', state: this.state.name},
            {placeholder: 'Year Adjective', prop: 'yearAdjective', state: this.state.yearAdjective},

            {placeholder: 'Quantity', prop: 'quantityOne', state: this.state.quantityOne},
            {placeholder: 'Item One', prop: 'itemOne', state: this.state.itemOne},
            {placeholder: 'Quantity Two', prop: 'quantityTwo', state: this.state.quantityTwo},
            {placeholder: 'Item Two', prop: 'itemTwo', state: this.state.itemTwo},
            {placeholder: 'Quantity Three', prop: 'quantityThree', state: this.state.quantityThree},
            {placeholder: 'Item Three', prop: 'itemThree', state: this.state.itemThree},
            {placeholder: 'Quantity Four', prop: 'quantityFour', state: this.state.quantityFour},
            {placeholder: 'Item Four', prop: 'itemFour', state: this.state.itemFour},
            {placeholder: 'Quantity Five', prop: 'quantityFive', state: this.state.quantityFive},
            {placeholder: 'Item Five', prop: 'itemFive', state: this.state.itemFive},

            {placeholder: 'Taste Adjective', prop: 'tasteAdjective', state: this.state.tasteAdjective},
            {placeholder: 'Emotion', prop: 'emotion', state: this.state.emotion},
            {placeholder: 'name', prop: 'nameTwo', state: this.state.name},
        ]

      return (
          <div className="card-wrapper">
            <Card>
                <form onSubmit={this.handleSubmit} id="christmas-form">
                    <Row style={{textAlign: 'center', color: 'white'}}>
                        {
                            _.map(this.inputData, (data, indexKey) => {
                                return <ChristmasInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                            })
                        }
                    </Row>
                    <Row>
                        <Col md="12" className="button-wrapper">
                            {this.renderButton()}
                        </Col>
                    </Row>
                </form>
                <ChristmasContent data={this.state}/>
            </Card>
          </div>
        
      );
    }
}

export default ChristmasForm;
