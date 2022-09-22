import React, { useState } from "react";

import Main from "./components/main";
import Book from "./components/book";
import ThankYou from "./components/thankYou";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SimpleForm from './components/simpleForm';

export default _ => {
  const [page, setPage] = useState(0);


  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}

      <Footer/>


      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="chatbtn" onClick={() => startChat()}><i class="fab fa-forumbee"></i></button> 
            : <button className="chatbtn" onClick={() => hideChat()}><i class="fab fa-forumbee"></i> </button>}
        </div>
      </div>      
    </div>
  );
};
