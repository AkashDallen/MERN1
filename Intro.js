  function Intro(props){
    return (
      <div className="Intro">
        <div className="name">{props.name}</div>
       <div className="address">{props.address}</div>
      </div>
    );
  }
  export default Intro;
