import React, {Component} from 'react';
import {cinderellas} from "./CinderellaProject/cinderella";
import Component1 from "./component/component1";

class App extends Component {
  render() {

      return (
        <div>
            {
                cinderellas.map((cinderella, index) => {
                   let clsx = index % 2 ? 'two' : 'one';
                    return (<Component1
                       item={cinderella}
                       cls={clsx}
                       key={index}/>);
                })
            }
        </div>
    );
  }
}

export default App;
