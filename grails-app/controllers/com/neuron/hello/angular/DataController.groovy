package com.neuron.hello.angular

import grails.converters.JSON

class DataController {

    def checkout(){
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
		data3.put("name","neuron")
		data3.put("nick", "yoyoyo")
		dataarray.add(data3)
		render dataarray as JSON
	}
}