// NOTHING TO SEE HERE
// go look inside the folders
import ReactDOM from 'react-dom';

import Queue from './Queue';
import Tree from './Tree';

import menuData from './data.json';
import Item from './components/Item';

const selectedItems = [];
const onSelected = (id) => {
  console.log('>>>', id);
}

const displayItems = menuData.items
  .map(item => (<Item key={item.id} onItemClick={(id) => onSelected(id)} item={item} top />));

const App = (props) => (
  <div>
    {displayItems}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// var q = new Queue();
// for (var i=0; i<10; i++) {
//   console.log('queuing:', i);
//   q.enqueue(i);
// }

// console.log('\r\n********* THE QUEUE *********');
// console.log('SIZE:', q.size());
// console.log('CONTENTS:', JSON.stringify(q._storage, null, 2));
// console.log('*****************************\r\n');

// var size = q.size();
// for(var j=0; j<size; j++) {
//   console.log('dequeued:', q.dequeue())
// }
