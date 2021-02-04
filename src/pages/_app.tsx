import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

export default ({ Component, pageProps }) => (
  <div className="wrapper">
    <Component {...pageProps} />
    <Footer />
  </div>
)
