import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
let n,g,ad,t,ed;
class form extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name: '', gen:'Male',add:'',edu:'',train:'',dis:'',key:'false'};
        
		this.handleInputChange = this.handleInputChange.bind(this);
      }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
	  }
	  handleInputChange(event) 
	  {
        const target = event.target;
        var value = target.value;
		if(target.checked)
		{
            this.state.edu+= value;   
		}
		
        
    }
      sub = (e) => {
		  e.preventDefault();
           n=this.state.name;
           g=this.state.gen;
		   ad=this.state.add;
		   ed=this.state.edu;
		   t=this.state.train;
		  this.setState({key:'true'});
          //alert(n+g+ad+t);
	  }
	  clear = () => {
		document.getElementById("frm").reset();
		
	  }
render()
{
	const k=this.state.key;
	let dis;
	if(k=="true")
	{
		dis=<div className="text-center">Name:{n}<br/>Gender:{g}<br/>Address:{ad}<br/>Education:{ed}<br/>Training:{t}</div>;
	}
	else{
		dis=<div></div>;
	}
  return (
    <div >
       <div class="container bg-info"><br/>
		<div className="bg-danger text-center text-white p-1"><h1>Welcome to React Application</h1><br/><h3>Enter the Details Here</h3></div>
		<form id="frm">
		Hi,{this.state.name} 
		<div class="form-group">
			<label>Name:</label>
			<input type="text" name="name" id="name" onChange={this.myChangeHandler} class="form-control" />
		</div>
        
		<div class="form-group">
			<label>Gender:</label>
			<select class="form-control" id="gender" onChange={this.myChangeHandler} name="gen">
				<option value="Male">Male</option>
				<option value="Female">Female</option>				
			</select>
		</div>
		<div class="form-group">
			<label>Address:</label>
			<textarea class="form-control" id="address" onChange={this.myChangeHandler} name="add"></textarea>
		</div>
		
		<label>Educational Qualification:</label>
		<div class="custom-control custom-checkbox">
    		<input type="checkbox" class="custom-control-input" id="edu1" onChange={this.handleInputChange}  name="edu" value="10th" />
    		<label class="custom-control-label" for="edu1">10th</label>
  		</div>
  		<div class="custom-control custom-checkbox">
    		<input type="checkbox" class="custom-control-input" id="edu2" onChange={this.handleInputChange} name="edu" value="12th" />
    		<label class="custom-control-label" for="edu2">12th</label>
  		</div>
  		<label>Training:</label>
		<div class="custom-control custom-radio">
    		<input type="radio" class="custom-control-input" id="train1" onChange={this.myChangeHandler}  name="train" value="Yes" />
    		<label class="custom-control-label" for="train1">Yes</label>
  		</div>
  		<div class="custom-control custom-radio">
    		<input type="radio" class="custom-control-input" id="train2" onChange={this.myChangeHandler} name="train" value="No" />
    		<label class="custom-control-label" for="train2">No</label>
  		</div>
  		
  		<div class="form-group text-center" >
  			<button id="submit" class="btn btn-success" onClick={this.sub}>Submit</button>&nbsp;
  			<button id="clear" class="btn btn-danger" onClick={this.clear}>Clear</button>
  		</div>
		</form>
		<center>{dis}</center>
	</div>  
    
       
      
    </div>
  );
}
}
export default form;
