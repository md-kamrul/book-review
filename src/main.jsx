import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root';
import Home from './components/home/Home';
import ListedBooks from './components/listed books/ListedBooks';
import PagesToRead from './components/pages to read/PagesToRead';
import ErrorPage from './components/error page/ErrorPage';
import BookDetails from './components/book details/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed_books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages_to_read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book_details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../../../public/books.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
