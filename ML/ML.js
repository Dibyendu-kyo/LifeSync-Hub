const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

const diseaseData = [
    { symptoms: ['fever', 'headache'], disease: 'Flu' },
    { symptoms: ['cough', 'shortness of breath'], disease: 'COVID-19' },
    { symptoms: ['itching', 'skin rash'], disease: 'Fungal Infection' },
    { symptoms: ['itching'], disease: 'Fungal Infection' },
    { symptoms: ['skin rash'], disease: 'Fungal Infection' },
    { symptoms: ['continuous sneezing', 'shivering'], disease: 'Allergy' },
    { symptoms: ['shivering'], disease: 'Allergy' },
    { symptoms: ['continuous sneezing'], disease: 'Allergy' },
    { symptoms: ['stomach pain', 'acidity'], disease: 'GERD' },
    { symptoms: ['stomach ache', 'acidity'], disease: 'GERD' },
    { symptoms: ['stomach pain'], disease: 'GERD' },
    { symptoms: ['stomach ache'], disease: 'GERD' },
    { symptoms: ['acidity'], disease: 'GERD' },
    { symptoms: ['itching', 'vomitting'], disease: 'Chronic cholestasis' },
    { symptoms: ['itching'], disease: 'Chronic cholestasis' },
    { symptoms: ['itching', 'skin rash','stomach ache'], disease: 'Drug Reaction' },
    { symptoms: ['itching', 'skin rash','stomach ache'], disease: 'Drug Reaction' },
    { symptoms: ['vomitting'], disease: 'Peptic Ulcer Disease' },
    { symptoms: ['vomitting','indigestion'], disease: 'Peptic Ulcer Disease' },
    { symptoms: ['indigestion'], disease: 'Peptic Ulcer Disease' },
    { symptoms: ['high fever','muscle pain'], disease: 'AIDS' },
    { symptoms: ['weight loss','restlessness','lethargy'], disease: 'Diabetes' },
    { symptoms: ['weight loss','lethargy'], disease: 'Diabetes' },
    { symptoms: ['weight loss','restlessness'], disease: 'Diabetes' },
    { symptoms: ['restlessness','lethargy'], disease: 'Diabetes' },
    { symptoms: ['vomitting','sunken eyes','dehydration','diarrhoea'], disease: 'Gastroenteritis' },
    { symptoms: ['sunken eyes','dehydration','diarrhoea'], disease: 'Gastroenteritis' },
    { symptoms: ['vomitting','dehydration','diarrhoea'], disease: 'Gastroenteritis' },
    { symptoms: ['vomitting','sunken eyes','diarrhoea'], disease: 'Gastroenteritis' },
    { symptoms: ['vomitting','sunken eyes','dehydration'], disease: 'Gastroenteritis' },
    { symptoms: ['dehydration','diarrhoea'], disease: 'Gastroenteritis' },
    { symptoms: ['vomitting','diarrhoea'], disease: 'Gastroenteritis' },
    { symptoms: ['vomitting','sunken eyes'], disease: 'Gastroenteritis' },
    { symptoms: ['cough','high fever','breathlessness'], disease: 'Bronchial Asthma' },
    { symptoms: ['high fever','breathlessness'], disease: 'Bronchial Asthma' },
    { symptoms: ['cough','breathlessness'], disease: 'Bronchial Asthma' },
    { symptoms: ['cough','high fever','breathlessness'], disease: 'Bronchial Asthma' },
    { symptoms: ['chest pain','headache'], disease: 'Hypertension' },
    { symptoms: ['high fever','headache'], disease: 'Common Cold' },
    { symptoms: ['headache'], disease: 'Hypertension' },
    { symptoms: ['vomitting','headache'], disease: 'Stomach Infection' },
    { symptoms: ['vomitting'], disease: 'Stomach Infection' },
    { symptoms: ['high fever','weight loss'], disease: 'Jaundice' },
    { symptoms: ['cough','high fever','headache','chest pain'], disease: 'Common Cold' },
    { symptoms: ['cough','high fever','headache'], disease: 'Common Cold' },
    { symptoms: ['high fever','headache','chest pain'], disease: 'Common Cold' },
    { symptoms: ['cough','high fever'], disease: 'Common Cold' },
    { symptoms: ['headache','chest pain'], disease: 'Common Cold' },
    { symptoms: ['cough','high fever','headache','sneezing'], disease: 'Common Cold' },
    { symptoms: ['high fever','headache','sneezing'], disease: 'Common Cold' },
    { symptoms: ['cough','headache','sneezing'], disease: 'Common Cold' },
    { symptoms: ['cough','high fever','sneezing'], disease: 'Common Cold' },
    { symptoms: ['cough','sneezing'], disease: 'Common Cold' },
    { symptoms: ['high fever','sneezing'], disease: 'Common Cold' },
    { symptoms: ['headache','sneezing'], disease: 'Common Cold' },
    { symptoms: ['indigestion','headache'], disease: 'Migrane' },
    { symptoms: ['back pain','leg pain'], disease: 'Spondolities' },
    { symptoms: ['leg pain'], disease: 'Arthirities' },
    { symptoms: ['back pain'], disease: 'Spondolities' },
    // Add more symptom-disease mappings as needed
];

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // Display user message in the chatbox
    appendMessage('User', userMessage);

    // Process user symptoms and detect disease
    const detectedDisease = detectDisease(userMessage);

    // Display detected disease in the chatbox
    appendMessage('Chatbot', `Based on your symptoms, it could be ${detectedDisease}.`);

    // Clear user input
    userInput.value = '';
}

function detectDisease(userSymptoms) {
    // Convert user input to lowercase and split into an array of symptoms
    const symptomsArray = userSymptoms.toLowerCase().split(',');

    // Iterate through disease data to find a matching disease
    for (const data of diseaseData) {
        const intersection = data.symptoms.filter(symptom => symptomsArray.includes(symptom));
        if (intersection.length === data.symptoms.length) {
            return data.disease;
        }
    }

    // Return a default message if no matching disease is found
    return 'Any disease but we currently do not have enough information. Consult a healthcare professional for accurate diagnosis.';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatbox.appendChild(messageElement);

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}
