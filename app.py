#!/usr/bin/python3

"""
    app.py

    Mediawiki toolforge apps gallery: a collection of demo apps built using the
    MediaWiki Action APIs.

    MIT license
"""

import json
from flask import Flask, render_template
import requests


APP = Flask(__name__)
SESSION = requests.Session()


@APP.route('/')
def index():
    """ Displays the index page accessible at '/'
    """

    with open('apps.json', 'r') as file:
        data = file.read()
        apps = json.loads(data)

    return render_template('index.html', apps=apps)


if __name__ == '__main__':
    APP.run(debug=True)
