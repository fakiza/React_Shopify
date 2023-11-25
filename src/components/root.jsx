import {Outlet } from 'react-router-dom';
import Header from './routes/Header/Header';
import Footer from './routes/Footer/Footer';
const Root = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
export default Root