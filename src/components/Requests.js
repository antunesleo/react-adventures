import React from 'react';
import axios from 'axios';


class Requests extends React.Component {

    componentDidMount() {
        axios.get('http://127.0.0.1:5324/api/healthcheck')
          .then(res => {
            console.log(res.data);
          })
      }

    render() {
        return (
            <div>
                What
            </div>
        );
    }

}

export default Requests;