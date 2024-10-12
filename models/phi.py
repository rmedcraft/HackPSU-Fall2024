from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

def talk(text):
    model = AutoModelForCausalLM.from_pretrained(
        "microsoft/Phi-3-mini-4k-instruct", #specify the model
        device_map="cuda", #specify the gpu as nvidia
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
        {"role": "therapist encoraging a patent to talk", "content": text}
    ]

    # Generate output
    output = generator(messages)
    print(output[0]["generated_text"])