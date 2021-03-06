/* DishDetail */

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
    
    function RenderDish({dish}) {

        if (dish != null) {
            return(
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        
        
        if (dish != null) {
            
            const coms = dish.comments.map((com) => {
                
                return (
                    <ul key={com.id} className='list-unstyled'>
                        <li>
                            {com.comment}
                        </li>
                        <li>
                            -- {com.author}, { }
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short', day: '2-digit', year: 'numeric' 
                                }).format(new Date(com.date))
                            }
                        </li>
                    </ul>
                );
            });
            
            return (
                <div className='p-3'>
                    <h4>Comments</h4>
                    {coms}
                </div>
            );
        } else {
            return (
                <div>hello</div>
            );
        }
    }

    const Dishdetail = (props) => {
        return(
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish = {props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments dish = {props.dish} />
                </div>
            </div>
        );
    }

export default Dishdetail;