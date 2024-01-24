import Parse from 'parse/dist/parse.min.js';

// const PARSE_APP_ID=process.env.('PARSE_APP_ID')
// const PARSE_JS_KEY=process.env('PARSE_JS_KEY')

// Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
// Parse.serverURL = "https://parseapi.back4app.com/";


function sendMessage({message,name,email}){
    const messageObject = new Parse.Object("Messages")
    messageObject.set("name",name)
    messageObject.set("message",message)
    messageObject.set("email",email) 
    messageObject.save()
  
}

export default sendMessage