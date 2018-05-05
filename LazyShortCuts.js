
	function getRanNum (lower, upper)
	{
		if (lower < upper || lower == upper)
		{
			var num = parseInt(Math.random() * ((upper + 1) - lower)+lower);
			return num;
		}
		else
		{
			return null;
		}
	}

	cardChoices = [
					  {name:"trainFareIncrease", phrase:"New Yorkers think the train fare is too high. MTA need more money to keep the system efficient. Should you increase the train fare",yesWelfare:20,yesHealth:-10,yesHappiness:-20,noWelfare:-20,noHappiness:20,noHealth:10,img:"train.jpg"},
					   {name:"AddSchool",phrase:"The population increase is leading to an overcrowding in public schools. Do you want to add a new school to your city",yesWelfare:-20,yesHealth:10,yesHappiness:10,noWelfare:30,noHealth:-30,noHappiness:-20,img:"addSchool.jpg"},
					   {name:"fixWater",phrase:"The water in the city has tested positive for lead. Fixing the problem is very expensive, but will be for the betterment of the people. Should you fix it?",yesWelfare:-40,yesHealth:40,yesHappiness:40,noWelfare:30,noHealth:-40,noHappiness:-40,img:"water.jpg"},
					   {name:"homeless",phrase:"The rise of poverty in the city is leading to many homeless families. You need to build more houses and establish financial programs to fix the problem. Do you want to do this?",yesWelfare:-60,yesHealth:40,yesHappiness:50,noWelfare:10,noHealth:-50,noHappiness:-60,img:"homeless.jpg"},
					   {name:"housing",phrase:"Families and indiviuals need more afforable housing. Should we build more?",yesWelfare:-50,yesHealth:20,yesHappiness:30,noWelfare:30,noHealth:-20,noHappiness:-30,img:"housing.jpg"},
					   {name:"wasteMangement",phrase:"We need a new facility to store to remove waste in the city Should we build one?",yesWelfare:-40,yesHealth:40,yesHappiness:30,noWelfare:30,noHealth:-30,noHappiness:-20,img:"waste.jpg"},
					   {name:"crime",phrase:"Crime is increasing in your city. Some believe we need more prisons",yesWelfare:-20,yesHealth:30,yesHappiness:50,noWelfare:10,noHealth:30,noHappiness:-40,img:"crime.jpg"},
					   {name:"trainFareIncrease", phrase:"New Yorkers think the train fare is too high. MTA need more money to keep the system efficient. Should you increase the train fare",yesWelfare:20,yesHealth:-10,yesHappiness:-20,noWelfare:-20,noHappiness:20,noHealth:10,img:"train.jpg"},


					   {name:"CDC ALERT", phrase:"An infected individual has escaped a quarintined zone and is found in the park. Close down park to stop the spread of disease",yesWelfare:-30,yesHealth:30,yesHappiness:20,noWelfare:10,noHappiness:-40,noHealth:-40,img:"cdc.jpg"},
						{name:"Build an aquarium", phrase:"Build an aquarium to boost your citizens happiness",yesWelfare:-20,yesHealth:0,yesHappiness:15,noWelfare:10,noHappiness:-15,noHealth:0,img:"aquarium.jpg"},
						{name:"Traffic", phrase:"Reduce the amount of traffic by building more roads",yesWelfare:-15,yesHealth:0,yesHappiness:20,noWelfare:10,noHappiness:-20,noHealth:0,img:"traffic.jpg"},
						{name:"More Trains", phrase:"Reduce MTA wait time by adding more trains",yesWelfare:-15,yesHealth:0,yesHappiness:20,noWelfare:10,noHappiness:-20,noHealth:0,img:"train.jpg"},
						{name:"More hospitals", phrase:"Build more hospitals",yesWelfare:-20,yesHealth:25,yesHappiness:10,noWelfare:15,noHappiness:-10,noHealth:-20,img:"hospital.jpg"},
						{name:"Money Money Money", phrase:"Increase taxes to increase your funds",yesWelfare:25,yesHealth:0,yesHappiness:-20,noWelfare:-20,noHappiness:10,noHealth:0,img:"taxes.jpg"},
						{name:"Storm Damages", phrase:"Help rebuild the broken homes, public places, and clean the streets",yesWelfare:-20,yesHealth:10,yesHappiness:10,noWelfare:10,noHappiness:-10,noHealth:-10,img:"stormDamages.jpg"},
						{name:"Labor Strike", phrase:"The city workers seem to be unhappy about their hourly pay. Increase workers pay to get them back to work",yesWelfare:-20,yesHealth:15,yesHappiness:25,noWelfare:10,noHappiness:-20,noHealth:-10,img:"laborStrike.jpg"},
						{name:"Build a park", phrase:"City life can get very busy and stressful. Build your citizens a park so they can have place to relax and enjoy nature.",yesWelfare:-10,yesHealth:10,yesHappiness:15,noWelfare:10,noHappiness:-10,noHealth:-10,img:"park.jpg"}

					];
