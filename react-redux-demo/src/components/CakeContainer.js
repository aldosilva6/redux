import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakesProp}</h2>
            <button onClick={props.buyCakeProp}>Buy Cake</button>
        </div>
    )
}

//To access the redux state
//The state of redux store is map to component props
const mapStateToProps = state => {
    return {
        numOfCakesProp: state.cake.numOfCakes
    }
}

//Map our dispatch of an action creator to a prop in our component
//Allows action creator to props in our compoment
const mapDispatchToProps = dispatch => {
    return {
        buyCakeProp: () => dispatch(buyCake())
    }
}

//All is possible because the connect function from react redux
//It connect the react component CakeContainer to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)