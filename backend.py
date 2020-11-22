import os
import json
import sys
from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from werkzeug.exceptions import HTTPException, NotFound, MethodNotAllowed, BadRequest
from random import randint


def create_app(test_config=None):
    app = Flask(__name__)

    # allowing cors from all domains
    CORS(app)

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers',
                             "Content-Tpe,Authorization,true")
        response.headers.add('Access-Control-Allow-Methods',
                             'GET,PUT,POST,PATCH,DELETE,OPTIONS')
        return response

    # routes :
    @app.route('/')
    def index():
        print('index api hit')
        return jsonify({
            "success": True
        })

    @app.route('/profile/data')
    def list_all_profiles():
        try:
            print("profile data hit")
            profiles_meta_data = {
                "October": "10",
                "September": "4",
                "August": "3",
                "July": "7",
                "June": "5",
            }
            return jsonify({
                "success": True,
                "profiles": profiles_meta_data
            })
        except Exception as e:
            x = str(e)[:3]
            abort(int(x))

    @app.route('/profile/energy')
    def get_third_party_data():
        try:
            print("energy data hit")

            return jsonify({
                "success": True,
                "energy": randint(500, 1000)
            })
        except Exception as e:
            x = str(e)[:3]
            abort(int(x))

    @app.route('/articles')
    def list_all_articles():
        try:
            print("article data hit")
            articleone = [
                {
                    "title": "COVID-Delayed Arctic Research",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat mergitur",
                    "illustration": "https://i.imgur.com/L873889.jpg",
                    "link": "https://www.sciencedaily.com/releases/2020/11/201111180655.htm"
                },
                {
                    "title": "Study: Urban Greenery",
                    "subtitle": "Lorem ipsum dolor sit amet",
                    "illustration": "https://i.imgur.com/DWVuwMc.jpeg",
                    "link": "https://climate.nasa.gov/news/3043/study-urban-greenery-plays-a-surprising-role-in-greenhouse-gas-emissions/"
                },
                {
                    "title": "Beating Back the Tides",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat ",
                    "illustration": "https://i.imgur.com/qKqZtKW.jpg",
                    "link": "https://climate.nasa.gov/news/3041/beating-back-the-tides/"
                },
                {
                    "title": "Anatomy of Glacial Ice Loss",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat mergitur",
                    "illustration": "https://i.imgur.com/UlEkIeo.jpg",
                    "link": "https://climate.nasa.gov/news/3038/the-anatomy-of-glacial-ice-loss/"
                },
                {
                    "title": "The lone tree, majestic landscape of New Zealand",
                    "subtitle": "Lorem ipsum dolor sit amet",
                    "illustration": "https://i.imgur.com/2nCt3Sbl.jpg",
                    "link": "https://www.pinterest.co.uk/pin/520728775635616513/"
                }
            ]
            articletwo = [
                {
                    "title": "Fishings Hidden Carbon Footprint",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat mergitur",
                    "illustration": "https://i.imgur.com/Kb4BfYO.jpeg",
                    "link": "https://www.newsbreak.com/california/santa-barbara/news/2105400251376/fishings-hidden-carbon-footprint"
                },
                {
                    "title": "Highest Carbon Footprint Food",
                    "subtitle": "Lorem ipsum dolor sit amet",
                    "illustration": "https://i.imgur.com/qZ2W3WL.jpg",
                    "link": "https://ourworldindata.org/food-choice-vs-eating-local"
                },
                {
                    "title": "Shopping and Sustainability",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat ",
                    "illustration": "https://i.imgur.com/XZcax9C.jpeg",
                    "link": "https://sourcingjournal.com/topics/sustainability/us-cotton-trust-protocol-holiday-shopping-sustainability-covid-19-244376/"
                },
                {
                    "title": "Marijuana and Sustaiability",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat mergitur",
                    "illustration": "https://i.imgur.com/RihhhWt.jpg",
                    "link": "https://www.greenentrepreneur.com/article/345097"
                },
                {
                    "title": "The lone tree, majestic landscape of New Zealand",
                    "subtitle": "Lorem ipsum dolor sit amet",
                    "illustration": "https://i.imgur.com/2nCt3Sbl.jpg",
                    "link": "https://www.sciencedaily.com/releases/2020/11/201111180655.htm"
                }
            ]
            articlethree = [
                {
                    "title": "Fishings Hidden Carbon Footprint",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat mergitur",
                    "illustration": "https://i.imgur.com/Kb4BfYO.jpeg",
                    "link": "https://www.newsbreak.com/california/santa-barbara/news/2105400251376/fishings-hidden-carbon-footprint"
                },
                {
                    "title": "Highest Carbon Footprint Food",
                    "subtitle": "Lorem ipsum dolor sit amet",
                    "illustration": "https://i.imgur.com/qZ2W3WL.jpg",
                    "link": "https://ourworldindata.org/food-choice-vs-eating-local"
                },
                {
                    "title": "Shopping and Sustainability",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat ",
                    "illustration": "https://i.imgur.com/XZcax9C.jpeg",
                    "link": "https://sourcingjournal.com/topics/sustainability/us-cotton-trust-protocol-holiday-shopping-sustainability-covid-19-244376/"
                },
                {
                    "title": "Marijuana and Sustaiability",
                    "subtitle": "Lorem ipsum dolor sit amet et nuncat mergitur",
                    "illustration": "https://i.imgur.com/RihhhWt.jpg",
                    "link": "https://www.greenentrepreneur.com/article/345097"
                },
                {
                    "title": "The lone tree, majestic landscape of New Zealand",
                    "subtitle": "Lorem ipsum dolor sit amet",
                    "illustration": "https://i.imgur.com/2nCt3Sbl.jpg",
                    "link": "https://www.sciencedaily.com/releases/2020/11/201111180655.htm"
                }
            ]
            return jsonify({
                "success": True,
                "articleone": articleone,
                "articletwo": articletwo,
                "articlethree": articlethree,
            })
        except Exception as e:
            x = str(e)[:3]
            abort(int(x))

    # error handlers :

    @ app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            "success": False,
            "error": 400,
            "message": "Bad request"
        }), 400

    @ app.errorhandler(412)
    def bad_request(error):
        return jsonify({
            "success": False,
            "error": 412,
            "message": "Precondition for resouce failed",
        }), 412

    @ app.errorhandler(404)
    def error_resource_not_found(error):
        return jsonify({
            "success": False,
            "message": "Resource not found",
            "error": 404
        }), 404

    @ app.errorhandler(500)
    def server_error(error):
        return jsonify({
            "success": False,
            "message": "Internal server error",
            "error": 500
        }), 500

    @ app.errorhandler(422)
    def not_processable(error):
        return jsonify({
            "success": False,
            "error": 422,
            "message": "Request cant be processed"
        }), 422

    @ app.errorhandler(405)
    def not_allowed(error):
        return jsonify({
            "success": False,
            "error": 405,
            "message": "method not allowed"
        }), 405

    @ app.errorhandler(401)
    def auth_error(error):
        return jsonify({
            "success": False,
            "error": 401,
            "message": "Not Authorized"
        })

    @ app.errorhandler(403)
    def auth_error(error):
        return jsonify({
            "success": False,
            "error": 403,
            "message": "Forbidden"
        }), 403

    @ app.errorhandler(409)
    def conflict_error(error):
        return jsonify({
            "success": False,
            "error": 409,
            "message": "Conflict, Resource already exists"
        }), 409

    return app


app = create_app()
if __name__ == "__main__":
    app.run(host='0.0.0.0')
