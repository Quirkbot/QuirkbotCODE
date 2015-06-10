(function (){
	"use strict";
	
	var ChromeExtensionAPIClient = function(extensionId){
		var self = this,
		listeners = [];

		function guid() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
		}

		var generateMethod = function(methodName){
			var method = function(){
				var methodArguments = Array.prototype.slice.call(arguments, 0);

				var promise = new Promise(function(resolve, reject){
					
					var message = {
						name: methodName,
						arguments: methodArguments
					};

					var port = chrome.runtime.connect(extensionId);
					port.onMessage.addListener(function(response){
						port.disconnect();
						if(response.error){
							reject(response.error)
						}
						else {
							var args = [];
							Object.keys(response.arguments).forEach(function(index){
								args.push(response.arguments[index]);
							})
							resolve.apply(this, args);
						}
						
					});
					port.postMessage(message)

				});

				return promise;
			}
			return method;
		}
		var generateEvent = function(eventName){			
			return {
				add: generateEventListenerAdder(eventName),
				remove: generateEventListenerRemover(eventName)
			};
		}
		var generateEventListenerAdder = function(eventName){
			
			var method = function(callback){
				if(typeof callback !== 'function') return;
				if(!listeners[eventName]) listeners[eventName] = [];
				
				var exists = false;
				listeners[eventName].forEach(function(handler){
					if(handler.callback == callback){
						exists = true;
						return;
					}
				})

				if(exists) return;

				var port = chrome.runtime.connect(extensionId);
				var uuid = guid();
				
				var message = {
					addListener: true,
					uuid: uuid,
					name: eventName,
					arguments: []
				};
				
				var handler = {
					port: port,
					uuid: uuid,
					callback: callback
				};

				port.onMessage.addListener(function(response){

					if(!response.error) {
						var args = [];
						Object.keys(response.arguments).forEach(function(index){
							args.push(response.arguments[index]);
						})
						handler.callback.apply(this, args);
					}						
				});
				port.postMessage(message);

				
				var promise = new Promise(function(resolve, reject){
					resolve(callback);
				});

					
				listeners[eventName].push(handler);

				return promise;
			}
			return method;
		}
		var generateEventListenerRemover = function(eventName){
			
			var method = function(callback){
				if(!listeners[eventName]) return;
				var removed;
				listeners[eventName].forEach(function(handler, index){
					if(handler.callback == callback){
						removed = handler;
						listeners[eventName].splice(index, 1);
					}
				})

				var message = {
					removeListener: true,
					uuid: removed.uuid,
					name: eventName,
					arguments: []
				};

				removed.port.postMessage(message);
				removed.port.disconnect();
				
				var promise = new Promise(function(resolve, reject){
					resolve();
				});

				return promise;
			}
			return method;
		}

		Object.defineProperty(self, 'generateMethod', {
			value: generateMethod
		});
		Object.defineProperty(self, 'generateEvent', {
			value: generateEvent
		});
	}

	if(typeof define !== 'undefined'){
		define([], function(){
			return ChromeExtensionAPIClient;
		});
	}
	else if (typeof exports !== 'undefined'){
		exports.ChromeExtensionAPIClient = ChromeExtensionAPIClient;
	}
	else window.ChromeExtensionAPIClient = ChromeExtensionAPIClient;
})();