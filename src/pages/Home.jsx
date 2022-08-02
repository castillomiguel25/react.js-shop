import React from "react";
import ProductList from "../containers/ProductList";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";
import Layout from '../containers/Layout';



const Home = ({ user }) => {
	const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Layout>
			
			<ProductList />
        </Layout>
      </AppContext.Provider>

     
    </>
  );
};

export default Home;
