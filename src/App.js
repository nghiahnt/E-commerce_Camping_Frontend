import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import routes from './routes';
import { DefaultLayout } from './layouts';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        // Handle Layout here
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App;