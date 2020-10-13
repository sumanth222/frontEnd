import React from "react";
import "./index.css";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
  Picker,
  ImageBackground,
  Dimensions,
} from "react-native";

class questions_input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionObj: {
        testId: "",
        quesId: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctOptions: "",
      },
      testQuestions: [],
    };
  }

  addItem = () => {
    const { questionObj, testQuestions } = this.state;
    this.setState({
      testQuestions: [
        ...testQuestions,
        {
          testId: questionObj.testId,
          quesId: questionObj.quesId,
          question: questionObj.question,
          correctOptions: questionObj.correctOptions,
          questionOptions:[questionObj.option1,questionObj.option2,questionObj.option3,questionObj.option4]
        },
      ],
      questionObj: {
        testId: "",
        quesId: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctOptions: "",
      },
    });
  };

  /* The function is used to submit the Item */
  submitItem = () => {
    const { testQuestions } = this.state;
    // Make the POST API call and submit the testQuestions to it.
    console.log(testQuestions);
  };

  /* This is Delete Item function*/
  deleteItem = (e) => {
    const { testQuestions } = this.state;
    const idDelete = parseInt(e.target.id);
    const list = [...testQuestions]; // append to list
    const updated_list = list.filter((item) => item.quesId !== idDelete); // remove item which match with id
    this.setState({
      testQuestions: updated_list,
    });
  };

  // this function used to get new item
  updateInput = (e) => {
    const { questionObj } = this.state;
    const key = e.target.name;
    const value = e.target.value;
    const category = { ...questionObj, quesId: Date.now() };
    category[key] = value;
    this.setState({ questionObj: category });
  };

  // Render complete html code
  render() {
    const { questionObj, testQuestions } = this.state;
    return (
      <View style={{flex:1,backgroundColor:"#e8e8e8"}}>

        <Text style={{fontSize:25}}>Add Questions and options.</Text>
        <div className="questionInputContainer">
          <div className="enter-question">
            <TextInput
            style={{borderRadius:10,borderBottomColor:"#000000",backgroundColor:"#fff"}}
              name="testId"
              className="input-question"
              placeholder="Enter Test Id"
              value={questionObj.testId}
              onChange={this.updateInput}
            />
          </div>
          <div className="enter-question">
            <TextInput
            style={{borderRadius:10,borderBottomColor:"#000000",backgroundColor:"#fff"}}
              name="question"
              className="input-question"
              placeholder="Write the Question"
              value={questionObj.question}
              onChange={this.updateInput}
            />
          </div>
          <div className="enter-options">
            <TextInput
            style={{borderRadius:10,borderBottomColor:"#000000",backgroundColor:"#fff"}}
              name="option1"
              className="input-options"
              placeholder="Enter option 1"
              value={questionObj.option1}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <TextInput
            style={{borderRadius:10,borderBottomColor:"#000000",backgroundColor:"#fff"}}
              name="option2"
              className="input-options"
              placeholder="Enter option 2"
              value={questionObj.option2}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <TextInput
            style={{borderRadius:10,borderBottomColor:"#000000",backgroundColor:"#fff"}}
              name="option3"
              className="input-options"
              placeholder="Enter option 3"
              value={questionObj.option3}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <TextInput
            style={{borderRadius:10,borderBottomColor:"#000000",backgroundColor:"#fff"}}
              name="option4"
              className="input-options"
              placeholder="Enter option 4"
              value={questionObj.option4}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <TextInput
            style={{borderRadius:10,borderBottomColor:"#000000",backgroundColor:"#fff"}}
              name="correctOptions"
              className="input-options"
              placeholder="Enter Correct Answer"
              value={questionObj.correctOptions}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="action-button">
            <button
              className={`add-btn ${
                questionObj.question.length === 0
                  ? "disable-button"
                  : "enable-button"
              }`}
              onClick={this.addItem}
              disabled={questionObj.question.length === 0}
            >
              Add Todo
            </button>
          </div>
        </div>
        <div className="questionInputContainer">
          <div>
            {testQuestions.map((item) => {
              return (
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                  <Text>{item.question}</Text>
                  <div className="button-div">
                    <button
                      className="delete-btn"
                      id={item.quesId}
                      onClick={this.deleteItem}
                    >
                      Delete
                    </button>
                  </div>
                </View>
              );
            })}
          </div>
          <div className="action-button">
            <button
              className={`add-btn ${
                testQuestions.length === 0 ? "disable-button" : "enable-button"
              }`}
              onClick={this.submitItem}
              disabled={testQuestions.length === 0}
            >
              Submit
            </button>
          </div>
        </div>
      </View>
    );
  }
}

export default questions_input;
