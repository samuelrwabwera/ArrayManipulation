function main(input) {
    const manipulation = new Manipulate(input);
    console.log("whole word:", manipulation.wholeWord());
    console.log("reverse:", manipulation.reverse()); 
    console.log("sort:", manipulation.sort());
    console.log("sort desc:", manipulation.sortDesc());
    console.log("custom reverse:", manipulation.customReverse());
}
function Manipulate(input){
    
  var  wholeWord2 = function(){
        var word = input.slice();
        console.log("====", input);
        word = word.join().replace(/,/g, " ")
        return "'" + word + "'" 
       
    }
this.wholeWord = wholeWord2;
    this.reverse = function(){
        var reversedForm = input.slice();
        console.log("====", input);
        return reversedForm.reverse();
    }
    this.sort = function(){
        var sortedForm = input.slice();
        console.log("====", input);
        return sortedForm.sort() ;
    }

   // var that = this.sort();
    this.sortDesc = function(){
        var sortedDescForm = input.slice();
        console.log("====", input);
        return sortedDescForm.sort().reverse(); 
    }
    

    var sortDesc = {
        word: function(){
            return this.customReverse;
        }
    }

    var customRev =  this.sortDesc();
    this.customReverse = function(){ 
        var customReverse = customRev.slice();
        var newArray = [];
       console.log("====", customRev);
        for(var i=0; i<customReverse.length; i++){
            newWordForm = customReverse[i].split('').reverse().join('')
            newArray.push(newWordForm)
            //console.log(newArray)
        } 
        return newArray;
    }
    var ss = this.customReverse();
//    sortDesc.word.apply(ss); 
}

main(["Kankunda", "Otim", "Oboth", "Araka", "Namula", "Atwine", "Wauyo"]);
