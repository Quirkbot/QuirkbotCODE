(function (){
	"use strict";

	var ChromeExtensionAPIServer = function(){
		var self = this,
		methods = {},
		events = {};

		var registerMethod = function(key, method){
			methods[key] = method;
		}
		var registerEvent = function(key, add, remove){
			events[key] = {
				add: add,
				remove: remove,
				listeners : []
			};
		}
		var validateMethod = function(methodName, methodArguments){
			var promise = function(resolve, reject){
				try{
					methods[methodName].apply(window, methodArguments)
					.then(resolve)
					.catch(reject);
				}
				catch(e){
					reject({
						step: 'validateMethod',
						originalError: e.toString(),
						message: 'Action "' + methodName + '" is invalid.'
					});
				}
				

			};
			return new Promise(promise);
		}

		var validateEventAdder = function(eventName, uuid, listener){
			var promise = function(resolve, reject){
				try{
					var handler = {
						eventName: eventName,
						uuid: uuid,
						listener: listener
					}
					events[eventName].listeners.push(handler);
					events[eventName].add(listener)
					.then(function (argument) {
						resolve(handler)
					})
					.catch(reject);
				}
				catch(e){
					reject({
						step: 'validateEventAdder',
						originalError: e.toString(),
						message: 'Action "' + eventName + '" is invalid.'
					});
				}
				

			};
			return new Promise(promise);
		}
		var validateEventRemover = function(eventName, uuid, listener){
			var promise = function(resolve, reject){
				try{
					var handler;
					events[eventName].listeners.forEach(function(_handler, index){
						if(_handler.uuid == uuid){
							handler = _handler
							events[eventName].listeners.splice(index, 1);
						}
					})
				
					events[eventName].remove(handler.listener)
					.then(function (argument) {
						resolve(handler)
					})
					.catch(reject);
				}
				catch(e){
					reject({
						step: 'validateEventRemover',
						originalError: e.toString(),
						message: 'Action "' + eventName + '" is invalid.'
					});
				}
				

			};
			return new Promise(promise);
		}

		chrome.runtime.onConnectExternal.addListener(function(port) {
			var onPortMessage = function(message) {
				if(message.addListener){
					var listener = function() {
						var response = {
							arguments: arguments
						}
						port.postMessage(response);
					}

					validateEventAdder(message.name, message.uuid, listener)
					.then(function (handler) {
						handler.port = port;
					})
					.catch(function(error){
						var response = {
							error : error
						}
						port.postMessage(response);
					})
				
				}
				else if(message.removeListener){
					
					validateEventRemover(message.name, message.uuid)
					.then(function (handler) {
						port.disconnect();
					})
					.catch(function(error){
						port.disconnect();
					})
				
				}
				else{
					var response = {}
					validateMethod(message.name, message.arguments)
					.then(function(){
						response.arguments = arguments;
						port.postMessage(response);
						port.disconnect();


					})
					.catch(function(error){
						response.error = error;
						port.postMessage(response);
						port.disconnect();
					})
				}		
			};
			var onPortDisconnect = function(port){
				port.onMessage.removeListener(onPortMessage);
				port.onDisconnect.removeListener(onPortDisconnect);

				// Check if there was any listeners attached to that port
				Object.keys(events).forEach(function (eventName) {
				
					events[eventName].listeners.forEach(function (handler) {
						
						if(handler.port == port)
							validateEventRemover(
								handler.eventName,
								handler.uuid,
								handler.listener
							);
					})
				})
			}
			port.onMessage.addListener(onPortMessage);
			port.onDisconnect.addListener(onPortDisconnect);
		});

		Object.defineProperty(self, 'registerMethod', {
			value: registerMethod
		});
		Object.defineProperty(self, 'registerEvent', {
			value: registerEvent
		});
	}

	if(typeof define !== 'undefined'){
		define([], function(){
			return ChromeExtensionAPIServer;
		});
	}
	else if (typeof exports !== 'undefined'){
		exports.ChromeExtensionAPIServer = ChromeExtensionAPIServer;
	}
	else window.ChromeExtensionAPIServer = ChromeExtensionAPIServer;
})();