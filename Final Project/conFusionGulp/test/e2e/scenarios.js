'use strict';

describe('conFusion App E2E Testing', function() {
	it('should automatically redirect to / when location hash/fragment is empty', function() {
	 	//irst check to make sure that you are redirected to the index.html file
    	browser.get('index.html');
    	expect(browser.getCurrentUrl()).toMatch("/");

  	});
	 //Next, we will set up a simple test for the index file to check if the page title is set correctly:
 	describe('index', function() {
	    beforeEach(function() {
	      browser.get('index.html#/');
	    });

	    it('should have a title', function() {
	      expect(browser.getTitle()).
	        toEqual('Ristorante Con Fusion');
	    });
  	});

  	describe('menu 0 item', function() {
	    beforeEach(function() {
	      browser.get('index.html#!/menu/0');
	    });

	    it('should have a name', function() {
	          var name = element(by.binding('dish.name'));
	          expect(name.getText()).
	             toEqual('Uthapizza Hot $4.99');
	    });

	    it('should show the number of comments as', function() {
	        //reviso que cada elemento tenga 5 comentarios
	         expect(element.all(by.repeater('comment in dish.comments'))
	            .count()).toEqual(5);

	    });

	    it('should show the first comment author as', function() {
	    	//reordeno por el nombre del autor los comentarios
	          element(by.model('dish.text')).sendKeys('author');
	            expect(element.all(by.repeater('comment in dish.comments'))
	            .count()).toEqual(5);
	          var author = element.all(by.repeater('comment in dish.comments'))
	                      .first().element(by.binding('comment.author'));

          expect(author.getText()).toContain('25 Cent');

    }); 
 }); 

});