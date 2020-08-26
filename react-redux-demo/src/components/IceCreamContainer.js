import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCreamProp}>Buy IceCream</button>
        </div>
    )
}

//To access the redux state
//The state of redux store is map to component props
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

//Map our dispatch of an action creator to a prop in our component
//Allows action creator to props in our compoment
const mapDispatchToProps = dispatch => {
    return {
        buyIceCreamProp: () => dispatch(buyIceCream())
    }
}

//All is possible because the connect function from react redux
//It connect the react component IceCreamContainer to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)