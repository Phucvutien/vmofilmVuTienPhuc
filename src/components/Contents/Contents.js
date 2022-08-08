import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNetflixOriginals } from "../store/actions";
import MoviesRow from "./MoviesRow";


const movies= [
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4Ru1BwcAKWtpM345dWe8YgHf35V.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/47X1h91UUfhMxO42KV9fKoGAVMC.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xeg0UhMmzSalvyK7kvhTHcKXIf8.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/igmLgglembi9mZ2RYQRaGKigbvq.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8CXbCCGiJxi4AXPBQ1QPrehMIGG.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gkap4pWN722E0UK9WNL2vjGnAtw.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wNN9hJDV45BF2PiJQQVwBCiqLIl.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mDsFXzVJ7jbDwg5cpbVaSpH9S1o.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/peyxSGjFpLdoxfvojrYEiTqfEAu.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/eqje4QbKKCjwGjdZ87IDeRE80eZ.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nlwyzhUWSVpRQjUHKFFECPyKPOA.jpg"
    ];

function Contents(props){
    const dispatch = useDispatch();
    const {NetflixOriginals} = useSelector(state => state.InfoMovies);
    
    useEffect(() =>{
      dispatch(getNetflixOriginals);
    },[dispatch]);

    console.log(NetflixOriginals);

    return(
        <div>
        <MoviesRow movies={NetflixOriginals} title="Netfix Original" isNetfix={true}/>
        <MoviesRow movies={movies} title="Trending Movies"/>
        <MoviesRow movies={movies} title="Top Rated Movies"/>
        <MoviesRow movies={movies} title="Action Movies"/>
        <MoviesRow movies={movies} title="Comedy Movies"/>
        <MoviesRow movies={movies} title="Horror Movies"/>
        <MoviesRow movies={movies} title="Romance Movies"/>
        <MoviesRow movies={movies} title="Documentaries"/>
       
        </div>
    );
}

export default Contents;