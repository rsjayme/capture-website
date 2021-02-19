import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import OurWork from '../pages/OurWork';
import MovieDetail from '../pages/MovieDetail';

const Routes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={AboutUs} />
        <Route path="/work" exact component={OurWork} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/work/:id" component={MovieDetail} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
