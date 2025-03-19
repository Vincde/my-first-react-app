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

export default function Profile(props) {
  return(
    <div className='card'>
      <Avatar {...props} />
      <Avatar size={80} person={{name:'sdfsf', imageId: 'oweirwer'}}/>
      <Avatar size={50} person={{name:'sdfsdfs', imageId: 'e344fs'}}/> 
    </div>
  );
}