from flask import Flask, render_template, request
import numpy as np
import pandas as pd
import pickle

app = Flask(__name__)

# Load the trained model and scaler
with open('mental_health_histgb_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

try:
    recommendation_df = pd.read_csv('Test_Model.csv', encoding='Windows-1252')  
    print("Recommendation dataset loaded successfully")
except Exception as e:
    print(f"Error loading recommendation dataset: {e}")

def recommend_plan(anxiety_label, stress_label, depression_label):
    # Filter the dataset for matching labels
    recommendation = recommendation_df[
        (recommendation_df['Anxiety_Label'] == anxiety_label) & 
        (recommendation_df['Stress_Label'] == stress_label) & 
        (recommendation_df['Depression_Label'] == depression_label)
    ]
    
    if not recommendation.empty:
        workout = recommendation['Workout'].values[0]
        diet = recommendation['Diet'].values[0]
        return workout, diet
    else:
        return "No recommendation found", "No recommendation found"

# Route for the form page
@app.route('/')
def home():
    return render_template('index.html')

# Route for handling form submission and prediction
@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Collect responses from the form
        responses = {
            'Q1': int(request.form['anxiety1']),
            'Q2': int(request.form['anxiety2']),
            'Q3': int(request.form['anxiety3']),
            'Q4': int(request.form['anxiety4']),
            'Q5': int(request.form['anxiety5']),
            'Q6': int(request.form['anxiety6']),
            'Q7': int(request.form['anxiety7']),
            'r1': int(request.form['stress1']),
            'r2': int(request.form['stress2']),
            'r3': int(request.form['stress3']),
            'r4': int(request.form['stress4']),
            'r5': int(request.form['stress5']),
            'r6': int(request.form['stress6']),
            'r7': int(request.form['stress7']),
            'r8': int(request.form['stress8']),
            'r9': int(request.form['stress9']),
            'r10': int(request.form['stress10']),
            's1': int(request.form['depression1']),
            's2': int(request.form['depression2']),
            's3': int(request.form['depression3']),
            's4': int(request.form['depression4']),
            's5': int(request.form['depression5']),
            's6': int(request.form['depression6']),
            's7': int(request.form['depression7']),
            's8': int(request.form['depression8']),
            's9': int(request.form['depression9']),
        }
        
        # Convert responses to DataFrame
        input_data = pd.DataFrame([responses])
        print(f"Input data shape: {input_data.shape}")
        
        # Scale the input data
        scaled_data = scaler.transform(input_data)
        scaled_data_df = pd.DataFrame(scaled_data, columns=input_data.columns)
        print(f"Scaled data shape: {scaled_data.shape}")
        
        # Ensure the model is loaded correctly
        print(f"Model type: {type(model)}")

        # Predict the labels for anxiety, stress, and depression
        predicted_labels = model.predict(scaled_data_df)
        print(f"Predicted labels: {predicted_labels}")
        
        anxiety_label, stress_label, depression_label = predicted_labels[0]

        workout, diet = recommend_plan(anxiety_label, stress_label, depression_label)
        
        return render_template(
            'result.html',
            anxiety=anxiety_label,
            stress=stress_label,
            depression=depression_label,
            workout=workout,
            diet=diet
        )

if __name__ == '__main__':
    app.run(debug=True)














# from flask import Flask, render_template, request
# import numpy as np
# import pandas as pd
# import pickle

# app = Flask(__name__)

# # Load the trained model and scaler
# with open('mental_health_histgb_model.pkl', 'rb') as model_file:
#     model = pickle.load(model_file)

# with open('scaler.pkl', 'rb') as scaler_file:
#     scaler = pickle.load(scaler_file)

# try:
#     recommendation_df = pd.read_csv('Test_Model.csv', encoding='Windows-1252')  
#     print("Recommendation dataset loaded successfully")
# except Exception as e:
#     print(f"Error loading recommendation dataset: {e}")

# def recommend_plan(anxiety_label, stress_label, depression_label):
#     # Filter the dataset for matching labels
#     recommendation = recommendation_df[
#         (recommendation_df['Anxiety_Label'] == anxiety_label) & 
#         (recommendation_df['Stress_Label'] == stress_label) & 
#         (recommendation_df['Depression_Label'] == depression_label)
#     ]
    
#     if not recommendation.empty:
#         workout = recommendation['Workout'].values[0]
#         diet = recommendation['Diet'].values[0]
#         return workout, diet
#     else:
#         return "No recommendation found", "No recommendation found"

# # Route for the form page
# @app.route('/')
# def home():
#     return render_template('index.html')

# # Route for handling form submission and prediction
# @app.route('/predict', methods=['POST'])
# def predict():
#     if request.method == 'POST':
#         # Collect responses from the form
#         responses = {
#             'Q1': int(request.form['anxiety1']),
#             'Q2': int(request.form['anxiety2']),
#             'Q3': int(request.form['anxiety3']),
#             'Q4': int(request.form['anxiety4']),
#             'Q5': int(request.form['anxiety5']),
#             'Q6': int(request.form['anxiety6']),
#             'Q7': int(request.form['anxiety7']),
#             'r1': int(request.form['stress1']),
#             'r2': int(request.form['stress2']),
#             'r3': int(request.form['stress3']),
#             'r4': int(request.form['stress4']),
#             'r5': int(request.form['stress5']),
#             'r6': int(request.form['stress6']),
#             'r7': int(request.form['stress7']),
#             'r8': int(request.form['stress8']),
#             'r9': int(request.form['stress9']),
#             'r10': int(request.form['stress10']),
#             's1': int(request.form['depression1']),
#             's2': int(request.form['depression2']),
#             's3': int(request.form['depression3']),
#             's4': int(request.form['depression4']),
#             's5': int(request.form['depression5']),
#             's6': int(request.form['depression6']),
#             's7': int(request.form['depression7']),
#             's8': int(request.form['depression8']),
#             's9': int(request.form['depression9']),
#         }
        
#         # Convert responses to DataFrame
#         input_data = pd.DataFrame([responses])
#         print(f"Input data shape: {input_data.shape}")
        
#         # Scale the input data
#         scaled_data = scaler.transform(input_data)
#         scaled_data_df = pd.DataFrame(scaled_data, columns=input_data.columns)
#         print(f"Scaled data shape: {scaled_data.shape}")
        
#         # Ensure the model is loaded correctly
#         print(f"Model type: {type(model)}")

#         # Predict the labels for anxiety, stress, and depression
#         predicted_labels = model.predict(scaled_data_df)
#         print(f"Predicted labels: {predicted_labels}")
        
#         anxiety_label, stress_label, depression_label = predicted_labels[0]

#         workout, diet = recommend_plan(anxiety_label, stress_label, depression_label)
        
#         return render_template(
#             'result.html',
#             anxiety=anxiety_label,
#             stress=stress_label,
#             depression=depression_label,
#             workout=workout,
#             diet=diet
#         )

# if __name__ == '__main__':
#     app.run(debug=True)
