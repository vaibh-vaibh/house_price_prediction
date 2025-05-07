import pandas as pd
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

house = pd.read_csv('clean_data.csv')
pipe = pickle.load(open('XGBoostingModel.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    city = data.get('city')
    bhk = data.get('bhk')
    size = data.get('size')
    floor = data.get('floor')
    area_type = data.get('areatype')
    furnishing_status = data.get('furnishingStatus')
    bathrooms = data.get('bathroom')

    print(city, bhk, size, floor, area_type, furnishing_status, bathrooms)
    input_data = pd.DataFrame([[city, bhk, size, floor, area_type, furnishing_status, bathrooms]],
                              columns=['City', 'BHK', 'Size', 'Floor', 'Area Type', 'Furnishing Status', 'Bathroom'])
    prediction = pipe.predict(input_data)[0]


    return jsonify({'predictedPrice': str(prediction)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
