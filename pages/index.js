import Layout from '../components/layout.js'

const Index = () => (
    <div>
        <Layout>
        </Layout>
        <style jsx global>{`
      body {
        background: #ffff;
        font: 11px menlo;
        color: #fff;
      }
      .demo-card-wide > .mdl-card__title {
        color: #fff;
        height: 176px;
        background: url('../assets/graph.JPG') center / cover;
        }
      .demo-card-wide {
        color: #fff;
        }
      .material-icons {
        padding-right: 10px;
        }
    `}</style>
    </div>
)

export default Index