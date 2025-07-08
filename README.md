# Mental Health Detection (Anxiety, Stress, Depression)

This project is a Machine Learning-based web application designed to predict the mental health status of users—specifically **Anxiety**, **Stress**, and **Depression**—through their responses to a set of curated questions. It offers a seamless user interface and personalized health suggestions, aiming to promote mental well-being through technology.

---

## Project Overview

Mental health issues are becoming increasingly prevalent in modern society, yet many individuals hesitate to seek help due to social stigma, lack of awareness, or limited access to healthcare. This project offers a **private**, **accessible**, and **interactive** solution that allows users to self-assess their mental state.

Users fill out a form-based questionnaire via a clean and responsive **HTML/CSS frontend**. Their inputs are processed by a **Flask-based backend**, which uses trained ML models to classify their mental health condition. Personalized **diet and workout suggestions** are also provided based on the predicted outcome.

---

## Tech Stack

- **Frontend**: HTML5, CSS3  
- **Backend**: Flask (Python)
- **Machine Learning**: Scikit-learn, Pandas, NumPy
- **Modeling Techniques**:
  - Random Forest Classifier
  - MultiOutputClassifier with Random Forest
  - HistGradientBoostingClassifier (Final Model)
- **Model Optimization**: GridSearchCV

---

## Features

- 💬 Predicts **Anxiety**, **Stress**, and **Depression** levels.
- ✅ Uses a **multi-label classification** approach.
- 📊 Optimized using **GridSearchCV** for better accuracy.
- 🖥️ Fully functional and responsive **frontend UI**.
- 🥗 Provides **personalized diet and workout plans**.
- 🔒 Ensures **user privacy** and avoids invasive inputs.
- 📦 Lightweight, easily deployable (supports Heroku, Render, etc.)

---
