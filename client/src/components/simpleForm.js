import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from './Review';

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What is your gender?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'male', label: 'Male', trigger: '5' },
                { value: 'female', label: 'Female', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: '9' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },


            {
                id: '9',
                message: 'What do you want to know?',
                trigger: 'instructions',
              },
              {
                id: 'instructions',
                options: [
                  { value: 'instructions', label: 'How to use the application', trigger: 'instruc' },
                
                ],
                trigger:'instruc'
              },


              {
                id: 'instruc',
                message: ' Find the purpose.Request for a “custodian” on the custodian platform.Filter according to your choice and location .An employee (custodian) will visit and explain all the details and fill out the paper work',
                trigger: '11',
              },
              {
                id: '11',
                options: [
                    { value: '11', label: 'Is it safe?', trigger: 'safeans' },
                  
                  ],
                trigger: 'safeans',
              },
              {
                id: 'safeans',
                message:'We have trustworthy custdians from all over the country.We have a proper scrutinisation process with a background check.',
                trigger:'end-message'
              },
              
            {
              id: 'end-message',
              message: 'Thanks!',
              end:true
            }


           
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;