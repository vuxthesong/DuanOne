import Header from '~/Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Songs } from './Context';
import Data from '~/assets/data/songs.json';
import { useState } from 'react';

function App() {
    const [song, setsong] = useState(Data[0]);

    const handleSong = (idSong) => {
        const song = Data.find((song) => song.id === idSong);
        setsong(song);

        if (!song) setsong(Data[0]);
        else setsong(song);
    };

    return (
        <Songs.Provider value={{ Data, song, handleSong }}>
            <Header />
            <Main />
            <Footer />
        </Songs.Provider>
    );
}

export default App;
