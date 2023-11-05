import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import routes from './routes';
import { DefaultLayout } from './layouts';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        // Handle Layout here
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout
                                        Page={<Page />}
                                    />
                                }
                            />
                        );
                    })}
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
