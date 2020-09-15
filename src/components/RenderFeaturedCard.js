import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

function RenderFeaturedCard({item}) {
    return(
        <div className = "container">
            <Card>
                <CardImg src = {item.image} alt = {item.name}>
                </CardImg>
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null }
                    <CardText>
                        {item.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default RenderFeaturedCard;