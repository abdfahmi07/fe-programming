import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import Detail from "./pages/movie/Detail";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import SearchMovie from "./pages/movie/SearchMovie";
import TopRatedMovie from "./pages/movie/TopRated";
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
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/movie/search/:query" element={<SearchMovie />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
