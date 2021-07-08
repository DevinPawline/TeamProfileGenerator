// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Devin', 90, 'pawlinedevin@gmail.com', 'dpawline');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Devin', 90, 'pawlinedevin@gmail.com', 'dpawline');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
