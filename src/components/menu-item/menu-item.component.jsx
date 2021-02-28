import React from "react"; import './menu-item.styles.scss'

///functional component // props receive // js -> html {}
const MenuItem = ({ title, imageUrl, content }) => (


   <>
       <div className='item-conten'>
        <h1 className='title'>{title}</h1>
    <div style={{
             backgroundImage: `url(${imageUrl})`

         }} 
         className='menu-item'>
           
       
   </div> 
  <div className='content'>
            <span className="content">{content}</span>
  
       </div>  
       </div>
 </>

 )
 export default MenuItem;
 // // 1.CamelCasing  2 .js  3. directory.component.jsx->directoryComponent.js 4. Folder ->index.js-->by default call hota hai 5. styles.scss

