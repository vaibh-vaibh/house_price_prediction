import pandas as pd
import numpy as np
import pickle

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import make_column_transformer
from sklearn.pipeline import make_pipeline
from xgboost import XGBRegressor

# load data
df = pd.read_csv('clean_data.csv')

# drop columns not need in model
if 'price_per_sqft' in df.columns:
    df.drop('price_per_sqft', axis=1, inplace=True)

# define x and y
X = df.drop('Price', axis=1)
y = df['Price']

# split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# create column transformer (for encoding+scalar)
ohe = OneHotEncoder(handle_unknown='ignore', sparse_output=False)
scalar = StandardScaler()

# categorical+numerical columns
categorical = ['City', 'Area Type', 'Furnishing Status', 'Floor']
numerical = ['Size', 'BHK', 'Bathroom']

preprocessor = make_column_transformer(
    (ohe, categorical),
    (scalar, numerical)
)

# create pipeline and train
model = XGBRegressor()
pipe = make_pipeline(preprocessor, model)

pipe.fit(X_train, y_train)

# save model into a pickle file
with open('XGBoostingModel.pkl', 'wb') as f:
    pickle.dump(pipe,f)

# print message
print("Model trained and saved as XGBoostingModel.pkl")