import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
let n=[],g=[],ad=[],t=[],ed=[],dis=[<tr><th>Name</th><th>Gender</th><th>Address</th><th>Education</th><th>Training</th></tr>],f=0;
class form extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name: '', gen:'Male',add:'',edu:'',train:'',key:'false'};
        
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
           n.push(this.state.name);
           g.push(this.state.gen);
		   ad.push(this.state.add);
		   ed.push(this.state.edu);
		   t.push(this.state.train);
		  
          alert("Data Stored Successfully");
	  }
	  show = (e) => {
		e.preventDefault();
		this.setState({key:'true'});
		f=1;
	  }
	  clear = () => {
		document.getElementById("frm").reset();
		
	  }
	  next = () => {
		this.props.history.push("/learn/ajax/");
		
	  }
	  
		
	  
render()
{
	const k=this.state.key;
	let n1=n.length;
	if(k=="true")
	{
		
		for(var i=0;i<n1;i++)
		{
			dis[i+1]=(<tr><td>{n[i]}</td><td>{g[i]}</td><td>{ad[i]}</td><td>{ed[i]}</td><td>{t[i]}</td></tr>);
		}
		
		
	}
	else{
		dis.push();
		
	}
  return (
    <div className="container">
		
       <div class="container bg-info">
	   <br/>
		<div className="bg-danger text-center text-white"><h1>Welcome to React Application</h1><br/><h3>Enter the Details</h3></div>
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
  			<button id="submit" class="btn btn-success" onClick={this.sub}>Submit</button>&nbsp;&nbsp;
  			<button id="clear" class="btn btn-danger" onClick={this.clear}>Clear</button>&nbsp;&nbsp;
			  <button id="clear" class="btn btn-warning" onClick={this.show}>Show Data</button>&nbsp;&nbsp;
  		</div>
		  <p className="text-center " href="#" role="button" onClick={this.next}><a className="nav-link text-danger" href="#"><b>Click Here to view React Application with Jquery and PHP</b></a></p>
		</form>
		{ f
			?<div className="text-center"><table className="table table-bordered">{dis}</table></div>
			:null
		}
		<br/>
	</div>  
    
       
      
    </div>
  );
}
}
export default form;
