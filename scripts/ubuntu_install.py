#!/usr/bin/python

# this script will install all the required packages that you need on
# ubuntu to compile and work with this package.

import subprocess # for check_call
import urllib2 # for urlopen
import os # for mkdir
import os.path # for isdir, isfile
import zipfile # for ZipFile

def download(url,output_file):
	if not os.path.isfile(output_file):
		opener = urllib2.build_opener()
		opener.addheaders = [('User-agent', 'Mozilla/5.0')]
		response = opener.open(url)
		f=open(output_file,'w')
		f.write(response.read())
		f.close()

packs=[
	'libjs-jquery',
	'libjs-jquery-mobile',
	'libjs-prototype',
	'libjs-json',
	'libjs-raphael',
	'libjs-jquery-ui',
	'libjs-jquery-ui-docs',
	'libjs-jquery-ui-theme-ui-lightness',
	'libjs-dojo-core',
	'libjs-dojo-dijit',
	'libjs-dojo-dojox',
	'libjs-extjs',
	'libjs-extjs-doc',
	'libjs-yui',
	#'libjs-yui2',
	'libjs-yui-doc',
	'libjs-yui3-common',
	'libjs-yui3-debug',
	'libjs-yui3-doc',
	'libjs-yui3-full',
	'libjs-yui3-min',
	'yui-builder',
	'yui-compressor',
	'libjs-backbone',
	'libjs-mootools',
	'libjs-scriptaculous',
]

args=['sudo','apt-get','install']
args.extend(packs)
subprocess.check_call(args)

# now install stuff which is not in the ubuntu store...

# this is so apache will be able to access all the stuff that we create below...
os.umask(0022)

if not os.path.isdir('download'):
	os.mkdir('download')

download('http://code.highcharts.com/zips/Highcharts-3.0.5.zip', 'download/Highcharts-3.0.5.zip')
if not os.path.isdir('download/Highcharts'):
	os.mkdir('download/Highcharts')
	z=zipfile.ZipFile('download/Highcharts-3.0.5.zip', 'r')
	z.extractall('download/Highcharts')
	z.close()

folder='download/extjs'
fname='ext-4.2.1-gpl.zip'
url_prefix='http://cdn.sencha.com/ext/gpl'
local_file=os.path.join('download', fname)
remote_file=os.path.join(url_prefix, fname)
download(remote_file, local_file) 
if not os.path.isdir(folder):
	z=zipfile.ZipFile(local_file, 'r')
	z.extractall('download')
	z.close()
	os.rename('download/ext-4.2.1.883', folder)
