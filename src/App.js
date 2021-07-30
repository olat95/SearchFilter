import './App.css'
import JSONDATA from './MOCK_DATA.json'
import SearchBar from './components/SearchBar';

function App () {
  return (
    <div className='App'>
      <SearchBar placeholder='Enter the user name....' data={JSONDATA} />
    </div>
  );
}

export default App;

/* <input
            type="text"
            placeholder="Search...."
            onChange={(event) => {
               setSearchTerm(event.target.value);
            }}
         />
         {JSONDATA.filter((val) => {
            if (searchTerm === "") {
               return val;
            } else if (
               val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
               return val;
            }
         }).map((val, key) => {
            return (
               <div className="user" key={key}>
                  <p>{val.first_name}</p>
               </div>
            );
         })} */
