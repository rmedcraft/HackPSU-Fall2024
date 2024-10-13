import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer, pipeline, AutoModelForCausalLM
import pickle


def classifier(text):

    tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")

    model = AutoModelForSequenceClassification.from_pretrained("mental-health-classifier", torch_dtype=torch.float16 )

    text = "my day was awful"

    output = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)
    
    
    return translate(output(text))


def translate(output):
    match output[0]["label"]:
        case "LABEL_0":
            value = "BPD"
        case "LABEL_1":
            value = "bipolar"
        case "LABEL_2":
            value = "depression"
        case "LABEL_3":
            value = "Anxiety"
        case "LABEL_4":
            value = "schizophrenia"
        case "LABEL_5":
            value = "mental illness"

    return value, output[0]["score"]


def chat(text):

    model = AutoModelForCausalLM.from_pretrained(
        "microsoft/Phi-3-mini-4k-instruct", #specify the model
        device_map="cuda",
        torch_dtype="auto", #chose the datatype
        trust_remote_code=True,
    )


    tokenizer = AutoTokenizer.from_pretrained("microsoft/Phi-3-mini-4k-instruct")

    #combine the tokenizer and model into a pipeline
    generator = pipeline(
        "text-generation", 
        model=model,
        tokenizer=tokenizer,
        return_full_text=False, # the prompt will not be returned and just the give the output
        max_new_tokens=500, # Limit the amount of tokens returned
        do_sample=False # model will always pick the most likely token
    )


    messages = [
        {"role": "user", "content": text}
    ]

    # Generate output
    output = generator(messages)

    
    return(output[0]["generated_text"])

def randomforestmodels():
    # Load the depression model
    with open('depression_model.pkl', 'rb') as file:
        depression_model = pickle.load(file)

    # Load the anxiety model
    with open('anxiety_model.pkl', 'rb') as file:
        anxiety_model = pickle.load(file)

    # Load the panic attack model
    with open('panic_attack_model.pkl', 'rb') as file:
        panic_attack_model = pickle.load(file)

    return depression_model, anxiety_model, panic_attack_model

