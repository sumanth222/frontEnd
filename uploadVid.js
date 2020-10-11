import axios from 'axios'; 
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput
  } from "react-native";
import React,{Component} from 'react'; 



class uploadVid extends Component { 

	state = { 
    selectedFile: null,
    topic:"",
    description:"",
    type:"video/mp4",
    uri:"F:/virtusaProject/records"
	}; 
	
	onFileChange = event => { 
	    this.setState({ selectedFile: event.target.files[0] }); 
	}; 
	
	onFileUpload = () => { 
	
        let formData = new FormData();
        formData.append("videoFile", {
            name: this.state.selectedFile.name,
            uri: this.state.uri + '/' + this.state.selectedFile.name,
            type: 'video/mp4'
        });
	
	console.log(this.state.selectedFile); 
	
	axios.post("http://192.168.0.102:8090/video",{
        formData    
    })
    .then(function(response){
        alert("Upload success")
    })
    .catch(function(error){
        alert("Upload error")
    })
	}; 
	
	
	fileData = () => { 
	
	if (this.state.selectedFile) { 
		
		return ( 
		<View style={{flex:1,flexDirection:'column'}}> 
			<Text><strong>File Details:</strong></Text> 
			<Text>File Name: {this.state.selectedFile.name}</Text> 
			<Text>File Type: {this.state.selectedFile.type}</Text> 
			<Text> 
			Last Modified:{" "} 
			{this.state.selectedFile.lastModifiedDate.toDateString()} 
			</Text> 
		</View> 
		); 
	} else { 
		return ( 
		<View> 
			<br />
            <hr /> 
			<Text><strong>Choose a file before pressing upload</strong></Text> 
		</View> 
		); 
	} 
	}; 
	
	render() { 
	return ( 
        <View style={{flex:1,alignItems:'center',backgroundColor:"#99f3bd",justifyContent:'center'}}>
        <Text style={{fontSize:40,marginBottom:40}}><strong>Upload Video</strong></Text>
		<form method="POST" encType="multipart/form-data" action="/video">
		<input type="file" name="file" onChange={this.onFileChange}/><br /> 
        {this.fileData()}
		<br /> <input type="submit" value="Upload" />
	    </form>

    
    </View>
	); 
	} 
} 

export default uploadVid; 
