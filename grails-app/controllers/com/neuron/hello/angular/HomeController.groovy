package com.neuron.hello.angular

import grails.converters.JSON

class HomeController {
	
    def index() {
		
	}
	def list(){
		println "got a hit"
		def data = [:],data1=[:],data2=[:]
		def dataarray = []
		data.put("name", "arvind")
		data.put("nick","89neuron")
		dataarray.add(data)
		data1.put("name", "kakarot")
		data1.put("nick","kakarot +ve")
		dataarray.add(data1)
		data2.put("name","source it open")
		data2.put("nick", "SIO")
		dataarray.add(data2)
		render dataarray as JSON
	}
}
