let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
 
  
  function PrintDeveloper() {
    let ans=arr.forEach(function (element) {
        if(element.profession==="developer") {
            console.log(element);
        }
    })
  }
  
  function addData() {
    let emp={id:4,name:"susan",age:"20",profession:"intern"};
    console.log(...arr,emp);
  }
  
  function removeAdmin() {
    arr.forEach((element)=>{
        if(element.profession!=="admin") {
            console.log(element);
        }
    })
  }
  
  function concatenateArray() {
    let anotherArray = [
        { id: 5, name: "Enrolla Prakash", age: "21", profession: "tester" },
        { id: 6, name: "Rucha", age: "22", profession: "designer" },
        { id: 7, name: "Vinay", age: "23", profession: "manager" }
      ];
        let newArray=arr.concat(anotherArray);
        console.log(newArray);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }