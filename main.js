import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBITLX3bW268pdLwNDzJMycu2hr05bGLRc",
  authDomain: "to-do-24540.firebaseapp.com",
  projectId: "to-do-24540",
  storageBucket: "to-do-24540.firebasestorage.app",
  messagingSenderId: "511363898029",
  appId: "1:511363898029:web:cf1bcd59dada1cd3e04424",
  measurementId: "G-JC0JTYH15M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

let input = document.getElementById("input");

input.addEventListener("change", function(event){
    console.log(event.target.value)
});

const mytodos = await getDocs(collection(db, "TODO"));
mytodos.forEach((todo) =>{
   const cdiv = document.createElement("div");
   cdiv.style.display = "flex";

   const input = document.createElement("input");
   input.type = "checkbox";
   input.className = "checkbox-round";
   input.style.marginRight = "10px";
   input.onclick = function(){myfunctions()};

   function myfunctions(){
    if(input.checked){
      h1.classList.toggle("hello");
    };
   };

   cdiv.appendChild(input);

    const h1 = document.createElement("p");
    h1.innerHTML = todo.data().todo;
    cdiv.appendChild(h1);

    document.getElementById("re").appendChild(cdiv);

    

});

const docu = document.getElementById("button");

function myfunction(e){
  e.preventDefault();
  const data = {
      todo: input.value
  };

  try {
      addDoc(collection(db, "TODO"), data);
      console.log("success");
  } catch(error) {
      console.log(error);
  }
}

docu.addEventListener("click", myfunction);
