import Header from '~/Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Songs } from './Context';
import Data from '~/assets/data/songs.json';

function App() {
    return (
        <Songs.Provider value={Data}>
            <Header />
            <Main />
            <Footer />
        </Songs.Provider>
    );
}

export default App;
