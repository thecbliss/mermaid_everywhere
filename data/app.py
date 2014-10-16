import time
import csv
from geopy.geocoders import Nominatim

geolocator = Nominatim()
with open('mermaidtable.csv', 'r') as f:
	reader = csv.reader(f)
	c = open('output.txt', 'wb')
	for row in reader:
		try:
			location = geolocator.reverse((row[5],row[4]))
			c.write(row)
			print(location.address)
		except:
			print('none avaliable')
