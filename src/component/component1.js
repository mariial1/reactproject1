import React, {Component} from 'react';
import './style.css';

class Component1 extends Component {
    render() {
        let {item, cls} = this.props;

        return (
            <div className={cls}>{item.name} - {item.age} -{item.size.toString()}</div>
        );
    }
}

export default Component1;