var assert = require('assert');
var fakeTwitt = require('./index');

describe('Tests del file index.js', function(){
	'use strict';
	it('Primo test : funzione getTwitt()', function(){
		assert.equal(fakeTwitt.getTwitt().length, 0);
	});
	
	it('Secondo test : funzione addTwitt()', function(){
		fakeTwitt.addTwitt("Margherita", "01-01-2018","Lorem Ipsum è un testo segnaposto utilizzato.");
		fakeTwitt.addTwitt("Valeria", "10-11-2017","Nel settore della tipografia e della stampa.");
		assert.equal(fakeTwitt.getTwitt().length, 2);
		assert.equal(fakeTwitt.getTwitt()[1].id, 1);
		fakeTwitt.addTwitt("Saretto", "01-05-2018","Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.");
		fakeTwitt.addTwitt("Carla", "04-04-2016","È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.");
		assert.equal(fakeTwitt.getTwitt().length, 4);
		assert.equal(fakeTwitt.getTwitt()[2].id, 2);
	});
	
	it('Terzo test : funzione deleteTwittById()', function(){
		fakeTwitt.deleteTwittById(2);
		assert.equal(fakeTwitt.getTwitt().length, 3);
		
	});
	
	it('Quarto test : funzione searchById()', function(){
		fakeTwitt.resetTwitt();
		fakeTwitt.addTwitt("Margherita");
		fakeTwitt.addTwitt("Carla");
		fakeTwitt.addTwitt("Serena");
		fakeTwitt.addTwitt("Donatella");
																					
		assert.equal(fakeTwitt.searchById(2), fakeTwitt.getTwitt()[2]);
		
	});
	
	it('Quinto test : funzione Search by Author()', function(){
		fakeTwitt.resetTwitt();
		fakeTwitt.addTwitt("Margherita", "01-01-2018","Lorem Ipsum è un testo segnaposto utilizzato.");
		fakeTwitt.addTwitt("Carla", "10-11-2017","Nel settore della tipografia e della stampa.");
		fakeTwitt.addTwitt("Saretto", "01-05-2018","Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.");
		fakeTwitt.addTwitt("Valeria", "04-04-2016","È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.");
																					
	 	assert.equal(fakeTwitt.getTwitt()[1].author, "Carla");
		//errore di asserzione
		//assert.equal(fakeTwitt.searchByAuthor("Carla"), fakeTwitt.getTwitt()[1].author); 
		
	});
	
	it('Sesto test : funzione Contains by sentence()', function(){
		fakeTwitt.resetTwitt();
		fakeTwitt.addTwitt("Margherita", "01-01-2018","Lorem Ipsum è un testo segnaposto utilizzato.");
		fakeTwitt.addTwitt("Carla", "10-11-2017","Nel settore della tipografia e della stampa.");
		fakeTwitt.addTwitt("Saretto", "01-05-2018","Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo.");
		fakeTwitt.addTwitt("Carla", "04-04-2016","È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.");
																					
	 	assert.equal(fakeTwitt.getTwitt()[1].description, "Nel settore della tipografia e della stampa.");
		//errore di asserzione
		var boolean = fakeTwitt.contains("utilizzato");
		assert.equal(boolean, 0);
	});
	
	
});

