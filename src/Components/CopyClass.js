import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button'

//  my css's
import '../Library/Styles/Text.css'
import '../Library/Styles/Containers.css'
import '../Library/Styles/Images.css'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.password,
      copied: false
    }
  }

  passUpdate() {
    this.setState(
      {
        value: this.props.password,
        copied: false
      }
    )
  }

  render() {
    return (
      <div className='copy_root'>
        <p1 className='p2' >New password: </p1>
        <input
          value={this.props.password}
          className='copy_input'
          onChange={()=>{}}
        // onChange={({ target: { value } }) => {this.setState({ value, copied: false })}}
        />
        <CopyToClipboard text={this.props.password}
          onCopy={() => {
            this.setState({ copied: true })
          }}>
          <Button>
            <img src={this.props.copy} />
          </Button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}

      </div>
    );
  }
}