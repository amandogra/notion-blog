// import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

const MyApp = ({ Component, pageProps }) => (
  <div className="flex flex-col min-h-screen">
    <Component {...pageProps} />
    <Footer />
  </div>
)

export default MyApp
