 var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

 const result = words.filter(function(word){
    return word.length > 6
 });

 console.log(result);



 let names = ['Amarachi', 'Joshua', 'GodsPower', 'Uchechi', 'Ogechi', 'Ulumma']

 const filteredNames = names.filter(name => name.includes('chi'))
 const filteredNames = names.filter(function(name){
     return name.includes('chi')
 })

 console.log(filteredNames)
