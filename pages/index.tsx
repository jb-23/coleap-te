import Layout from "../components/Layout"
import Items from "../components/items"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1></h1>
    <div>
      <div className="min-w-min bg-purple-100 p-1">
      <Items />
      </div>
    </div>
  </Layout>
)

export default IndexPage
