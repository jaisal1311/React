import React from 'react'
import RenderFeaturedCard from './RenderFeaturedCard'

function Home(props) {
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md m-1">
                    <RenderFeaturedCard item = {props.dish} />
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderFeaturedCard item = {props.promotion} />
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderFeaturedCard item = {props.leader} />
                </div>
            </div>
        </div>
    )
}

export default Home;