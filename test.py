import json


class Test:
    def my_first_function(self):
        vehicle = {'id': "1", 'model': "Silverado 1500", 'make': "Cheverolet", 'price': "48000"}, \
                  {'id': "2", 'model': "Silverado 1500", 'make': "Cheverolet", 'price': "48000"}, \
                  {'id': "3", 'model': "Silverado 1500", 'make': "Cheverolet", 'price': "48000"}
        return json.dumps(vehicle)

if __name__ == '__main__':
    t = Test()
    print(t.my_first_function())
