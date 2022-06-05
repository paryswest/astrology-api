const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const astroSigns = {
    'aries' : {
        'calendarPeriod': 'March 21st - April 19th',
        'animalSymbol' : 'The Ram',
        'element': 'Fire',
        'modality': 'Cardinal',
        'rulingPlanet': 'Mars',
        'compatibility' : 'Sagittarius, Gemini, Libra',
        'bestTrait' : 'Optimistic',
        'worstTrait' : 'Hot-headed (extreme)'
    },
    'taurus' : {
        'calendarPeriod': 'April 20th - May 20th',
        'animalSymbol' : 'The Bull (Male Cow)',
        'element': 'Earth',
        'modality': 'Fixed',
        'rulingPlanet': 'Venus',
        'compatibility' : 'Cancer, Virgo, Capricorn',
        'bestTrait' : 'Intelligent, Loyal, Hardworking',
        'worstTrait' : 'Emotionally closed off'
    }, 
    'gemini' : {
        'calendarPeriod': 'May 21st - June 21st',
        'animalSymbol' : 'The Twins',
        'element': 'Air',
        'modality': 'Mutable',
        'rulingPlanet': 'Mercury',
        'compatibility' : 'Sagittarius, Libra, Aquarius',
        'bestTrait' : 'Energetic and Enthusiastic',
        'worstTrait' : 'Two Faced and Gossipy'
    }, 
    'cancer' : {
        'calendarPeriod': 'June 22nd - July 22nd',
        'animalSymbol' : 'The Crab',
        'element': 'Water',
        'modality': 'Cardinal',
        'rulingPlanet': 'The Moon',
        'compatibility' : 'Taurus, Pisces, Scorpio',
        'bestTrait' : 'Extremely Caring',
        'worstTrait' : 'Too emotional (nothing wrong with that).'
    },
    'leo' : {
        'calendarPeriod': 'July 23rd - August 22nd',
        'animalSymbol' : 'The Lion',
        'element': 'Fire',
        'modality': 'Fixed',
        'rulingPlanet': 'The Sun',
        'compatibility' : 'Sagittarius, Gemini, Aquarius',
        'bestTrait' : 'Friendly and Charismatic',
        'worstTrait' : 'Inability to control their impulses'
    }, 
    'virgo' : {
        'calendarPeriod': 'August 22nd - September 23rd',
        'animalSymbol' : 'The Virgin',
        'element': 'Earth',
        'modality': 'Mutable',
        'rulingPlanet': 'Mercury',
        'compatibility' : 'Taurus, Scorpio, Capricorn',
        'bestTrait' : 'Practical, Sensible, Loyal',
        'worstTrait' : 'Overly critical of themselves'
    }, 
   'libra' : {
        'calendarPeriod': 'September 23rd - October 23rd',
        'animalSymbol' : 'The Scales',
        'element': 'Air',
        'modality': 'Cardinal',
        'rulingPlanet': 'Venus',
        'compatibility' : 'Aries, Aquarius, Libra',
        'bestTrait' : 'Sense of balance/fairness',
        'worstTrait' : 'Indecisevness'
    }, 
    'scorpio' : {
        'calendarPeriod': 'October 24th - November 21st',
        'animalSymbol' : 'The Scorpion',
        'element': 'Water',
        'modality': 'Fixed',
        'rulingPlanet': 'Pluto/Mars',
        'compatibility' : 'Cancer, Pisces, Virgo',
        'bestTrait' : 'Full of Passion',
        'worstTrait' : 'Moody'
    },
    'sagittarius' : {
        'calendarPeriod': 'November 22nd - December 21st',
        'animalSymbol' : 'The Archer',
        'element': 'Fire',
        'modality': 'Mutable',
        'rulingPlanet': 'Jupiter',
        'compatibility' : 'Gemini, Aries, Sagittarius',
        'bestTrait' : 'Sense of independence',
        'worstTrait' : 'Lack of emotion'
    },
    'capricorn' : {
        'calendarPeriod': 'December 22nd - January 19th',
        'animalSymbol' : 'The Goat',
        'element': 'Earth',
        'modality': 'Cardinal',
        'rulingPlanet': 'Saturn',
        'compatibility' : 'Taurus, Virgo, Capricorn',
        'bestTrait' : 'Ambition and resourcefulness',
        'worstTrait' : 'Blunt/Straight-shooter (is that really bad though?)'
    }, 
    'aquarius' : {
        'calendarPeriod': 'January 20th - February 18th',
        'animalSymbol' : 'The Water Bearer',
        'element': 'Air',
        'modality': 'Fixed',
        'rulingPlanet': 'Uranus',
        'compatibility' : 'Gemini, Aquarius, Libra',
        'bestTrait' : 'Humanitarian Drive',
        'worstTrait' : 'Distant/Stubborn'
    },
    'pisces' : {
        'calendarPeriod': 'February 19th - March 20th',
        'animalSymbol' : 'The Fish',
        'element': 'Water',
        'modality': 'Mutable',
        'rulingPlanet': 'Neptune',
        'compatibility' : 'Gemini, Aquarius, Libra',
        'bestTrait' : 'Imagination/Creativity',
        'worstTrait' : 'Over-sensitivity (not a bad thing tbh)'
    },
    'unknown': {
        'calendarPeriod': 'Unknown',
        'animalSymbol' : 'Unknown',
        'element': 'Unknown',
        'modality': 'Unknown',
        'rulingPlanet': 'Unknown',
        'compatibility' : 'Unknown',
        'bestTrait' : 'Unknown',
        'worstTrait' : 'Unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.get('/astrology/', (req, res) => {
    if(astroSigns) {
        res.json(astroSigns)
    }
})

app.get('/astrology/:name/', (req, res) => {
    const astroName = req.params.name.toLowerCase()

    if(astroSigns[astroName]) {
        res.json(astroSigns[astroName])
    } else {
        res.json(astroSigns['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`);
})