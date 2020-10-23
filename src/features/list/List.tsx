import React from 'react'
import styles from './List.module.css'
import { connect } from 'react-redux'
import { RootState } from '../../app/reducer'
import { fetchSearchThunk, fetchTrendingThunk } from './redux/actions'
import { ImageItem } from '../../api'
import ListItem from './ListItem'

type Props = {
  results: ImageItem[]
  query: string
}

type ConnectProps = {
  dispatch: any
}

class List extends React.Component<Props & ConnectProps> {
  componentDidMount() {
    if (this.props.query) {
      this.props.dispatch(
        fetchSearchThunk({ limit: 20, offset: 0, q: this.props.query }),
      )
    } else {
      this.props.dispatch(fetchTrendingThunk())
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps && prevProps.query !== this.props.query) {
      this.props.dispatch(
        fetchSearchThunk({ limit: 20, offset: 0, q: this.props.query }),
      )
    }
  }

  render() {
    const { results } = this.props
    return (
      <div className={styles.component}>
        {results.map((x) => (
          <ListItem {...x} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  results: state.list.results,
  query: state.search.query,
})
export default connect(mapStateToProps)(List)
