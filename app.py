#!/usr/bin/python3

"""
    app.py

    Mediawiki toolforge apps gallery: a collection of demo apps built using the
    MediaWiki Action APIs.

    MIT license
"""

import json
import flask
import requests


app = flask.Flask(__name__)
SESSION = requests.Session()


@app.route('/')
def index():
    """ Displays the index page accessible at '/'
    """

    with open('tools.json', 'r') as file:
        data = file.read()
        apps = json.loads(data)

    return flask.render_template('index.html', apps=apps)


if __name__ == '__main__':
    app.run(debug=True)
