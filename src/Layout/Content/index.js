import React, {Component} from 'react'
import CategoryContent from "./Category";
import ProductContent from "./Product";

export default class Content  extends Component {

    render(){
        const defaultContentSectionHeight = {height: '50vh'};
        return (
            <div className="content-section relative">
                <CategoryContent style={defaultContentSectionHeight} />
                <ProductContent style={defaultContentSectionHeight}/>
            </div>
        )
    }
}
