package com.neuron.hello.angular

import grails.converters.JSON

class HomeController {
	
	static allowedMethods = [showPeopleGoingToMars:"GET"]
    def index() {
		
	}
	def route(){
		
	}
	def list(){
		println "got a hit"
		def data = [:],data1=[:],data2=[:],data3=[:]
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
	def check(){
		render "prove it"
	}
	def showPeopleGoingToMars(){
		println "we are hreere"+params
		def people = [],human=[:]
		human.put("name", "arvind")
		people.add(human)
		human.put("name", "krillin")
		people.add(human)
		human.put("name", "batman")
		people.add(human)
		respond people, [formats:['json', 'xml']];
	}
}
