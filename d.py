# Let's create comprehensive data about different dog breeds and their tail characteristics
# including genetic factors and "straightening probability" for the website

import json
import pandas as pd

# Create comprehensive dog tail data
dog_tail_data = {
    "breeds": [
        {
            "breed": "Pug",
            "tail_type": "Corkscrew",
            "natural_curl_severity": 95,
            "genetic_factor": "DVL2 mutation (homozygous)",
            "straightening_probability": 0.05,
            "vertebrae_issues": "Fused/wedge-shaped vertebrae",
            "description": "Extremely tightly curled tail due to genetic mutations. Vertebrae are fused or wedge-shaped.",
            "image_url": "/images/pug-tail.jpg",
            "fun_fact": "Pugs have been selectively bred for this trait for centuries - their tails literally cannot straighten due to bone structure."
        },
        {
            "breed": "English Bulldog", 
            "tail_type": "Screw Tail",
            "natural_curl_severity": 98,
            "genetic_factor": "DVL2 mutation (fixed allele)",
            "straightening_probability": 0.01,
            "vertebrae_issues": "Severe vertebral malformations",
            "description": "Nearly 100% fixed genetic mutation causing extreme tail deformation. Often ingrown.",
            "image_url": "/images/bulldog-tail.jpg",
            "fun_fact": "English Bulldogs are so genetically fixed for this trait that finding a straight-tailed one is virtually impossible."
        },
        {
            "breed": "French Bulldog",
            "tail_type": "Screw Tail", 
            "natural_curl_severity": 97,
            "genetic_factor": "DVL2 mutation (fixed allele)",
            "straightening_probability": 0.02,
            "vertebrae_issues": "Severe vertebral malformations",
            "description": "Fixed genetic mutation similar to English Bulldogs. Tail often appears as a button.",
            "image_url": "/images/frenchie-tail.jpg", 
            "fun_fact": "French Bulldogs often have tails so short and curled they look like little buttons on their rear end."
        },
        {
            "breed": "Boston Terrier",
            "tail_type": "Screw Tail",
            "natural_curl_severity": 90,
            "genetic_factor": "DVL2 mutation (90% frequency)",
            "straightening_probability": 0.08,
            "vertebrae_issues": "Variable vertebral malformations",
            "description": "High frequency of DVL2 mutation but some variation exists in the breed.",
            "image_url": "/images/boston-tail.jpg",
            "fun_fact": "Boston Terriers have slightly more tail variation than their bulldog cousins, but most still have permanently curved tails."
        },
        {
            "breed": "Basenji",
            "tail_type": "Tightly Curled",
            "natural_curl_severity": 85,
            "genetic_factor": "Spitz-type genetics",
            "straightening_probability": 0.15,
            "vertebrae_issues": "Normal vertebrae, tight curl",
            "description": "Ancient breed with naturally tight spiral curl. Vertebrae are normal but positioning creates permanent curl.",
            "image_url": "/images/basenji-tail.jpg",
            "fun_fact": "Basenjis are ancient African dogs whose tails curl so tightly they form perfect spirals - it's been this way for thousands of years."
        },
        {
            "breed": "Shiba Inu",
            "tail_type": "Sickle Tail",
            "natural_curl_severity": 75,
            "genetic_factor": "Spitz-type genetics", 
            "straightening_probability": 0.25,
            "vertebrae_issues": "Normal vertebrae",
            "description": "Sickle-shaped curl that can partially straighten during activity. Normal vertebral structure.",
            "image_url": "/images/shiba-tail.jpg",
            "fun_fact": "Shiba Inus can actually uncurl their tails when running or excited, but they always return to the curved position."
        },
        {
            "breed": "Akita",
            "tail_type": "Sickle Tail",
            "natural_curl_severity": 70,
            "genetic_factor": "Spitz-type genetics",
            "straightening_probability": 0.30,
            "vertebrae_issues": "Normal vertebrae",
            "description": "Large sickle tail that curves over the back. Can move and straighten during activity.",
            "image_url": "/images/akita-tail.jpg",
            "fun_fact": "Akitas use their large fluffy tails as blankets, curling up and covering their noses with their tails when sleeping."
        },
        {
            "breed": "Siberian Husky",
            "tail_type": "Sickle Tail",
            "natural_curl_severity": 65,
            "genetic_factor": "Spitz-type genetics",
            "straightening_probability": 0.35,
            "vertebrae_issues": "Normal vertebrae",
            "description": "Flexible sickle tail used for warmth and balance. Straightens during running.",
            "image_url": "/images/husky-tail.jpg",
            "fun_fact": "Huskies straighten their tails like rudders when running at high speed, then curl them back up for warmth."
        },
        {
            "breed": "Pomeranian",
            "tail_type": "Plumed Curl",
            "natural_curl_severity": 80,
            "genetic_factor": "Spitz-type genetics",
            "straightening_probability": 0.20,
            "vertebrae_issues": "Normal vertebrae",
            "description": "Dense, plumed tail that curls over the back. Can move but rarely fully straightens.",
            "image_url": "/images/pomeranian-tail.jpg",
            "fun_fact": "Pomeranians' tails are so fluffy and curved they look like feather dusters permanently attached to their backs."
        },
        {
            "breed": "Chow Chow",
            "tail_type": "Curled",
            "natural_curl_severity": 85,
            "genetic_factor": "Spitz-type genetics",
            "straightening_probability": 0.15,
            "vertebrae_issues": "Normal vertebrae",
            "description": "Thick, heavily feathered tail carried curled over the back. Dense coat adds to curl appearance.",
            "image_url": "/images/chow-tail.jpg",
            "fun_fact": "Chow Chows have such thick tail fur that even if the tail could straighten, you probably couldn't tell through all that fluff."
        },
        {
            "breed": "Labrador Retriever",
            "tail_type": "Straight (Otter)",
            "natural_curl_severity": 10,
            "genetic_factor": "Working dog genetics",
            "straightening_probability": 0.95,
            "vertebrae_issues": "None - normal tail",
            "description": "Thick, straight tail used as rudder when swimming. Naturally straight with slight curve at tip.",
            "image_url": "/images/labrador-tail.jpg",
            "fun_fact": "Labradors' tails are designed to be straight - they use them as rudders when swimming, so a curved tail would be counterproductive."
        },
        {
            "breed": "German Shepherd",
            "tail_type": "Straight (Saber)",
            "natural_curl_severity": 15,
            "genetic_factor": "Working dog genetics",
            "straightening_probability": 0.90,
            "vertebrae_issues": "None - normal tail",
            "description": "Long, straight tail with slight curve at the end. Carried low when relaxed.",
            "image_url": "/images/gsd-tail.jpg",
            "fun_fact": "German Shepherds' tails are naturally straight and hang down like sabers - curled tails are considered a fault in the breed standard."
        },
        {
            "breed": "Golden Retriever",
            "tail_type": "Straight (Feathered)",
            "natural_curl_severity": 20,
            "genetic_factor": "Working dog genetics",
            "straightening_probability": 0.85,
            "vertebrae_issues": "None - normal tail",
            "description": "Straight tail with feathering, carried level with back or slightly raised when alert.",
            "image_url": "/images/golden-tail.jpg",
            "fun_fact": "Golden Retrievers wag their straight tails so enthusiastically they're known for clearing coffee tables with their happy tail syndrome."
        },
        {
            "breed": "Beagle",
            "tail_type": "Straight (Gay Tail)",
            "natural_curl_severity": 25,
            "genetic_factor": "Hound genetics",
            "straightening_probability": 0.80,
            "vertebrae_issues": "None - normal tail",
            "description": "Straight tail carried high and erect, often with white tip for visibility during hunting.",
            "image_url": "/images/beagle-tail.jpg",
            "fun_fact": "Beagles' tails are bred to have white tips so hunters can see them in tall grass - definitely needs to be straight for visibility."
        },
        {
            "breed": "American Staffordshire Terrier",
            "tail_type": "Variable",
            "natural_curl_severity": 40,
            "genetic_factor": "DVL2 mutation (18.9% frequency)",
            "straightening_probability": 0.60,
            "vertebrae_issues": "Variable - some malformations",
            "description": "Mixed genetics - some dogs have DVL2 mutation causing curl, others have straight tails.",
            "image_url": "/images/amstaff-tail.jpg",
            "fun_fact": "AmStaffs are like a genetic lottery - some have curly tails due to bulldog ancestry, others have straight tails from terrier genetics."
        }
    ],
    "genetic_explanations": {
        "DVL2_mutation": {
            "description": "A frameshift deletion in the DVL2 gene causes vertebral malformations",
            "inheritance": "Autosomal recessive",
            "penetrance": "Nearly 100% for tail malformations",
            "human_equivalent": "Robinow syndrome"
        },
        "spitz_genetics": {
            "description": "Natural cold-climate adaptations favoring curled tails for warmth",
            "inheritance": "Polygenic",
            "penetrance": "Variable, usually 70-90%",
            "human_equivalent": "None - normal variation"
        }
    }
}

# Save the data
with open('dog_tail_data.json', 'w') as f:
    json.dump(dog_tail_data, f, indent=2)

# Create a summary DataFrame for analysis
df_data = []
for breed_info in dog_tail_data['breeds']:
    df_data.append({
        'Breed': breed_info['breed'],
        'Tail Type': breed_info['tail_type'],
        'Curl Severity (%)': breed_info['natural_curl_severity'],
        'Straightening Probability (%)': breed_info['straightening_probability'] * 100,
        'Genetic Factor': breed_info['genetic_factor']
    })

df = pd.DataFrame(df_data)
print("Dog Tail Characteristics Summary:")
print("="*50)
print(df.to_string(index=False))

print(f"\nData saved to 'dog_tail_data.json'")
print(f"Total breeds analyzed: {len(dog_tail_data['breeds'])}")