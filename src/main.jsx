import React from 'react'
import { ToastContainer } from 'react-toastify';
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
import Contact from './components/contact/Contact';
import CompanyPolicy from './components/company policy/CompanyPolicy';

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
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/company_policy",
        element: <CompanyPolicy></CompanyPolicy>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
