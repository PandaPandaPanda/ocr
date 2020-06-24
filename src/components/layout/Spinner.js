import React from 'react'
import spinner from "./spinner.gif"

const Spinner = () => {
      return (
            <React.Fragment>
                  <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}}></img>
            </React.Fragment>
      )
}

export default Spinner;