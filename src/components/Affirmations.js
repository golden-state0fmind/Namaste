
export default function Affirmations() {
    const affirmations = [ 'You can do this! Remember to stay consistent and build healthy habits it might be hard in the beginning but over time you will get stronger.', 'Shine bright today! Make today your day keep in mind how valuable you are even on the cloudy days.', 'Believe in yourself and have the patience to let yourself grow and develop into the best version of yourself.', 'Get after it today and own the day start with a light stretch and focus on your inner power.', 'A piece of the universe resides in you now rise and glow.', 'Get ready to conquer your destiny for greatness it starts with you realizing the power of your thoughts.Get after it.', 'You will thrive and prosper just be patient with yourself.', 'Free yourself and dance with life if you have been putting in the work maybe take a break but if you are just starting there is no time like the present to improve.', 'To persevere is favorbale. Do not quit for any reason. Stay resilient or better yet be like water.' ]
    const randomAffirmation = Math.floor(Math.random() * affirmations.length)
    return affirmations[randomAffirmation]
};
