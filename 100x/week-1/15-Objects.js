// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
    

    // keys of the object gets print
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  

    // values of keys gets print
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  

    // sub array of each key and value of an object
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  

    // checks for the property -> keys
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    // to add new objects in an exsiting object
    let newObj = Object.assign({}, obj, { newProperty: "newValue" }, {sex: "Lanja"});
    console.log("After Object.assign():", newObj);
  
  
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);