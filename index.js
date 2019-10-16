//numero aleatori
function numberGenerator(longitud){
    return Math.round(Math.random()*longitud-1);
}

//nom male
function manNameGenerator(event){
    let titleMas = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    let adj = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
    let sus = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    resultado = (`${titleMas[numberGenerator(titleMas.length)]} ${adj[numberGenerator(adj.length)]} ${sus[numberGenerator(sus.length)]}`);
    return resultado; //el numero aleatori generat va dins de cada array com a i.
}

let manButton = document.querySelectorAll(".man__button")[0];

manButton.addEventListener("click", ()=>{
    let manName = manNameGenerator(event);
    outputContainer.value = `${manName}`
});

//nom dona
function womanNameGenerator(event){
    let titleFem = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    let adj = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
    let sus = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    resultado = (`${titleFem[numberGenerator(titleFem.length)]} ${adj[numberGenerator(adj.length)]} ${sus[numberGenerator(sus.length)]}`);
    return resultado;
}

let womanButton = document.querySelectorAll(".woman__button")[0];
womanButton.addEventListener("click", ()=>{
    let womanName = womanNameGenerator(event);
    outputContainer.value = `${womanName}`
});

//nom input
let outputContainer = document.querySelectorAll(".body__input")[0];