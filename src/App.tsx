import {
  createHashRouter,
  LoaderFunctionArgs,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import { ErrorBoundary } from "react-error-boundary";
// import ErrorPage from "./routes/ErrorPage";
import { RootErrorBoundary } from "./routes/RootErrorBoundry";
import { Fallback } from "./routes/Fallback";
import Project from "./components/Project";

// GITHUB pages doesn't let you use createBrowserRouter as it doesn't always return index.html
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Outlet />,
        errorElement: <RootErrorBoundary />,
        children: [
          {
            path: "/projects/:id",
            element: <Project />,
            loader: ({params}: LoaderFunctionArgs) => {
              return { id: params.id }
            },    
          },
        ]
      },
    ],
    // children: [
    //   {
    //     path: "/projects",
    //     loader: async function loader() {
    //       const queryReference = loadQuery(environment, ProjectsListQuery, {})
    //       return { queryReference };
    //     },
    //     element: <React.Suspense><ProjectsList /></React.Suspense>,
    //   },
    //   {
    //     path: "/projects/:id",
    //     loader: async function loader({ params }) {
    //       const queryReference = loadQuery(environment, ProjectQuery, {id: params.id})
    //       return { queryReference };
    //     },
    //     ErrorBoundary: ErrorBoundary,
    //     element: <Project />
    //   },
    // ]
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <RouterProvider router={router} fallbackElement={<Fallback />} />
      </ErrorBoundary>
    </>
  )   
}

export default App
