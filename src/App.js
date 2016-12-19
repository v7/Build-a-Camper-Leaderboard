var React = require("react");
var Campers= require("./Campers");
var axios = require("axios");
var App = React.createClass({

    getInitialState:function(){

      return {
        recent:[],
        allTime:[],
        currentView:"recent"
      };


    },

    fetchRecent:function(){
      return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
    },
    fetchAllTime:function(){


    return  axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");

    },

    componentWillMount:function(){
        var that = this;
        axios.all([that.fetchRecent(),that.fetchAllTime()]).then(axios.spread((recent,allTime)=>{
            that.setState({

              recent:recent.data,
              allTime:allTime.data
            });

        }))

    },

    change:function(table){

      this.setState({
        currentView:table
      });
    },
  render:function(){

    return (
    <div className="contianer">
      <div className="page-header">
<h1>Top campers at FCC<small>  by MK</small></h1>
</div>
      <div className="jumbotron">
        <table className="table table-bordered" id="camperList">
          <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th><a href="javascript:void();" onClick={()=>{this.change("recent")}}>Points in past 30 days</a></th>
            <th><a href="javascript:void();" onClick={()=>{this.change("allTime")}}>All time points</a></th>
          </tr>
        </thead>
        <Campers theURL={this.state[this.state.currentView]}/>
        </table>

      </div>

    </div>
  );
  }
});



module.exports = App;
