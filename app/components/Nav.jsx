var React = require("react")
var {Link, IndexLink} = require('react-router')

var Nav = () => {
    return (
        <div>
            <div className="navCss top-bar">
                <div className="top-bar-left">
                    <ul className="menu ">
                        <li className="menu-text">React Time App</li>
                        <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink> 
                        </li>
                        <li>
                        <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link> 
                        </li>
                    </ul>
                </div>
                    <div className="top-bar-right ">
                        <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="https://github.com/twayne31" target="_blank">Taylor Hampton</a>
                        </li>
                        </ul>
                </div>
            </div> 
        </div>
    )
}

module.exports = Nav;