from flask import Flask, send_file
from test import Test

app = Flask(__name__)


@app.route("/carbitrage/")
def index():
    return send_file("templates/index.html")


@app.route("/carbitrage/gettest")
def get_test():
    t = Test();
    print(t.my_first_function());
    return t.my_first_function();


if __name__ == "__main__":
    app.run()