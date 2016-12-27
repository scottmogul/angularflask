from flask import Flask, send_file
from test import Test
import json

app = Flask(__name__)


@app.route("/carbitrage/")
def index():
    t = Test()
    print(t.my_first_function())
    return send_file("templates/index.html")


if __name__ == "__main__":
    app.run()