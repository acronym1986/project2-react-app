import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                 
                 <Link to = '/AddSearch'>AddSearch</Link>
                 <Link to = '/About'>About</Link>
                 <Link to = '/Vaccines'>Vaccines</Link>
                 <Link to = '/Cases'> Cases</Link>
                 <Link to = '/Login'> Login</Link>
                 <Link to = '/Definition'> Definition</Link>
            </div>
        )
    }
}

export default Nav;