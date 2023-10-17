// Setup
function phoneticLookup(val) {

    let result = "";
    let lookup = { 
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank" 
  
    };
    result = lookup[val];
    // Only change code above this line
    return result;
  }
console.log(phoneticLookup("charlie"));