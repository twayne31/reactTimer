var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Countdown = require('Countdown')

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    })

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started')
            //asynchronous 
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        })
        it('should never set count less than 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(1);

            
            //asynchronous 
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        })
    })
})
