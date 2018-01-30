import fetch from 'isomorphic-unfetch'
import ChartistGraph from '../components/ChartistGraph';
import Layout from '../components/Layout'

/**
 * Example from here: https://gionkunz.github.io/chartist-js/examples.html#example-line-path-animation
 *
 */

const ajaxChartExample = ({data, options}) => (
  <Layout>
    <h4>Bitcoin price in euros.</h4>
    <ChartistGraph data={data} options={options} type="Line" />
  </Layout>
)

const getDate = (timestamp) => {
  const d = new Date(0);
  d.setUTCSeconds(timestamp)
  return `${d.getDate()}.${d.getMonth() + 1}`
}

ajaxChartExample.getInitialProps = async ({ req }) => {
  const res = await fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=EUR&limit=7&aggregate=3&e=CCCAGG')
  const json = await res.json()
  const times = json.Data.map(x => getDate(x.time))
  const values = json.Data.map(x => x.close)

  return {
    data: {
      labels: times,
      series: [values],
    },
    options: {
      low: 0,
      showArea: true,
      showPoint: false,
      fullWidth: true,
    } 
  }
}

export default ajaxChartExample