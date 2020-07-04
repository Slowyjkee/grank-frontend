import React, {Component} from 'react'
import {connect} from 'react-redux'
import {storeActions} from "../../../store/actions";
import {ReusableImage} from "../../../Components/Reusable/ReusableImage";
const mapStateToProps = state => ({
    categories: Object.values(state.CATEGORIES.data),
    loading:state.CATEGORIES.loading
});
 class CategoryContent  extends Component {
    componentDidMount() {
        storeActions()['categories']['GET_LIST'](this.props.dispatch)
    }



    render(){
        const categoryListArray = this.props.categories.map( el => {
           return (
               <ReusableImage link={el.image} width={250} height={250} title={el.name} objectFit={'cover'} overlay/>
           )
        });
        return (
            <div className='container vh-50 flex-align-center'>
                <div className="flex flex-between mt-10 flex-align-center flex-1">
                    {categoryListArray}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CategoryContent)
