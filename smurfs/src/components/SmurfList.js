import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurf } from '../actions'

 class SmurfList extends Component {
     
    componentDidMount(){
        this.props.getSmurf()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newSmurf){
          this.props.smurfs.unshift(nextProps.newSmurf);
        }
      }

    render() {
        const smurfItems = this.props.smurfs.map((smurf)=>(
            <div key={smurf.id}>
                <h3>{smurf.name}</h3>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
            </div>
        ))
        return (
            <div>
                {smurfItems}                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs:state.smurfs,
    newSmurf: state.smurfs.smurf
})

export default connect(mapStateToProps,{getSmurf})(SmurfList)
