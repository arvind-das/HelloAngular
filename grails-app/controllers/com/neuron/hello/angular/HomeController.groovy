package com.neuron.hello.angular

import grails.converters.JSON

class HomeController {

	static allowedMethods = [list:'GET']
	
    def index() {
		
	}
	def list(){
		println "got a hit"
		def data = [:],data1=[:]
		def dataarray = []
		data.put("name", "arvind")
		data.put("nick","89neuron")
		dataarray.add(data)
		data1.put("name", "kakarot")
		data1.put("nick","kakarot +ve")
		dataarray.add(data1)
		render dataarray as JSON
	}
}
