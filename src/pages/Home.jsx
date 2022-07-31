import React from "react";
import ProductList from "../containers/ProductList";
import Admi from "../components/Admi";
import Users from "../components/Users";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";
import Layout from '../containers/Layout';



const Home = ({ user }) => {
	const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Layout>
			{user.rol === "admi" ? <Admi /> : <Users />}
			<ProductList />
        </Layout>
      </AppContext.Provider>

     
    </>
  );
};

export default Home;
