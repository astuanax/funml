import { curry } from 'fun.js'

const mapReduce = curry((m, r) => (x, y) => r(x, m(y)))
export default mapReduce
