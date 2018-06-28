var React = require('react')
var Clock = require('Clock')
var CountdownForm = require('CountdownForm')
var Controls = require('Controls')

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
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;    
            }
        }
    },
    // componentWillMount: function () {
    //     console.log('componentWillMount')
    // },
    // //hooks after the component output has been rendered to the DOM
    // componentDidMount: function () {
    //     console.log('componentDidMount')
    // },
    componentWillUnmount: function () {
        clearInterval(this.timer)
        this.timer = undefined;
    },
    startTimer: function () {
        //access whwn the user clicks pause
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                //if the new count is greater than 0, new count is 0
                count: newCount >= 0 ? newCount : 0
            });
            //when the count hits zero the countdown, the state is set to countdown status
            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'})
            }
        }, 1000);
    },
    handleStatusChange: function (newStatus) {
        this.setState({countdownStatus: newStatus});
    },  
    handleSetCountdown: function (seconds){
        this.setState({
            count: seconds,
            //tells the application to start the process
            countdownStatus: 'started'
        });
    },
    render: function (){
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        }

        return(
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
})

module.exports = Countdown;

