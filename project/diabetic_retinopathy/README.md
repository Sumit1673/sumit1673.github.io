# Diabetic Retinopathy Analysis Web Services
Chronic or poorly controlled high blood sugar can result in damage to the blood vessels in the retina. The retina is the thin layer of tissue in the back of the eye that receives incoming light and sends signals to your brain through the optic nerve. These signals are perceived as images.

Diabetic retinopathy occurs when the damaged blood vessels leak blood and other fluids into your retina, causing swelling and blurry vision. The blood vessels can become blocked, scar tissue can develop, and retinal detachment can eventually occur. The condition is easiest to treat in the early stages, which is why it is important to undergo routine eye exams.

![Retinopathy](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/Sumit/retinopathy.png?raw=true)

The problem of retinopathy is constantly increasing. Even the developed countries like UK, US and India cannot save themselves from this disease. A good amount of research is going on this area to treat this disease at a very early age. To do this companies like Google are utilizing the power of Deep Learning. A full article about the research in Google can found out [Here!](https://about.google/stories/seeingpotential/).

# Level of Dibetes in the Eye.
# No DR
![No DR](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/label0_002c21358ce6.png?raw=true)

# MILD DR
![MILD](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/label1_0024cdab0c1e.png?raw=true)

# Moderate DR
![MODERATE](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/label2_000c1434d8d7.png?raw=true)

# Severe DR
![SEVERE](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/label3_0104b032c141.png?raw=true)

# Proliferative DR
![Proliferative DR](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/label4_001639a390f0.png?raw=true)


# Use cases of this Web Services
This project is designed for the benefit of hospitals and small clinics in the places or cities where expert doctors or high tech hospitals are not present. Therefore, usign cloud and deep learning idea is to help small hospitals or clinic cure and detect this disease at a very early stage.


# What special about this project.
There are two ways of describing the speciality of the project:
  1. The web app utilizes the power of cloud to reach to the hands of doctors.
  2. Deep learning based classification upto severity level 4 (0 being No DR) gives result in less than 2 mins.
  
 # Deep Learning Model
 ResNet-101 trained for 15 epocs on 9GB of dataset.
 
 # Dataset
 [DR Dataset!](https://www.kaggle.com/c/aptos2019-blindness-detection/data)
 
 # Training Script
 [Notebook!](https://www.kaggle.com/sumitv29/diabeticretinopathy/edit?rvi=1?)
 
 # Development Details
 The versions of django and djongo are very important. Djongo is used to connect django app with mongoDB and probably after this version there was difficulty in 
 connecting 
 # Requirements:
   1. Django=2.2.16
   2. Djongo=1.2.38
   3. Python=3.8.5
   4. Torch=1.7.0+cpu
   5. djagno-crispy-forms
   6. django_extenstions
   7. dnspython
   8. virtualenv
   
 # Website Snippets
 
 ![Home](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/home.png?raw=true)
 ![Login](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/login.png?raw=true)
 ![Workspace](https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch/blob/master/workspace.png?raw=true)
 
