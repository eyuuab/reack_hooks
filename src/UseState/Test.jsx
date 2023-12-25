import React, {useState, useEffect} from 'react'

function Test() {
    const names = ["Abebe", "Kebede", "Girma", "Solomon"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [name, setName] = useState(names[currentIndex]);

    function changeName() {
        const newIndex = (currentIndex + 1) % names.length;
        setCurrentIndex(newIndex);
        setName(names[newIndex]);
      }


    // const changeName=() =>{
    //     const newidx = (currentIndex+1)%names.length;
    //     setCurrentIndex(newidx);
    //     setName(name[newidx]);
    // }
  return (
    <div>
      <div>Hello , {name}</div>
      <button onClick={changeName}>Click here</button>
    </div>
  )
}

export default Test



// import React, {useState} from 'react'

// function Test() {
    
    // const names = ["Abebe", "Kebede", "Girma", "Solomon"];
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [name, setName] = useState(names[currentIndex]);

   
    // function changeName() {
    //   const newIndex = (currentIndex + 1) % names.length;
    //   setCurrentIndex(newIndex);
    //   setName(names[newIndex]);
    // }
//   return (
//     <div>
//       <div>Hello, {name}</div>
//       <hr />
//       <button onClick = {changeName}>Click Me</button>
//     </div>
//   )
// }

// export default Test




// // import React from 'react'

// // function Test() {


// //     let a = "Abebe";
// //     function changeName(){
// //         console.log("clicked!");
// //         a ="Kebede";
// //         return a;
// //     }
// //   return (
// //     <div>
// //       <div>Hello, {a}</div>
// //       <button onClick = {changeName}>Click Me</button>
// //     </div>
// //   )
// // }

// // export default Test


