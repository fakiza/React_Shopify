import { Route,createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Root from './components/root'
import NotFound from './components/NotFound';
import About from './components/routes/About/About';
import Contact from './components/routes/Contact/Contact';
import Blog from './components/routes/Blog/Blog';
import SignIn from './components/routes/MyAccount/SignIn';
import { createTheme,ThemeProvider } from '@mui/material';
import SignUp from './components/routes/MyAccount/SignUp';
import ForgotPassword from './components/routes/MyAccount/ForgotPassword';
import ResetPassword from './components/routes/MyAccount/resetPassword';
import Home from './components/routes/Home/Home';
import './App.css';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/routes/Cart/Cart';
import { CartProvider } from './components/routes/Cart/CartContext';
import { QuickViewProvider } from './components/Modal/QuickViewContext';
import ProductsList from './components/Products/ProductList';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route basename="/React_Shopify" element={<Root />} errorElement={<NotFound/>} >
//          <Route index path='/' element={<Home />} />
//          <Route path="/about" element={<About/>} />
//          <Route path="/contact" element={<Contact/>} />
//          <Route path="/blog" element={<Blog/>} />
//          <Route path="/cart" element={<Cart />} />
//          <Route path="/sign-in" element={<SignIn/>} />
//          <Route path="/sign-up" element={<SignUp/>} />
//          <Route path="/lost-password" element={<ForgotPassword/>} />
//          <Route path="/reset-password" element={<ResetPassword/>} />
//          <Route path="/productlist" element={<ProductsList/>} />
//          <Route path="/productDetails/:id" element={<ProductDetail/>} />
//          <Route path="/category/:categoryParam" element={<ProductsList/>} />
         
      
//     </Route>
//   )
// );


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<NotFound/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: 'cart', element: <Cart /> },
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'lost-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'productlist', element: <ProductsList /> },
      { path: 'productDetails/:id', element: <ProductDetail /> },
      { path: 'category/:categoryParam', element: <ProductsList /> },
    ],
  },
],
{basename:"/React_Shopify/"}
);

// Create the router using createRouterFromElement

const theme = createTheme({
  palette:{
    secondary:{
      main:'#d95a13ff',
      light:'#ffb74d',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'black', 
          color: 'white',
        },
        arrow: {
          color: 'black',
        },
      },
    },    
  },
})
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
      
       <CartProvider>
          <QuickViewProvider>
             <RouterProvider router={router} />
          </QuickViewProvider> 
       </CartProvider>
      
      </ThemeProvider>
    </>
  )
}

export default App;
