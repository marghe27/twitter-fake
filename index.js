var twitters = [];
var ID_COUNTER = 0;

exports.getTwitt = function (){
	'use strict';
	return twitters;
};

//Dopo avere aggiunto i dati, torna i twitt
exports.addTwitt = function (paramAuthor, paramDate, paramDescription) {
	'use strict';
	twitters.push({
		author: paramAuthor,
		date: paramDate,
		description: paramDescription,
		id: ID_COUNTER++
	});


	return twitters;
};

 
// deleteTwittById(id) cancella in base all'id passato
exports.deleteTwittById = function(id){
	'use strict';
	for (var i=0; i<twitters.length; i++){
		if(twitters[i].id === id){
			twitters.splice(i, 1);
			
		}
		
	}
	
	return twitters; 
};
 


//searchById(id)); cerca i twitt in base all'id passato
exports.searchById = function (id) {
	'use strict';
	
	for (var items of twitters) {
		if (items.id === id) {
			return items;
			
		}
		
	}
	
};



//Search by Author
exports.searchByAuthor = function (paramAuthor) {
	'use strict';
	
	for (var items of twitters) {
		if (items.author === paramAuthor) {
			return items;
		}
	
	}
	
};




var twittDesc = [];
// Search  word in twitters.description (non funziona, trova solo la frase intera)
exports.searchContext = function() {
	'use strict';
	for(var item of twitters){
		twittDesc.push(item.description);
	}
	
	return twittDesc;
};



var arrayText = this.searchContext();

// ritorna la Posizione del contains(sentence) (frase intera)
exports.contains = function(sentence) {
	'use strict';
	return arrayText.indexOf(sentence);

};



//questo fa il reset
exports.resetTwitt = function(){
	'use strict';
	twitters = [];
	ID_COUNTER = 0;
	return twitters;
};


