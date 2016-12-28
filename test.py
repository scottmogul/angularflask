import json


class Test:
    def my_first_function(self):
        vehicles = {'id': "1", 'coordinates': ["40.04968", "-82.83061900000001"], 'model': "Silverado 1500", 'make': "Cheverolet", 'price': "48000"}, \
                    {'id': "2", 'coordinates': ["40.004", "-82.9001"], 'model': "Civic", 'make': "Honda", 'price': "23000"}, \
                    {'id': "3", 'coordinates': ["40.003", "-82.9002"], 'model': "Highlander", 'make': "Toyota", 'price': "23000"}, \
                    {'id': "4", 'coordinates': ["40.033", "-82.9003"], 'model': "Pilot", 'make': "Honda", 'price': "23000"}, \
                    {'id': "5", 'coordinates': ["40.002", "-82.9004"], 'model': "Accord", 'make': "Honda", 'price': "23000"}, \
                    {'id': "6", 'coordinates': ["40.001", "-82.9005"], 'model': "Tacoma", 'make': "Toyota", 'price': "23000"}
        return json.dumps(vehicles)

if __name__ == '__main__':
    t = Test()
    print(t.my_first_function())
