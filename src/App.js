import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import DetailMovies from "./pages/movie/Detail";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import SearchMovie from "./pages/movie/SearchMovie";
import TopRatedMovie from "./pages/movie/TopRated";
import UpcomingMovie from "./pages/movie/Upcoming";
import AiringTodayTVShow from "./pages/tvshow/AiringToday";
import DetailTVShows from "./pages/tvshow/Detail";
import OnTheAirTVShow from "./pages/tvshow/OnTheAir";
import PopularTVShow from "./pages/tvshow/Popular";
import TopRatedTVShow from "./pages/tvshow/TopRated";
import theme from "./utils/constant/theme";

function App() {
  return (
    <>
      {/**
       * Membuat Routing
       * Bungkus Routing menggunakan Routes
       * Buat Routing menggunakan Route
       */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now-playing" element={<NowPlayingMovie />} />
            <Route path="/movie/top-rated" element={<TopRatedMovie />} />
            <Route path="/movie/upcoming" element={<UpcomingMovie />} />
            <Route path="/movie/:id" element={<DetailMovies />} />
            <Route path="/tv/popular" element={<PopularTVShow />} />
            <Route path="/tv/airing-today" element={<AiringTodayTVShow />} />
            <Route path="/tv/on-the-air" element={<OnTheAirTVShow />} />
            <Route path="/tv/top-rated" element={<TopRatedTVShow />} />
            <Route path="/tv/:id" element={<DetailTVShows />} />
            <Route path="/movie/search/:query" element={<SearchMovie />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
