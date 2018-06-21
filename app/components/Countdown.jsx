var React = require('react')
var Clock = require('Clock')
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
    getInitialState: function (){
        return {
            count: 0,
            //maintains the current status of the timer which could be started, stopped or pause
            countdownStatus: 'stopped'
        };
    },
    //lifecycle method gets called everytime your props or state updates
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },
    startTimer: function () {
        //access whwn the user clicks pause
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                //if the new count is greater than 0
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },
    handleSetCountdown: function (seconds){
        this.setState({
            count: seconds,
            //tells the application to start the process
            countdownStatus: 'started'
        });
    },
    render: function (){
        var {count} = this.state;

        return(
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        )
    }
})

module.exports = Countdown;

