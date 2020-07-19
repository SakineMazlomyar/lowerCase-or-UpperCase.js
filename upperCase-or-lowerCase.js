function solve(s){
    //..
  
    let upperCases= [];
    let lowerCases = [];
    if(typeof s === 'string'){

        for(let i =0; i<s.length; i++){
            if(s[i] === s[i].toUpperCase()){
                upperCases.push(s[i])
            }
            if(s[i] === s[i].toLowerCase()){
                lowerCases.push(s[i])
            }
        }
    }
    
    if(lowerCases.length>upperCases.length){
        return s.toLowerCase()
    }else if(lowerCases.length<upperCases.length){
        return s.toUpperCase()
    }else {
        return s.toLowerCase()
    }
    

}
console.log(solve("coDE"))