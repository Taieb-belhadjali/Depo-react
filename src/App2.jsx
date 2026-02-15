import React from 'react';
import ListManager from './Components/ListManager';

function App(){
    return(
        <div>
            <ListManager initialItems={["React","Angular","VueJs"]}
            placeholder="Add new item"
            />
        </div>
    );
}
export default App;