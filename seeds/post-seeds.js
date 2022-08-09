const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        blog_content: 'Im going to hire professional help tomorrow. I cant handle this anymore. She fell over the coffee table and now there is blood in her catheter. ',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        blog_content: 'The headache wouldnt go away. Shes taken medicine but even that didnt help.',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        blog_content: 'Twenty-five hours had passed since the incident. It seemed to be a lot longer than that.',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        blog_content: 'There was something beautiful in his hate. It wasnt the hate itself as it was a disgusting display of racism and intolerance',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        blog_content: 'It had become a far too common an event in her life. She has specifically placed the key to the box in a special place so that she wouldnt lose it and know exactly where it was when the key was needed.',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        blog_content: 'All he wanted was a candy bar.',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        blog_content: 'The clowns had taken over. And yes, they were literally clowns.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        blog_content: 'There wasnt a whole lot more that could be done.',
        user_id: 1
    },
    {
        title: 'Duis ac nibh.',
        blog_content: 'A quiet house is nice until you are ordered to stay in it for months.',
        user_id: 9
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        blog_content: 'We will not allow you to bring your pet armadillo along.',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        blog_content: 'The body piercing didnt go exactly as he expected.',
        user_id: 3
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        blog_content: 'Be careful with that butter knife.',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        blog_content: 'It must be easy to commit crimes as a snake because you dont have to worry about leaving fingerprints.',
        user_id: 8
    },
    {
        title: 'Nulla tellus.',
        blog_content: 'The secret code they created made no sense, even to them.',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        blog_content: 'She had convinced her kids that any mushroom found on the ground would kill them if they touched it.',
        user_id: 3
    },
    {
        title:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        blog_content: 'Fluffy pink unicorns are a popular status symbol among macho men.',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        blog_content: 'Boulders lined the side of the road foretelling what could come next.',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        blog_content: 'The best key lime pie is still up for debate.',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        blog_content: 'It turns out you dont need all that stuff you insisted you did.',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        blog_content: 'I am my aunts sisters daughter.',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;