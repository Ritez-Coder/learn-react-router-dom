import React from 'react'

function Home() {
     return (
          <div className='container home'>
               <section>
                    <h2 className='text-center'>Important Things in React Router</h2>
                    <ol>
                         <li>Route Component: The Route component is used to define the routing paths and the components to render when a path matches. You can use Route with the exact attribute to match an exact path or use parameterized path with the path attribute.</li>

                         <li>
                         Routes Component: The Switch component is used to wrap around the Route components and ensures that only one Route component is rendered at a time. It helps to avoid rendering multiple components when multiple routes match the current URL.
                         </li>

                         <li>
                         Link Component: The Link component is used to create links between different pages in your application. It helps to navigate between pages without refreshing the page.
                         </li>

                         <li>
                         useHistory Hook: The useHistory hook provides access to the browser history object. It allows you to navigate programmatically and also provides methods to go back and forward in the history.
                         </li>

                         <li>
                         useParams Hook: The useParams hook is used to retrieve parameterized data from the URL. You can use this hook to access dynamic data from the URL, such as product IDs or usernames.
                         </li>

                         <li>
                         Redirect Component: The Redirect component is used to redirect the user to a different page. It can be used to redirect the user based on conditions, such as authentication status.
                         </li>

                         <li>
                         Nested Routes: React Router DOM supports nested routes, which allow you to define routes within routes. This is useful for organizing your application and managing complex routes.
                         </li>
                    </ol>
               </section>
          </div>
     )
}

export default Home
