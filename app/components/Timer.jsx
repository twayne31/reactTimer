var React = require('react')
var Clock = require('Clock')
var Controls = require('Controls')

var Timer = React.createClass({
    getInitialState: function () {
      return {
          count: 0,
          timerStatus: 'stopped'
      }     
    },
    componentDidUpdate: function (prevProps, prevState) {
        //if the new timer status is different than the new one
        if (this.state.timerStatus !== prevState.timerStatus){
            switch (this.state.timerStatus){
                case 'started':
                    this.handleStart();
                    break
                case 'stopped':
                    this.setState({count: 0})
                case 'paused':
                    clearInterval(this.timer)
                    break
            }
        }
    },
    //clear the timer as the timer component gets removed from the screen
    componentWillUnmount: function () {
        clearInterval(this.timer)
    },
    handleStart: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    handleStatusChange: function (newTimerStatus){
        console.log(newTimerStatus);
        this.setState({timerStatus: newTimerStatus})
    },
    render: function () {
        var {count, timerStatus} = this.state;
        
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
}) 
module.exports = Timer;