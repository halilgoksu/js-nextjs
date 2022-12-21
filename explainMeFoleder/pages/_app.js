import "../styles/globals.css";
import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
      {/* -burdalki layoutun {chilren} ile ayni sey 
      hangi component render edilirse ona childrern olur  */}

    </Layout>
  );
}

export default MyApp;
