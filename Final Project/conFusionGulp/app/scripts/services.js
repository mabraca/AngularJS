'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            
            // retorna el objeto json con los postres
                this.getDishes = function(){
                    return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                };
              
    
                // implement a function named getPromotion
                // that returns a selected promotion.

                this.getPromotion = function (){
                    return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
                    
                };
    
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL){
    
            var corpfac = {};
        
            // Implement two functions, one named getLeaders,

            corpfac.getLeaders = function(){
               return $resource(baseURL+"leadership/",null,  {'update':{method:'PUT' }});
            };
            // the other named getLeader(index)

            corpfac.getLeader = function(){
              return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
            };
            // Remember this is a factory not a service
            return corpfac; 
    
    
        }])
        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
   ;
             var feed = {};
            // 
                feed.feedBack = function(){
                    //default it takes return $resource(baseURL+"feedback/",{},{"save": {"method": "POST"}});
                    return $resource(baseURL+"feedback/:id",{},{'save':{method:'POST'}});
                };
            return feed;
              
    
                
    
                        
        }])

;