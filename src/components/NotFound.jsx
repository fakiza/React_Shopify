import { useRouteError } from 'react-router-dom';

const NotFound = () => {
const error = useRouteError();
  return (
    <div id="error-page" className="flex flex-col justify-center h-screen align-middle" >
      <div className="text-center " >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}

export default NotFound;