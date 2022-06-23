import React from 'react';
import Button from './Button';
import CalculatorTitle from './calculatorTitle';
import Output from './Output';

export default class Calculator extends React.Component{
    constructor(){
        super()
        this.state = {
            question : '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    // our method to handle all click events from our buttons
   handleClick(e){
       const value = e.target.value
       switch(value){
           case '=' : {
            if (this.state.question!=='')
            {
                var ans='';
                  try
                    {
                        ans = (this.state.question);
                    }
                    catch(err)
                    {
                        this.setState({answer: "Math Error"});
                    }
                    if (ans===undefined)
                        this.setState({answer: "Math Error"});
       
                    // update answer in our state.
                    else
                        this.setState({ answer: ans , question: ''});
                    break;
           }
           break
       }
       case 'Clear':{
        this.setState({ question: '', answer: '' });
        break;
       }
       case 'Delete':{
        var str = this.state.question;
        str = str.substr(0,str.length-1);
        this.setState({question: str});
        break;
       }
       default: {
        var stsr = this.state.question;
        // for every other command, update the answer in the state
        this.setState({ question: stsr += value})
        break;
      }
   }
}
    
    render(){
        return(
            <>
            <div>
                <CalculatorTitle value="calci" />
            </div>
            <div>
                <Output value/>
                <div>
                    <Button label={'Clear'} handleClick = {this.handleClick} />
                    <Button label={'Delete'} handleClick = {this.handleClick} />
                    <Button label={'.'}  handleClick = {this.handleClick} />
                    <Button label={'/'}  handleClick = {this.handleClick} />
                </div>
                <div>
                <Button label={'7'} handleClick = {this.handleClick} />
                <Button label={'8'} handleClick = {this.handleClick} />
                <Button label={'9'} handleClick = {this.handleClick} />
                <Button label={'*'}  handleClick = {this.handleClick} />
                </div>
                <div>
                <Button label={'4'} handleClick = {this.handleClick} />
                <Button label={'5'} handleClick = {this.handleClick} />
                <Button label={'6'} handleClick = {this.handleClick} />
                <Button label={'-'} handleClick = {this.handleClick} />
                </div>
                <div>
                <Button label={'1'}  handleClick = {this.handleClick} />
                <Button label={'2'}  handleClick = {this.handleClick} />
                <Button label={'3'}  handleClick = {this.handleClick} />
                <Button label={'+'} handleClick = {this.handleClick} />
                </div>
                <div>
                <Button label={'0'} handleClick = {this.handleClick} />
                <Button label={'='}  handleClick = {this.handleClick} />
                </div>
            </div>
            </>
        )
    }
}