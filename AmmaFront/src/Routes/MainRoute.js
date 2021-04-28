import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import rota from "./../Helpers/Const/Links";
import Menu from "./../Components/MenuTopo/Menu";
// import Perfil from "./../Components/Perfil/Perfil";
import Modal from "./../Components/Modal/Index";
import Login from "./../Pages/Login/Login";
import Adicionar from "./../Pages/Adicionar/Adicionar";
import Loading from "./../Components/Carregando/Loading";
import pageNotFound from "./../Pages/NotFound404/pageNotFound";
import Dashboard from "./../Pages/Dashboard/Dashboard";
import CriarConta from "./../Pages/CriarConta/CriarConta";
import Gerenciar from "./../Pages/Gerenciar/Index";
//import { useHistory } from "react-router-dom";

const MainRoute = () => {
  //const history = useHistory();

  const verificarUsuarioLogado = () => {
    var usuario = localStorage.getItem("usuario");
    if (usuario === null) {
      window.history.pushState("", "", "/login");
    //  history.push("/login");
    }
  };

  return (
    <BrowserRouter>
      <Loading />
      <Modal/>
      <Menu />
      {/* <Perfil /> */}
      <Switch>
        {verificarUsuarioLogado()}
        <Route path="/" component={Dashboard} exact />
        <Route path={rota.inicio} component={Dashboard} />
        <Route path={rota.login} component={Login} />
        <Route path={rota.Sugestões} component={Adicionar} />
        <Route path={rota.novaConta} component={CriarConta} />
        <Route path={rota.Gerenciar} component={Gerenciar} />
        <Route path={rota.pageNotFound} component={pageNotFound} />
        <Redirect to={rota.pageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoute;
