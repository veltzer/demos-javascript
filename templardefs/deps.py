'''
dependencies for this project
'''

def populate(d):
    d.tools=[
        'jsl',
    ]
    d.packs=[
        # libraries
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
        'libjs-yui3-common',
        'libjs-yui3-debug',
        'libjs-yui3-doc',
        'libjs-yui3-full',
        'libjs-yui3-min',
        'libjs-backbone',
        'libjs-mootools',
        'libjs-scriptaculous',
        # tools
        'yui-compressor',
        'slimit',
        'shrinksafe',
        'closure-linter',
        #'yui-builder',
    ]

def getdeps():
    return [
        __file__, # myself
    ]
