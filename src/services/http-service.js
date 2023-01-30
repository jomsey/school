import Parse from 'parse/dist/parse.min.js';

const PARSE_APP_ID="5tfbXxoTUCL5ZHeCAn8mBcomb4zzZSgY2Njuaq8E"
const PARSE_JS_KEY="4whZYVdBm70krXgcpeF4aQ0lOhpJS6I7ouRI5AZb"

Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";


function sendMessage({message,name,email}){
    const messageObject = new Parse.Object("Messages")
    
    messageObject.set("name",name)
    messageObject.set("message",message)
    messageObject.set("email",email) 

    messageObject.save()
  
}

export default sendMessage