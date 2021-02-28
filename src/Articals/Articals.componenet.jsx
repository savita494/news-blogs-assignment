import React from 'react';
import Articals from './Articals.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

//class component as we need to deal with data/state
class ArticalsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections:Artical_DATA
        }
    }
  
    render(){
        const {collections} = this.state;
        return (<div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
            )
    }
}

export default ShopPage;