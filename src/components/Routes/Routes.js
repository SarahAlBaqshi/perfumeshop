import React from "react";
import { Route, Switch } from "react-router";

//Components
import PerfumeList from "../PerfumeList/PerfumeList";
import PerfumeDetail from "../PerfumeDetail";
import Home from "../Home";
import ShopList from "../ShopList/ShopList";
import ShopDetail from "../ShopDetail/ShopDetail";

//Stores
import perfumeStore from "../../stores/perfumeStore";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route path="/perfumes/:perfumeSlug">
        <PerfumeDetail />
      </Route>
      <Route path="/perfumes">
        <PerfumeList perfumes={perfumeStore.perfumes} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
