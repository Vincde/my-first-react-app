import {getImageUrl} from './utils.js';


function Avatar({person, size}) {
  return(
    <img className='avatar'
     src={getImageUrl(person)} 
     alt={person.name}
     width={size}
     height={size}
    />
  );
}

export default function Profile() {
  return(
    <div>
      <Avatar size={100} person={{name: 'katsuko saruhashi', imageId: 'yfe0df'}} />
      <Avatar size={80} person={{name:'sdfsf', imageId: 'oweirwer'}}/>
      <Avatar size={50} person={{name:'sdfsdfs', imageId: 'e344fs'}}/> 
    </div>
  );
}