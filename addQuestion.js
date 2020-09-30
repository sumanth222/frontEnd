import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Platform,
  Button
} from "react-native";

export default class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionObj: {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: "",
      },
      questionList: [],
    };
  }

  addItem = () => {
    const { questionObj, questionList } = this.state;
    this.setState({
      questionList: [...questionList, questionObj],
      questionObj: {
        id: '',
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: "",
      },
    });
  };

  /* The function is used to submit the Item */
  submitItem = () => {
    const { questionList } = this.state;
    // Make the POST API call and submit the questionList to it.
    console.log(questionList);
  };

  /* This is Delete Item function*/
  deleteItem = (e) => {
    const {questionList} = this.state;
    const idDelete = parseInt(e.target.id);
    const list = [...questionList]; // append to list
    const updated_list = list.filter((item) => item.id !== idDelete); // remove item which match with id
    this.setState({
      questionList: updated_list,
    });
  }

  // this function used to get new item
  updateInput = (e) => {
    const {questionObj} = this.state;
    const key = e.target.name;
    const value = e.target.value;
    const category = { ...questionObj, id: Date.now() };
    category[key] = value;
    this.setState({ questionObj: category });
  };

  // Render complete html code
  render() {
    const { questionObj, questionList } = this.state;
    return (
      <View style={{backgroundColor:"#4c4c4c"}}>
      <div>
        <div>
        <Text style={{
          fontSize:70,
          color:"#c1c1c1",
          justifyContent:"center",
          alignItems:"center",
          marginLeft:"35%",
        }}>Add Questions</Text>
        </div>
        <div className="container">
          <Text style={{color:"#fff"}}>
          Add Questions
          </Text>
          <div className="enter-question">
            <input
              type="text"
              name="question"
              className="input-question"
              placeholder="Write the Question"
              value={questionObj.question}
              onChange={this.updateInput}
              style={{margin: 0,
                width: "100%",
                borderRadius: 20,
                padding: 10,}}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option1"
              className="input-options"
              placeholder="Enter option 1"
              value={questionObj.option1}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option2"
              className="input-options"
              placeholder="Enter option 2"
              value={questionObj.option2}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option3"
              className="input-options"
              placeholder="Enter option 3"
              value={questionObj.option3}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="option4"
              className="input-options"
              placeholder="Enter option 4"
              value={questionObj.option4}
              onChange={(e) => this.updateInput(e)}
            />
          </div>
          <div className="enter-options">
            <input
              type="text"
              name="correctAnswer"
              className="input-options"
              placeholder="Enter Correct Answer"
              value={questionObj.correctAnswer}
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
            <div>
                {questionList.map((item) => {
                  return (
                    <div className="added-item" >
                      <div className="question-item">{item.question}</div>
                      <div className="button-div">
                        <button
                          className="delete-btn"
                          id={item.id}
                          onClick={this.deleteItem}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="action-button">
              <button
                className={`add-btn ${
                  questionList.length === 0 ? "disable-button" : "enable-button"
                }`}
                onClick={this.submitItem}
                disabled={questionList.length === 0}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      </View>
    );
  }
}
