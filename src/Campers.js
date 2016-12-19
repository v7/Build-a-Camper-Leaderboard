var React = require("react");
var Campers = React.createClass({


  render:function(){


const listItems = this.props.theURL.map((data,i) =>
<tr key = {i}><td>{i+1}</td><td><img src={data.img} className="iconss"></img> {data.username}</td><td>{data.recent}</td><td>{data.alltime}</td></tr>
);
    return(
          <tbody>
          {listItems}
        </tbody>




    );
  }
});

module.exports= Campers;
