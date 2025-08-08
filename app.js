// Dog Tail Proverb Interactive Application

class DogTailApp {
    constructor() {
        this.breeds = [];
        this.init();
    }

    async init() {
        // First set up fallback data immediately
        this.breeds = this.getFallbackBreedData();
        this.populateBreedDropdown();
        this.setupEventListeners();
        this.setupSmoothScrolling();
        
        // Then try to load external data
        await this.loadBreedData();
    }

    async loadBreedData() {
        try {
            const response = await fetch('https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/dddd9e3832987afb3b42e9cac0040531/3d053d96-6c04-44ec-b53a-db16e31c7f83/c33e7ec4.json');
            if (response.ok) {
                const data = await response.json();
                if (data.breeds && data.breeds.length > 0) {
                    this.breeds = data.breeds;
                    this.culturalInfo = data.cultural_info || {};
                    this.geneticExplanations = data.genetic_explanations || {};
                    // Repopulate dropdown with new data
                    this.populateBreedDropdown();
                }
            }
        } catch (error) {
            console.log('Using fallback data due to network issue:', error);
            // Fallback data is already loaded, so we're good
        }
    }

    getFallbackBreedData() {
        return [
            {
                breed: "English Bulldog",
                tail_type: "Screw Tail",
                natural_curl_severity: 98,
                genetic_factor: "DVL2 mutation (fixed allele)",
                straightening_probability: 0.01,
                vertebrae_issues: "Severe vertebral malformations",
                description: "Nearly 100% fixed genetic mutation causing extreme tail deformation. Often ingrown.",
                fun_fact: "English Bulldogs are so genetically fixed for this trait that finding a straight-tailed one is virtually impossible."
            },
            {
                breed: "Pug",
                tail_type: "Corkscrew",
                natural_curl_severity: 95,
                genetic_factor: "DVL2 mutation (homozygous)",
                straightening_probability: 0.05,
                vertebrae_issues: "Fused/wedge-shaped vertebrae",
                description: "Extremely tightly curled tail due to genetic mutations. Vertebrae are fused or wedge-shaped.",
                fun_fact: "Pugs have been selectively bred for this trait for centuries - their tails literally cannot straighten due to bone structure."
            },
            {
                breed: "French Bulldog",
                tail_type: "Screw Tail",
                natural_curl_severity: 97,
                genetic_factor: "DVL2 mutation (fixed allele)",
                straightening_probability: 0.02,
                vertebrae_issues: "Severe vertebral malformations",
                description: "Fixed genetic mutation similar to English Bulldogs. Tail often appears as a button.",
                fun_fact: "French Bulldogs often have tails so short and curled they look like little buttons on their rear end."
            },
            {
                breed: "Boston Terrier",
                tail_type: "Screw Tail",
                natural_curl_severity: 90,
                genetic_factor: "DVL2 mutation (90% frequency)",
                straightening_probability: 0.08,
                vertebrae_issues: "Variable vertebral malformations",
                description: "High frequency of DVL2 mutation but some variation exists in the breed.",
                fun_fact: "Boston Terriers have slightly more tail variation than their bulldog cousins, but most still have permanently curved tails."
            },
            {
                breed: "Basenji",
                tail_type: "Tightly Curled",
                natural_curl_severity: 85,
                genetic_factor: "Spitz-type genetics",
                straightening_probability: 0.15,
                vertebrae_issues: "Normal vertebrae, tight curl",
                description: "Ancient breed with naturally tight spiral curl. Vertebrae are normal but positioning creates permanent curl.",
                fun_fact: "Basenjis are ancient African dogs whose tails curl so tightly they form perfect spirals - it's been this way for thousands of years."
            },
            {
                breed: "Pomeranian",
                tail_type: "Plumed Curl",
                natural_curl_severity: 80,
                genetic_factor: "Spitz-type genetics",
                straightening_probability: 0.20,
                vertebrae_issues: "Normal vertebrae",
                description: "Dense, plumed tail that curls over the back. Can move but rarely fully straightens.",
                fun_fact: "Pomeranians' tails are so fluffy and curved they look like feather dusters permanently attached to their backs."
            },
            {
                breed: "Shiba Inu",
                tail_type: "Sickle Tail",
                natural_curl_severity: 75,
                genetic_factor: "Spitz-type genetics",
                straightening_probability: 0.25,
                vertebrae_issues: "Normal vertebrae",
                description: "Sickle-shaped curl that can partially straighten during activity. Normal vertebral structure.",
                fun_fact: "Shiba Inus can actually uncurl their tails when running or excited, but they always return to the curved position."
            },
            {
                breed: "Akita",
                tail_type: "Sickle Tail",
                natural_curl_severity: 70,
                genetic_factor: "Spitz-type genetics",
                straightening_probability: 0.30,
                vertebrae_issues: "Normal vertebrae",
                description: "Large sickle tail that curves over the back. Can move and straighten during activity.",
                fun_fact: "Akitas use their large fluffy tails as blankets, curling up and covering their noses with their tails when sleeping."
            },
            {
                breed: "Siberian Husky",
                tail_type: "Sickle Tail",
                natural_curl_severity: 65,
                genetic_factor: "Spitz-type genetics",
                straightening_probability: 0.35,
                vertebrae_issues: "Normal vertebrae",
                description: "Flexible sickle tail used for warmth and balance. Straightens during running.",
                fun_fact: "Huskies straighten their tails like rudders when running at high speed, then curl them back up for warmth."
            },
            {
                breed: "Chow Chow",
                tail_type: "Curled",
                natural_curl_severity: 85,
                genetic_factor: "Spitz-type genetics",
                straightening_probability: 0.15,
                vertebrae_issues: "Normal vertebrae",
                description: "Thick, heavily feathered tail carried curled over the back. Dense coat adds to curl appearance.",
                fun_fact: "Chow Chows have such thick tail fur that even if the tail could straighten, you probably couldn't tell through all that fluff."
            },
            {
                breed: "American Staffordshire Terrier",
                tail_type: "Variable",
                natural_curl_severity: 40,
                genetic_factor: "DVL2 mutation (18.9% frequency)",
                straightening_probability: 0.60,
                vertebrae_issues: "Variable - some malformations",
                description: "Mixed genetics - some dogs have DVL2 mutation causing curl, others have straight tails.",
                fun_fact: "AmStaffs are like a genetic lottery - some have curly tails due to bulldog ancestry, others have straight tails from terrier genetics."
            },
            {
                breed: "Beagle",
                tail_type: "Straight (Gay Tail)",
                natural_curl_severity: 25,
                genetic_factor: "Hound genetics",
                straightening_probability: 0.80,
                vertebrae_issues: "None - normal tail",
                description: "Straight tail carried high and erect, often with white tip for visibility during hunting.",
                fun_fact: "Beagles' tails are bred to have white tips so hunters can see them in tall grass - definitely needs to be straight for visibility."
            },
            {
                breed: "Golden Retriever",
                tail_type: "Straight (Feathered)",
                natural_curl_severity: 20,
                genetic_factor: "Working dog genetics",
                straightening_probability: 0.85,
                vertebrae_issues: "None - normal tail",
                description: "Straight tail with feathering, carried level with back or slightly raised when alert.",
                fun_fact: "Golden Retrievers wag their straight tails so enthusiastically they're known for clearing coffee tables with their happy tail syndrome."
            },
            {
                breed: "German Shepherd",
                tail_type: "Straight (Saber)",
                natural_curl_severity: 15,
                genetic_factor: "Working dog genetics",
                straightening_probability: 0.90,
                vertebrae_issues: "None - normal tail",
                description: "Long, straight tail with slight curve at the end. Carried low when relaxed.",
                fun_fact: "German Shepherds' tails are naturally straight and hang down like sabers - curled tails are considered a fault in the breed standard."
            },
            {
                breed: "Labrador Retriever",
                tail_type: "Straight (Otter)",
                natural_curl_severity: 10,
                genetic_factor: "Working dog genetics",
                straightening_probability: 0.95,
                vertebrae_issues: "None - normal tail",
                description: "Thick, straight tail used as rudder when swimming. Naturally straight with slight curve at tip.",
                fun_fact: "Labradors' tails are designed to be straight - they use them as rudders when swimming, so a curved tail would be counterproductive."
            }
        ];
    }

    populateBreedDropdown() {
        const dropdown = document.getElementById('breedSelect');
        if (!dropdown || !this.breeds.length) return;

        // Clear existing options except the first placeholder
        const placeholder = dropdown.querySelector('option[value=""]');
        dropdown.innerHTML = '';
        if (placeholder) {
            dropdown.appendChild(placeholder);
        } else {
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select a breed...';
            dropdown.appendChild(defaultOption);
        }

        // Sort breeds by straightening probability (lowest to highest)
        const sortedBreeds = [...this.breeds].sort((a, b) => a.straightening_probability - b.straightening_probability);

        sortedBreeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.breed;
            option.textContent = breed.breed;
            dropdown.appendChild(option);
        });

        console.log(`Loaded ${this.breeds.length} dog breeds into dropdown`);
    }

    setupEventListeners() {
        const breedSelect = document.getElementById('breedSelect');
        if (breedSelect) {
            breedSelect.addEventListener('change', (e) => {
                this.handleBreedSelection(e.target.value);
            });
        }
    }

    handleBreedSelection(breedName) {
        if (!breedName) {
            this.hideBreedResults();
            return;
        }

        const breed = this.breeds.find(b => b.breed === breedName);
        if (breed) {
            this.displayBreedResults(breed);
        }
    }

    displayBreedResults(breed) {
        // Show the results container
        const resultsContainer = document.getElementById('breedResults');
        if (resultsContainer) {
            resultsContainer.classList.remove('hidden');
            
            // Scroll to results with a slight delay for better UX
            setTimeout(() => {
                resultsContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 300);
        }

        // Populate breed information
        this.updateElement('breedName', breed.breed);
        this.updateElement('tailType', breed.tail_type);
        this.updateElement('curlSeverity', breed.natural_curl_severity);
        this.updateElement('geneticFactor', breed.genetic_factor);
        this.updateElement('breedDescription', breed.description);
        this.updateElement('funFact', breed.fun_fact);

        // Update probability meter with animation
        this.animateProbabilityMeter(breed.straightening_probability);
        
        // Update verdict text
        this.updateVerdictText(breed);
    }

    updateElement(elementId, value) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value;
        }
    }

    animateProbabilityMeter(probability) {
        const probabilityFill = document.getElementById('probabilityFill');
        const probabilityText = document.getElementById('probabilityText');
        
        if (!probabilityFill || !probabilityText) return;

        const percentage = Math.round(probability * 100);
        
        // Reset the fill
        probabilityFill.style.width = '0%';
        
        // Animate to the target percentage
        setTimeout(() => {
            probabilityFill.style.width = `${percentage}%`;
        }, 100);

        // Animate the percentage text
        let currentValue = 0;
        const increment = percentage / 50; // 50 frames for smooth animation
        const animateText = () => {
            currentValue += increment;
            if (currentValue >= percentage) {
                probabilityText.textContent = `${percentage}%`;
                return;
            }
            probabilityText.textContent = `${Math.round(currentValue)}%`;
            requestAnimationFrame(animateText);
        };
        
        setTimeout(animateText, 200);
    }

    updateVerdictText(breed) {
        const verdictElement = document.getElementById('verdictText');
        if (!verdictElement) return;

        const probability = breed.straightening_probability;
        let verdict = '';
        let emoji = '';

        if (probability <= 0.1) {
            verdict = "The ancient proverb holds absolutely true! This tail is virtually impossible to straighten.";
            emoji = "🚫";
        } else if (probability <= 0.3) {
            verdict = "The proverb is mostly correct - this tail would be extremely difficult to straighten.";
            emoji = "⚠️";
        } else if (probability <= 0.6) {
            verdict = "The proverb applies somewhat - this tail could potentially be influenced but would likely return to its natural state.";
            emoji = "🤔";
        } else {
            verdict = "This breed challenges the proverb! Their tails are naturally designed to be straight.";
            emoji = "✅";
        }

        verdictElement.innerHTML = `<strong>${emoji} ${verdict}</strong>`;
    }

    hideBreedResults() {
        const resultsContainer = document.getElementById('breedResults');
        if (resultsContainer) {
            resultsContainer.classList.add('hidden');
        }
    }

    setupSmoothScrolling() {
        // Handle navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Additional interactive features
class InteractiveEffects {
    constructor() {
        this.init();
    }

    init() {
        this.addHoverEffects();
        this.addScrollAnimations();
    }

    addHoverEffects() {
        // Add hover effects to cards
        const cards = document.querySelectorAll('.proverb-card, .science-card, .application-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    addScrollAnimations() {
        // Simple scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
}

// Utility functions
function addRandomQuotes() {
    const quotes = [
        "Wisdom is knowing what cannot be changed.",
        "Nature's design is perfect in its imperfection.",
        "Some things are meant to remain as they are.",
        "Ancient proverbs carry modern truths.",
        "Genetics writes the story that cannot be rewritten."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(`💭 ${randomQuote}`);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main application
    const app = new DogTailApp();
    
    // Initialize interactive effects
    const effects = new InteractiveEffects();
    
    // Add some personality
    addRandomQuotes();
    
    // Easter egg: log the proverb in multiple languages
    setTimeout(() => {
        console.log('🐕 Hindi: कुत्ते की पूँछ टेढ़ी की टेढ़ी रहती है');
        console.log('🐕 Arabic: ديل الكلب عمره ما ينعدل');
        console.log('🐕 English: A dog\'s tail will never be straight, even if you put it in a pipe');
    }, 2000);
});

// Export for potential future use
window.DogTailApp = DogTailApp;