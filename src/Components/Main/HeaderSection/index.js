import React, {Component} from 'react'
import background from '../../../Assets/images/Background.jpg'
export default class HeaderSection  extends Component {
    render(){
        const sectionBackground = {
            backgroundImage:`url(${background})`,
            height:'100vh',
            width:'100%',
            backgroundSize:'cover',
            backgroundPosition:'center'
        };
        return (
            <>
                <div className=" header-section relative" style={sectionBackground}>
                    <div className="header-caption">
                        <span>Интернет-магазин по продаже семян газонных трав ведущих мировых производителей DLF, Barenbrug, Jacklind Seed, DSV и других.</span>
                    </div>
                    <div className='overlay'/>
                </div>

            </>

        )
    }
}
