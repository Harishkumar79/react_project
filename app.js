const Box = (props) => {
  return(
     <div className='box'>
      <h1 className={props.color}> {props.heading}!</h1>
      <p className='abc'>hdvbsdvghvdbsnnkwmkwjhnm {7} </p>
      <button onClick={()=>props.changeColor(props.id,"red")}>Red</button>
      <button onClick={()=>props.changeColor(props.id,"blue")}>Blue</button>
      <button onClick={()=>props.changeColor(props.id,"green")}>Green</button>
      <button onClick={()=>props.changeColor(props.id,"yellow")}>yellow</button>
     </div>
  );
}

const Stats = (props) => {
  let Boxes = props.Boxes;
  let black_count= 0 , red_count=0 , blue_count = 0 , green_count = 0 , yellow_count = 0 ;
  Boxes.forEach(box => {
    if(box.color == "black"){
      black_count++;
    }else if(box.color == "red"){
      red_count++;
    }else if(box.color == "blue"){
      blue_count++;
    }else if(box.color == "green"){
      green_count++;
    }else if(box.color == "yellow"){
      yellow_count++;
    }
  });

  return(
    <div className='Stats'>
    Total heading color count:
        <div>Black:{black_count}</div>
        <div>Red:{red_count}</div>
        <div>Blue:{blue_count}</div>
        <div>Green:{green_count}</div>
        <div>Yellow:{yellow_count}</div>
    </div>
  );
}

class App extends React.Component {
    state = {
      Boxs : [
        { 
          id:1,
          heading:"first heading",
          color:"black"
        },
        {
          id:2,
          heading:"second heading",
          color:"black"
        }, 
        {
          id:3,
          heading:"third heading",
          color:"black"
        },
        {
          id:4,
          heading:"fourth heading",
          color:"black"
        }, 
        {
          id:5,
          heading:"fifth heading",
          color:"black"
        }, 
        {
          id:6,
          heading:"sixth heading",
          color:"black"
        }
      ]
    };

    changeColor(id,color){
      let boxs = this.state.Boxs;
      boxs[id-1].color = color;
      this.setState({
        Boxs:boxs
      });
    }

    render(){
      return(
        <div>
            <div className='row'>
                {this.state.Boxs.map( box =>
                  <div className='col'>
                  <Box 
                  id={box.id}
                  heading={box.heading}
                  color={box.color}
                  changeColor={this.changeColor.bind(this)}
                  />
                  </div>
               )}
           </div>
           <div className='row'>
               <Stats Boxes={this.state.Boxs}/>
           </div>
        </div>
      );  
    }
}

ReactDOM.render(
  <App/>,

  document.getElementById('react-container')
);