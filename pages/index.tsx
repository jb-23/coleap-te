import Layout from "../components/Layout"
import Items from "../components/items"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
    <div>
    <Items />
    </div>
  </Layout>
)

export default IndexPage
