# a script to request a ranfdom or specific chiquito quote
import os
import random
import requests
import json
import sys

# for a specific id get from https://chiquitadas.es/api/quote/{id} if is random get from https://chiquitadas.es/api/quotes/avoleorrr
# return the string contained in the json response field "quote"
def get_quote(quote_id=None):
    if quote_id is None:
        url = "https://chiquitadas.es/api/quotes/avoleorrr"
    else:
        url = f"https://chiquitadas.es/api/quote/{quote_id}"
    response = requests.get(url)
    if response.status_code == 200:
        data = json.loads(response.text)
        if quote_id is None:
            return random.choice(data)["quote"]
        else:
            return data["quote"]
    else:
        return None
    
if __name__ == "__main__":
    if len(sys.argv) > 1:
        quote_id = sys.argv[1]
    else:
        quote_id = None
    quote = get_quote(quote_id)
    if quote is not None:
        #  use figlet to print the quote in a nice way
        os.system(f"figlet -f slant '{quote}'")
    else:
        os.system("figlet -f slant 'Error: Quote not found'")