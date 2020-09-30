import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
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




export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<View style={{
			backgroundColor: "#7cc6fe",
  			flex:1,
  			justifyContent: "center",
			alignItems: "center",
		}}>
			{showScore ? (
				<div className='score-section'>
					<Text style={{fontSize:25}}>
					You scored {score} out of {questions.length} !	
					</Text>		 
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count' style={{marginBottom:20}}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text' style={{marginBottom:15}}>
							<Text style={{marginBottom:15,fontSize:20}}>
								{questions[currentQuestion].questionText}
							</Text>
						</div>
					</div>
					<div className='answer-section' style={{justifyContent:"space-between"}}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button style={{width: "100%",
								fontSize:16,
								color: "#ffffff",
								backgroundColor: "#252d4a",
								borderRadius:15,
								padding: 5,
								justifyContent:"flex-start",
								alignItems:"center",}} 
								onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			
		</View>

	);
}
