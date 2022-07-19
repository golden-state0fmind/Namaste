import { useEffect } from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Navbar from '../components/utilities/NavBar';
import Footer from '../components/utilities/Footer';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthContextProvider } from '../context/AuthContext';
import { ThemeContextProvider } from '../context/ThemeContext';

const noAuthRequired = ['/', '/signin', '/signup'];

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, []);
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <main className={styles.main}>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            )}
        </main>
        <Footer />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export default MyApp;
