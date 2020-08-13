#!D:/Users/PixelBoss100/AppData/Local/Programs/Python/Python38-32/python.exe
print("Content-Type: text/html\n") # required for web

import os, sys, urllib.parse, json, datetime
#print(os.environ)

#query_string = 'action=save&savestring=[Reese]: dfds' # I use this so that I can test the script in the dos commandline, I can see more errors this way
#query_string = 'action=getchat&apikey=12' # I use this so that I can test the script in the dos commandline, I can see more errors this way
query_string = sys.stdin.read() # this is for getting info from javascript via post data from javascript
#print(query_string)

#print ("hello2")


#urllib.parse.urlparse('https://someurl.com/with/query_string?a=1&b=2&b=3').query
#    a=1&b=2&b=3
#urllib.parse.parse_qs('a=1&b=2&b=3');
#    {'a': ['1'], 'b': ['2','3']}
	
qstring_array = urllib.parse.parse_qs(query_string)
	
#print (qstring_array)
#print (qstring_array['savestring'][0])

if qstring_array['action'][0] == 'save':
	savestring = qstring_array['savestring'][0]
	
action = qstring_array['action'][0]
apikey = qstring_array['apikey'][0]

#print(type(apikey))

if apikey!='12':
	#print('before sys')
	sys.exit()

#print ('made it past api test')
#print ('action: ' + action)
#print ('savestring: ' + savestring)

#print(savestring)
#print(type(savestring))

# connect to db
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  database="gn_chat",
  user="root",
  password=""
)

##################################################
# Functions
##################################################
	
def save_chatstring(chatstring):
	#print('saving chatstring')
	mycursor = mydb.cursor()

	sql = "INSERT INTO chatlog (chatstring, note) VALUE (%s, %s)"
	val = (chatstring, '')
	
	#print ("sql: " + sql)
	#print("val: " + val)
	mycursor.execute(sql, val)
    
	mydb.commit()
    
	#print(mycursor.rowcount, "record inserted.")


def load_chatlog():	
	#print('loading chatlog')	
	#https://stackoverflow.com/questions/464040/how-are-post-and-get-variables-handled-in-python
	#import os, sys

	# the query string, which contains the raw GET data
	# (For example, for http://example.com/myscript.py?a=b&c=d&e
	# this is "a=b&c=d&e")
	#os.getenv("QUERY_STRING")

	# the raw POST data
	#sys.stdin.read()
	
	#print(mydb)  # this does not display on the page, but it does in the source.


	# run sql query to get last 25 chat entries
	mycursor = mydb.cursor()

	#mycursor.execute("SELECT * FROM chatlog")
	mycursor.execute("SELECT chatstring, ID, `date` FROM (SELECT chatstring, ID, `date` FROM chatlog ORDER BY id DESC LIMIT 20) sub ORDER BY id ASC")

	myresult = mycursor.fetchall()
	#return (myresult)
	
	#date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
	
	#myresult_json = myresult #json.dumps(myresult)
	myresult_json = json.dumps(myresult)
	#print(type(myresult[1][2]))
	print(myresult_json)
	#print(type(myresult))
	#print('end chatlog')
	#print(json.dumps(myresult))
	
	
	#for x in myresult:
	#  print(x)
	  
	# send back the values in json


##################################################
# Code
##################################################	
	
if action == "save":
	#print("save block")
	save_chatstring(savestring)	
	load_chatlog()
	
if action == 'getchat':	
	#print('i am getting chat')
	load_chatlog()	







#import cgi
#form = cgi.FieldStorage()
#chattext =  form.getvalue('chattext')
#
#
#print (chattext)



# store chattext in database

# refresh chat log



#
## importing the requests library 
#import requests 
#  
## api-endpoint 
#URL = "http://maps.googleapis.com/maps/api/geocode/json"
#  
## location given here 
#location = "delhi"
#  
## defining a params dict for the parameters to be sent to the API 
#PARAMS = {'address':location} 
#
#print (PARAMS)
#  
## sending get request and saving the response as response object 
#r = requests.get(url = URL, params = PARAMS) 
#  
#print(r)
## extracting data in json format 
#data = r.json() 
#
#print(data)
#  
#  
## extracting latitude, longitude and formatted address  
## of the first matching location 
#latitude = data['results'][0]['geometry']['location']['lat'] 
#longitude = data['results'][0]['geometry']['location']['lng'] 
#formatted_address = data['results'][0]['formatted_address'] 
#  
## printing the output 
#print("Latitude:%s\nLongitude:%s\nFormatted Address:%s"
#      %(latitude, longitude,formatted_address)) 