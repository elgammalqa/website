import {Component} from 'react'

class ScrollManager extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

export default ScrollManager
