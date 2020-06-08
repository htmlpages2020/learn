import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


class form extends React.Component {
    
    
    
      sub = (e) => {
		  e.preventDefault();
           
           $.ajax({
            url: 'https://hypertexttechies2020.000webhostapp.com/React/ajax.php',
            type: "POST",
            data: $('#frm').serialize(),
            success: function(data) {
                alert('Success');
                $('#res').html(data);
                
            },
            error: function(xhr, status, err) {
                alert("Error");
                
            }
        });
       
	  }
	  
	  clear = () => {
		document.getElementById("frm").reset();
		
	  }
	  back = () => {
		this.props.history.push("/learn/");
		
	  }
		
	  
render()
{
	
  return (
    <div className="container">
		
       <div class="container bg-info">
	   <br/>
		<div className="bg-danger text-center text-white"><h1>Welcome to React Application with Jquery and PHP</h1><br/><h3>Enter the Details</h3></div>
		<form id="frm">
		
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
    		<input type="checkbox" class="custom-control-input" id="edu1" onChange={this.handleInputChange}  name="edu[]" value="10th" />
    		<label class="custom-control-label" for="edu1">10th</label>
  		</div>
  		<div class="custom-control custom-checkbox">
    		<input type="checkbox" class="custom-control-input" id="edu2" onChange={this.handleInputChange} name="edu[]" value="12th" />
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
  			<button id="submit" class="btn btn-success" type="submit" onClick={this.sub}>Submit</button>&nbsp;&nbsp;
  			<button id="clear" class="btn btn-danger" onClick={this.clear}>Clear</button>&nbsp;&nbsp;
			  <button id="clear" class="btn btn-warning" onClick={this.back}>Back</button>&nbsp;&nbsp;
  		</div>
		</form>
		<div id="res"></div><br/>
	</div>  
    
       
      
    </div>
  );
}
}
export default form;
