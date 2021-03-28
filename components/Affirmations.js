
export default function Affirmations() {
    const affirmations = [ 'You can do this!', 'Shine bright today!', 'Believe in the magic within', 'You are beautiful', 'You are the light in the dark', 'You are an abundance of love and light', 'You will thrive and prosper just be patient with yourself', 'Cheers to your beautiful life', 'Free yourself and dance with life', 'To persevere is favorbale' ]
    const randomAffirmation = Math.floor(Math.random()*affirmations.length) 
    console.log(affirmations[randomAffirmation])
    return affirmations[randomAffirmation]
}
