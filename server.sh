#!/bin/bash

start_server() {
	python3 -m http.server &
}

css() {
	sass --watch css/input.sass:css/output.css &
}

stop() {
	ps | grep python | grep -v grep | awk '{print "kill -9 " $1}' | sh
	ps | grep sass | grep -v grep | awk '{print "kill -9 " $1}' | sh
}

if [ "$1" = "start" ]
then
	start_server
	css
elif [ "$1" = "stop" ]
then
	stop
	kill -9 $$
else
	echo "fail"
fi

