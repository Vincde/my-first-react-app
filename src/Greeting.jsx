

/* function ListItem(props) {
  return <li>{props.animal}</li>
} */

function Item({ name, isPacked }){
  let itemContent = name;
  if(isPacked){
    itemContent = (
      <del>
        {name + '✅'}
      </del>
    ); 
  }

  return(
    <li className="item">
      {itemContent}
    </li>
  );
}

function PackingList(){

  return(
    <section>
      <h1>Sally Ride&apos;s packing list</h1>
      <ul>
          <Item isPacked={true} name="space suit"/>
          <Item isPacked={true} name="Helmet with a golden leaf"/>
          <Item isPacked={false} name="Photo of Tam"/>
      </ul>
    </section>
  );
}




  export default PackingList;