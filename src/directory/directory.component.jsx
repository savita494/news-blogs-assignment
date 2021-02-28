
import React from "react";
 import MenuItem from "../components/menu-item/menu-item.component";

// //class component as we need to store the state value
class Directory extends React.Component {
  constructor() {
    super();
     this.state = {
      sections: [
        {
          title: "Bollywood",
         // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
           imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',

            content:'After early Indian experiments in silent film, in 1934 Bombay Talkies, launched by Himansu Rai, spearheaded the growth of Indian cinema. Over the years, several classic genres emerged from Bollywood: the historical epic, notably Mughal-e-Azam (1960); the curry western, such as Sholay (1975); the courtesan film, such as Pakeezah (1972), which highlights stunning cinematography and sensual dance choreography; and the mythological movie, represented by Jai Santoshi Maa (1975).',

          id: 1,
           linkUrl: "shop/hats",
       },
       {
          title: "Tollywood",
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
           content:'After early Indian experiments in silent film, in 1934 Bombay Talkies, launched by Himansu Rai, spearheaded the growth of Indian cinema. Over the years, several classic genres emerged from Bollywood: the historical epic, notably Mughal-e-Azam (1960); the curry western, such as Sholay (1975); the courtesan film, such as Pakeezah (1972), which highlights stunning cinematography and sensual dance choreography; and the mythological movie, represented by Jai Santoshi Maa (1975).',
           id: 2,
          linkUrl: "shop/jackets",
        },
        {

            title: "Hollywood",
           imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
            content:'After early Indian experiments in silent film, in 1934 Bombay Talkies, launched by Himansu Rai, spearheaded the growth of Indian cinema. Over the years, several classic genres emerged from Bollywood: the historical epic, notably Mughal-e-Azam (1960); the curry western, such as Sholay (1975); the courtesan film, such as Pakeezah (1972), which highlights stunning cinematography and sensual dance choreography; and the mythological movie, represented by Jai Santoshi Maa (1975).',
          id: 3,
         linkUrl: "shop/sneakers",       },
        
      
     ],
    };
   }

   render() {
     return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, content }) => (
           <MenuItem
             key={id}
             title={title}
             imageUrl={imageUrl}
             content={content} // as a props we passed the value to MenuItmes
           />
         ))}
       </div>
     );
   }
 }

 export default Directory;
